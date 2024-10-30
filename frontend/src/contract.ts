import {
  generateBls12381G2KeyPair,
  blsSign,
  blsVerify,
  blsCreateProof,
  blsVerifyProof,
} from "@mattrglobal/bbs-signatures";

type Contract = {
  id: string;
  name: string;
  status: "created" | "negotiation" | "dispute" | "completed";
  numberOfParticipants: number;
  requireCompetence?: boolean;
  category?: string;
};

type PrivacyFilter = {
  [key in
    | "id"
    | "name"
    | "status"
    | "category"
    | "price"
    | "milestones"]: boolean;
};

// Create BBS+ signature
// const signContract = async (contract: Contract, filter: PrivacyFilter | {}) => {
//   // TODO Get key pair from
//   const keyPair = await generateBls12381G2KeyPair();
//   const messages = Object.entries(contract).map((entry) => {
//     const value = entry[1];
//     return Uint8Array.from(Buffer.from(String(value), "utf-8"));
//   });

//   const signature = await blsSign({
//     keyPair,
//     messages,
//   });

//   const isVerified = await blsVerify({
//     publicKey: keyPair.publicKey,
//     messages: messages,
//     signature,
//   });

//   if (!isVerified) {
//     throw new Error("Error verifying signature");
//   }

//   const revealed = Object.entries(contract)
//     .map((entry, index) => {
//       const [key] = entry;
//       return Object.entries(filter).length
//         ? (filter as PrivacyFilter)[
//             key as
//               | "id"
//               | "name"
//               | "status"
//               | "category"
//               | "price"
//               | "milestones"
//           ]
//           ? index
//           : null
//         : null;
//     })
//     .filter((asd: number | null) => asd !== null);

//   const proof = await blsCreateProof({
//     signature,
//     publicKey: keyPair.publicKey,
//     messages,
//     nonce: Uint8Array.from(Buffer.from("nonce", "utf8")),
//     revealed,
//   });

//   const isProofVerified = await blsVerifyProof({
//     proof,
//     publicKey: keyPair.publicKey,
//     messages: messages.slice(0, 1),
//     nonce: Uint8Array.from(Buffer.from("nonce", "utf8")),
//   });

//   if (!isProofVerified) {
//     throw new Error("Error verifying proof");
//   }

//   return {
//     signature,
//     proof,
//   };
// };

// Create object
const createContract = async () => {
  const contract = {} as Contract;
  const privacyFilter = {} as PrivacyFilter;

  // const { signature, proof } = await signContract(contract, {});

  return {
    contract,
    filter: privacyFilter,
    // signature,
    // proof,
  };
};

// TODO
const updateContract = async (
  contract: Contract,
  newContractData: Object,
  filter: PrivacyFilter | Object = {}
) => {
  const modifiedContract = {
    ...contract,
    ...newContractData,
  } as Contract;

  // const { signature, proof } = await signContract(modifiedContract, filter);

  return {
    modifiedContract,
    filter,
    // signature,
    // proof,
  };
};

export {
  createContract,
  // signContract,
  updateContract,
  type Contract,
  type PrivacyFilter,
};
