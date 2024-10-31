import { Contract, ethers, InterfaceAbi } from "ethers";

const provider = new ethers.JsonRpcProvider(window.ethereum);
const signer = await provider.getSigner();

const serviceManagerAddress = "0x";
const serviceManagerABI = {} as InterfaceAbi;

// Initialize contract objects from ABIs
const serviceManager = new ethers.Contract(
  serviceManagerAddress,
  serviceManagerABI,
  signer
);

const submitContract = async (
  redactedContract: Contract,
  signature: Uint8Array,
  proof: Uint8Array,
  nonce: Uint8Array
) => {
  try {
    const tx = await serviceManager.createNewTask(
      redactedContract,
      signature,
      proof,
      nonce
    );

    // Wait for the transaction to be mined
    const receipt = await tx.wait();

    console.log(`Transaction successful with hash: ${receipt.hash}`);
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
};

export { submitContract };
