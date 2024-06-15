/**
 * The following lines intialize dotenv,
 * so that env vars from the .env file are present in process.env
 */
import * as dotenv from 'dotenv';
import { ZkLinkProvider } from './rpc/provider';
import { ZkLinkWallet } from './rpc/wallet';
import { JsonRpcProvider, keccak256 } from 'ethers';
import { ZkLinkPeriphery__factory } from './types';
dotenv.config();

export const sum = (a: number, b: number): number => {
  return a + b;
};

async function main() {
  const CHAIN_ID = Number(process.env.CHAIN_ID);
  const ZKLINK_RPC = process.env.ZKLINK_RPC ?? "";
  const L1_RPC = process.env.L1_RPC ?? "";
  const ACTIVE_ADDRESS = process.env.ACTIVE_ADDRESS ?? "";
  const ACTIVE_PRIVATE_KEY = process.env.ACTIVE_PRIVATE_KEY ?? "";
  const TARGET_ADDRESS = process.env.TARGET_ADDRESS ?? "";
  const l1Provider = new JsonRpcProvider(L1_RPC);
  const zkLinkProvider = new ZkLinkProvider(
    "MainNet",
    ZKLINK_RPC,
  );
  const activeWallet = new ZkLinkWallet(
    zkLinkProvider,
    ACTIVE_PRIVATE_KEY,
  );
  console.log(`Get chain config: ${CHAIN_ID}`);
  const allChains = await zkLinkProvider.getSupportChains();
  const chainConfig = allChains.filter((c) => c.chainId == CHAIN_ID).pop();
  if (!chainConfig) {
    console.warn(`Invalid chain id`);
    return;
  }
  console.log(`Get active account: ${ACTIVE_ADDRESS}`);
  const activeAccount = await zkLinkProvider.getAccount(ACTIVE_ADDRESS);
  if (!activeAccount) {
    console.warn(`Invalid active address`);
    return;
  }
  console.log(`Get target account: ${TARGET_ADDRESS}`);
  const targetAccount = await zkLinkProvider.getAccount(TARGET_ADDRESS);
  if (!targetAccount) {
    console.warn(`Invalid target address`);
    return;
  }
  const zkLinkContract = ZkLinkPeriphery__factory.connect(
    chainConfig.mainContract,
    l1Provider,
  );
  console.log(`Query the onchain auth with target account nonce: ${targetAccount.nonce}`);
  const af = await zkLinkContract.authFacts(TARGET_ADDRESS, targetAccount.nonce);
  console.log(`The auth fact onchain: ${af}`);
  const correctAf = keccak256(activeWallet.pubkeyHash());
  if (correctAf.toLowerCase() !== af.toLowerCase()) {
    console.warn(`You should firstly call setAuthPubkeyHash with args: [${activeWallet.pubkeyHash()}, ${targetAccount.nonce}]`);
    const encodeData = zkLinkContract.interface.encodeFunctionData('setAuthPubkeyHash', [activeWallet.pubkeyHash(), targetAccount.nonce]);
    console.warn(`The setAuthPubkeyHash encode function data: ${encodeData}`);
    return;
  }
  const txHash = await activeWallet.changePubKey(CHAIN_ID, targetAccount.id, 0, targetAccount.nonce, chainConfig.gasTokenId, "0");
  console.log(`The changePubKey tx hash: ${txHash}`);
  const txReceipt = await zkLinkProvider.waitTxReceipt(txHash, 60000);
  console.log(`The tx receipt: ${JSON.stringify(txReceipt)}`);
  if (!txReceipt.receipt.success) {
    console.error(`The tx execute failed`);
  }
}

main()
  .then()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });