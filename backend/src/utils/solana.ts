import { Cubik } from "@cubik-so/sdk";
import { IDL } from "./idl";
import * as web3 from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";

const tempKeyPair = web3.Keypair.generate();
const programId = new web3.PublicKey(
  "CUbkXMRWxumGzDwf43ysyFm3da77JRuUqLF1bmW4tGoZ"
);
const connection = new web3.Connection(
  "" // TODO: NEED TO ADD
);
const provider = new anchor.AnchorProvider(
  connection,
  new anchor.Wallet(tempKeyPair),
  {
    commitment: "confirmed",
  }
);

const program = new anchor.Program<Cubik>(IDL, programId, provider);

export { connection, programId, tempKeyPair, program };
