import { Controller } from "@/interfaces/controller";
import { ActionSpecGetResponse } from "@/utils/blinks";
import axios from "axios";
import * as web3 from "@solana/web3.js";
import { Request, Response, Router } from "express";
import { z } from "zod";
import { connection, program, programId } from "@/utils/solana";
import * as anchor from "@coral-xyz/anchor";
import { isFuture, isPast } from "date-fns";

export class BlinksController implements Controller {
  public path: string = ``;
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.redirect);
    this.router.get("/actions.json", this.action);
    this.router.get(`${this.path}/contribution/:slug`, this.contribution);
    this.router.post(`${this.path}/contribution/tx`, this.contributionTx);
    this.router.post(`${this.path}/tip/tx`, this.tipTx);
  }

  private contribution = async (req: Request, res: Response) => {
    try {
      const { slug } = z
        .object({
          slug: z.string().min(3),
        })
        .parse(req.params);

      const { data } = await axios.get(
        `https://prod-api.cubik.so/v1/project/full/${slug}`
      );

      const events = data.data.projectJoinEvent as any[];

      let eventIsLive: any = null;

      events.forEach((event) => {
        const votingTimeline = (event.event.eventStatus as any[]).find(
          (e) => e.status === "VOTING"
        );

        const dateStart = new Date(votingTimeline.startTime);
        const dateEnd = new Date(votingTimeline.endTime);
        if (isFuture(dateEnd) && isPast(dateStart)) {
          eventIsLive = event;
        }
      });

      const projectAccount = web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from("project"),
          new web3.PublicKey(data.data.createKey).toBuffer(),
          new anchor.BN(data.data.projectUserCount).toArrayLike(
            Buffer,
            "le",
            8
          ),
        ],
        programId
      );

      const blinksData: ActionSpecGetResponse = {
        icon: data.data.logo,
        label: "Donate SOL",
        title: `Donate to ${data.data.name}`,
        description: data.data.shortDescription,
        links: {
          actions: eventIsLive
            ? [
                {
                  label: "Donate 0.1 SOL",
                  href: `/contribution/tx?projectAccount=${projectAccount[0].toBase58()}&amount=0.1&event=${eventIsLive.event.eventKey}`,
                },
                {
                  label: "Donate 0.5 SOL",
                  href: `/contribution/tx?projectAccount=${projectAccount[0].toBase58()}&amount=0.5&event=${eventIsLive.event.eventKey}`,
                },
                {
                  label: "Donate 1 SOL",
                  href: `/contribution/tx?projectAccount=${projectAccount[0].toBase58()}&amount=1&event=${eventIsLive.event.eventKey}`,
                },
                {
                  label: "Donate SOL",
                  href: `/contribution/tx?projectAccount=${projectAccount[0].toBase58()}&amount={amount}&event=${eventIsLive.event.eventKey}`,
                  parameters: [
                    {
                      name: "amount", // input field
                      label: "SOL amount", // input placeholder
                    },
                  ],
                },
              ]
            : [
                {
                  label: "Donate 0.1 SOL",
                  href: `/tip/tx?projectAccount=${projectAccount[0].toBase58()}&amount=0.1`,
                },
                {
                  label: "Donate 0.5 SOL",
                  href: `/tip/tx?projectAccount=${projectAccount[0].toBase58()}&amount=0.5`,
                },
                {
                  label: "Donate 1 SOL",
                  href: `/tip/tx?projectAccount=${projectAccount[0].toBase58()}&amount=1`,
                },
                {
                  label: "Donate SOL",
                  href: `/tip/tx?projectAccount=${projectAccount[0].toBase58()}&amount={amount}`,
                  parameters: [
                    {
                      name: "amount", // input field
                      label: "SOL amount", // input placeholder
                    },
                  ],
                },
              ],
        },
      };

      return res.send(blinksData);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  private contributionTx = async (req: Request, res: Response) => {
    try {
      const { account } = z
        .object({
          account: z.string().min(1),
        })
        .parse(req.body);

      const { projectAccount, amount, event } = z
        .object({
          projectAccount: z.string().min(1),
          amount: z.string().min(1),
          event: z.string().min(1),
        })
        .parse(req.query);

      let ixs: web3.TransactionInstruction[] = [];
      console.log("UserPDA");

      const userPDA = web3.PublicKey.findProgramAddressSync(
        [Buffer.from("user"), new web3.PublicKey(account).toBuffer()],
        programId
      );

      const userAccount = await connection.getAccountInfo(userPDA[0]);
      // Creates new user Account if missing
      if (!userAccount) {
        console.log("UserPDA Create");
        const ix = await program.methods
          .createUser(account.slice(0, 5))
          .accounts({
            authority: new web3.PublicKey(account),
            userAccount: userPDA[0],
            systemProgram: web3.SystemProgram.programId,
            rent: web3.SYSVAR_RENT_PUBKEY,
          })
          .instruction();
        ixs.push(ix);
      }

      const eventPDA = web3.PublicKey.findProgramAddressSync(
        [Buffer.from("event"), new web3.PublicKey(event).toBuffer()],
        programId
      );
      console.log("event");
      const projectPDA = new web3.PublicKey(projectAccount);
      console.log("Project");
      const eventJoinAccount = web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from("event_join"),
          eventPDA[0].toBuffer(),
          projectPDA.toBuffer(),
        ],
        programId
      );
      const projectAccountInfo =
        await program.account.project.fetch(projectPDA);

      console.log("ix");
      const ix = await program.methods
        .contributionSol(
          new anchor.BN(parseFloat(amount) * web3.LAMPORTS_PER_SOL)
        )
        .accounts({
          authority: new web3.PublicKey(account),
          receiver: projectAccountInfo.vaultPubkey,
          systemProgram: web3.SystemProgram.programId,
          rent: web3.SYSVAR_RENT_PUBKEY,
          projectAccount: projectPDA,
          userAccount: userPDA[0],
          eventAccount: eventPDA[0],
          eventJoinAccount: eventJoinAccount[0],
        })
        .instruction();

      ixs.push(ix);
      const { blockhash } = await connection.getLatestBlockhash();
      console.log("tx");
      const transaction = new web3.VersionedTransaction(
        new web3.TransactionMessage({
          payerKey: new web3.PublicKey(account),
          recentBlockhash: blockhash,
          instructions: ixs,
        }).compileToV0Message()
      );

      const serializedTransaction = transaction.serialize();

      const base64Transaction = Buffer.from(serializedTransaction).toString(
        "base64"
      );
      const message = `Thank you for your Donation`;

      return res.status(200).send({ transaction: base64Transaction, message });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  private redirect = async (_req: Request, res: Response) => {
    return res.redirect(301, "https://www.cubik.so");
  };

  private action = async (_req: Request, res: Response) => {
    return res.send({
      rules: [
        {
          pathPattern: "/**",
          apiPath: "https://blinks.cubik.so/**",
        },
      ],
    });
  };

  private tipTx = async (req: Request, res: Response) => {
    try {
      const { account } = z
        .object({
          account: z.string().min(1),
        })
        .parse(req.body);

      const { projectAccount, amount } = z
        .object({
          projectAccount: z.string().min(1),
          amount: z.string().min(1),
        })
        .parse(req.query);

      let ixs: web3.TransactionInstruction[] = [];

      const userPDA = web3.PublicKey.findProgramAddressSync(
        [Buffer.from("user"), new web3.PublicKey(account).toBuffer()],
        programId
      );

      const userAccount = await connection.getAccountInfo(userPDA[0]);

      // Creates new user Account if missing
      if (!userAccount) {
        const ix = await program.methods
          .createUser(account.slice(0, 5))
          .accounts({
            authority: new web3.PublicKey(account),
            userAccount: userPDA[0],
            systemProgram: web3.SystemProgram.programId,
            rent: web3.SYSVAR_RENT_PUBKEY,
          })
          .instruction();
        ixs.push(ix);
      }

      const projectPDA = new web3.PublicKey(projectAccount);
      const projectAccountInfo =
        await program.account.project.fetch(projectPDA);

      const ix = await program.methods
        .donateSol(new anchor.BN(parseFloat(amount) * web3.LAMPORTS_PER_SOL))
        .accounts({
          authority: new web3.PublicKey(account),
          receiver: projectAccountInfo.vaultPubkey,
          systemProgram: web3.SystemProgram.programId,
          rent: web3.SYSVAR_RENT_PUBKEY,
          projectAccount: projectPDA,
          userAccount: userPDA[0],
        })
        .instruction();

      ixs.push(ix);
      const { blockhash } = await connection.getLatestBlockhash();
      const transaction = new web3.VersionedTransaction(
        new web3.TransactionMessage({
          payerKey: new web3.PublicKey(account),
          recentBlockhash: blockhash,
          instructions: ixs,
        }).compileToV0Message()
      );

      const serializedTransaction = transaction.serialize();

      const base64Transaction = Buffer.from(serializedTransaction).toString(
        "base64"
      );
      const message = `Thank you for your Donation`;

      return res.status(200).send({ transaction: base64Transaction, message });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
}
