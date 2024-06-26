import { Cubik } from "@cubik-so/sdk";

export const IDL: Cubik = {
  version: "0.0.0",
  name: "cubik",
  instructions: [
    {
      name: "createUser",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "userAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "username",
          type: "string",
        },
      ],
    },
    {
      name: "createProject",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "createKey",
          isMut: false,
          isSigner: true,
        },
        {
          name: "projectAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programConfigPda",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "multisig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "squadsProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "counter",
          type: "u64",
        },
        {
          name: "membersKeys",
          type: {
            vec: "publicKey",
          },
        },
        {
          name: "threshold",
          type: "u16",
        },
        {
          name: "configAuthority",
          type: {
            option: "publicKey",
          },
        },
        {
          name: "timeLock",
          type: "u32",
        },
        {
          name: "memo",
          type: {
            option: "string",
          },
        },
        {
          name: "rentCollector",
          type: {
            option: "publicKey",
          },
        },
      ],
    },
    {
      name: "updateProjectStatus",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "subAdminAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "projectAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "status",
          type: {
            defined: "ProjectVerification",
          },
        },
      ],
    },
    {
      name: "transferProject",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "projectAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "transferUserAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "createEventJoin",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "eventJoinAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "projectAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "createEvent",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "eventKey",
          isMut: true,
          isSigner: true,
        },
        {
          name: "eventAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "subAdminAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "matchingPool",
          type: "u64",
        },
        {
          name: "eventAdminSigner",
          type: "publicKey",
        },
      ],
    },
    {
      name: "updateEventJoinStatus",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "subAdminAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventJoinAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "projectAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "status",
          type: {
            defined: "EventProjectStatus",
          },
        },
      ],
    },
    {
      name: "updateEvent",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "eventAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "matchingPool",
          type: "u64",
        },
      ],
    },
    {
      name: "createAdmin",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "adminAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "inviteEventJoin",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "eventJoinAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "subAdminAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "projectAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "createSubAdmin",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "createKey",
          isMut: false,
          isSigner: true,
        },
        {
          name: "subAdminAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "adminAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "newSubAdminAuthority",
          type: "publicKey",
        },
        {
          name: "level",
          type: "u8",
        },
      ],
    },
    {
      name: "closeSubAdmin",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "closeSubAdminAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "subAdminAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "updateSubAdminLevel",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "subAdminAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "signerSubAdminAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "level",
          type: "u8",
        },
      ],
    },
    {
      name: "addEventAccess",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "subAdminAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "signerSubAdminAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "removeEventAccess",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "subAdminAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "signerSubAdminAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "initSponsorWithSelfCustody",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "createKey",
          isMut: true,
          isSigner: true,
        },
        {
          name: "userAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sponsorAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sponsorTeamAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programConfigPda",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "multisig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "squadsProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "totalCommitted",
          type: "u128",
        },
        {
          name: "membersKeys",
          type: {
            vec: "publicKey",
          },
        },
        {
          name: "threshold",
          type: "u16",
        },
        {
          name: "configAuthority",
          type: {
            option: "publicKey",
          },
        },
      ],
    },
    {
      name: "initSponsorWithoutSelfCustody",
      accounts: [
        {
          name: "createKey",
          isMut: true,
          isSigner: true,
        },
        {
          name: "userAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sponsorAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sponsorTeamAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "cubikSponsor",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "totalCommitted",
          type: "u128",
        },
      ],
    },
    {
      name: "initCubikSponsor",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "createKey",
          isMut: true,
          isSigner: true,
        },
        {
          name: "userAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "subAdminAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sponsorAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sponsorTeamAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programConfigPda",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "multisig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "squadsProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "totalCommitted",
          type: "u128",
        },
        {
          name: "membersKeys",
          type: {
            vec: "publicKey",
          },
        },
        {
          name: "threshold",
          type: "u16",
        },
        {
          name: "configAuthority",
          type: {
            option: "publicKey",
          },
        },
      ],
    },
    {
      name: "addMemberSponsor",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "sponsorTeamAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sponsorAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "teamMemberKey",
          type: "publicKey",
        },
      ],
    },
    {
      name: "removeMemberSponsor",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "sponsorTeamAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sponsorAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "teamMemberKey",
          type: "publicKey",
        },
      ],
    },
    {
      name: "fundSponsorSpl",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenAtaSender",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenAtaReceiver",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sponsorTeamAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sponsorAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "fundSponsorSol",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "receiver",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sponsorTeamAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sponsorAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "donateSpl",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenAtaSender",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenAtaReceiver",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "projectAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "donateSol",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "receiver",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "projectAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "contributionSol",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "receiver",
          isMut: true,
          isSigner: false,
        },
        {
          name: "projectAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventJoinAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "contributionSpl",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenAtaSender",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenAtaReceiver",
          isMut: true,
          isSigner: false,
        },
        {
          name: "projectAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventJoinAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "admin",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "eventJoin",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "status",
            type: {
              defined: "EventProjectStatus",
            },
          },
          {
            name: "donation",
            type: "u64",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "event",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "matchingPool",
            type: "u64",
          },
          {
            name: "eventAdminSigner",
            type: "publicKey",
          },
          {
            name: "eventKey",
            type: "publicKey",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "project",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            type: "publicKey",
          },
          {
            name: "status",
            type: {
              defined: "ProjectVerification",
            },
          },
          {
            name: "counter",
            type: "u64",
          },
          {
            name: "multisig",
            type: "publicKey",
          },
          {
            name: "vaultPubkey",
            type: "publicKey",
          },
          {
            name: "createKey",
            type: "publicKey",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "sponsorTeam",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "sponsor",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "createKey",
            type: "publicKey",
          },
          {
            name: "multiSig",
            type: "publicKey",
          },
          {
            name: "vaultPubkey",
            type: "publicKey",
          },
          {
            name: "eventAccount",
            type: "publicKey",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "subAdmin",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "level",
            type: "u8",
          },
          {
            name: "createKey",
            type: "publicKey",
          },
          {
            name: "eventAccess",
            type: {
              vec: "publicKey",
            },
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "user",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "EventProjectStatus",
      type: {
        kind: "enum",
        variants: [
          {
            name: "PendingApproval",
          },
          {
            name: "Approved",
          },
          {
            name: "Rejected",
          },
        ],
      },
    },
    {
      name: "ProjectVerification",
      type: {
        kind: "enum",
        variants: [
          {
            name: "UnderReview",
          },
          {
            name: "Verified",
          },
          {
            name: "VerificationFailed",
          },
        ],
      },
    },
  ],
  events: [
    {
      name: "NewUser",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "username",
          type: "string",
          index: false,
        },
      ],
    },
    {
      name: "UpdateUser",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "username",
          type: "string",
          index: false,
        },
      ],
    },
    {
      name: "NewSponsor",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "eventAccount",
          type: "publicKey",
          index: false,
        },
        {
          name: "totalCommitted",
          type: "u128",
          index: false,
        },
      ],
    },
    {
      name: "UpdateSponsorEvent",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "NewProject",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "counter",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "UpdateProjectStatus",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "status",
          type: {
            defined: "ProjectVerification",
          },
          index: false,
        },
      ],
    },
    {
      name: "NewEvent",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "eventKey",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "UpdateEvent",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "NewEventJoin",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "projectAccount",
          type: "publicKey",
          index: false,
        },
        {
          name: "eventAccount",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "UpdateEventJoin",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "metadata",
          type: "string",
          index: false,
        },
      ],
    },
    {
      name: "NewContributionSOL",
      fields: [
        {
          name: "amount",
          type: "u64",
          index: false,
        },
        {
          name: "eventJoinAccount",
          type: "publicKey",
          index: false,
        },
        {
          name: "eventAccount",
          type: "publicKey",
          index: false,
        },
        {
          name: "projectAccount",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "NewContributionSPL",
      fields: [
        {
          name: "amount",
          type: "u64",
          index: false,
        },
        {
          name: "token",
          type: "publicKey",
          index: false,
        },
        {
          name: "eventJoinAccount",
          type: "publicKey",
          index: false,
        },
        {
          name: "eventAccount",
          type: "publicKey",
          index: false,
        },
        {
          name: "projectAccount",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "NewDonationSOL",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
        {
          name: "projectCreateKey",
          type: "publicKey",
          index: false,
        },
        {
          name: "counter",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "NewDonationSPL",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "token",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
        {
          name: "projectCreateKey",
          type: "publicKey",
          index: false,
        },
        {
          name: "counter",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "NewFundSponsorSOL",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "NewFundSponsorSPL",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "token",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "NewTipSOL",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "NewTipSPL",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "token",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "MaxLengthExceeded",
      msg: "Error: Maximum length of 32 characters exceeded",
    },
    {
      code: 6001,
      name: "InvalidSigner",
      msg: "Error: Mismatch in signer credentials",
    },
    {
      code: 6002,
      name: "InvalidProjectVerification",
      msg: "Error: Invalid Signer",
    },
    {
      code: 6003,
      name: "InvalidAdmin",
      msg: "Error: Admin credentials invalid or not recognized",
    },
    {
      code: 6004,
      name: "InvalidEventKey",
      msg: "Error: Invalid Event Key",
    },
    {
      code: 6005,
      name: "Permission",
      msg: "Error: Unauthorized access attempt detected",
    },
    {
      code: 6006,
      name: "InvalidTip",
      msg: "Error: Owner of project cannot tip the Project itself",
    },
    {
      code: 6007,
      name: "InvalidReceiver",
      msg: "Error: Invalid receiver",
    },
    {
      code: 6008,
      name: "InvalidLevel",
      msg: "Error: Invalid Level for SubAdmin",
    },
    {
      code: 6009,
      name: "InvalidMembersLength",
      msg: "Error: Invalid Members Length",
    },
  ],
};
