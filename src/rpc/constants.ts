import { zeroPadValue } from 'ethers';

export const GLOBAL_ASSET_ACCOUNT_ID: number = 1;
export const L2_TOKEN_DECIMALS: number = 18;

export const OP_TYPE_WITHDRAW: number = 3;
export const OP_TYPE_FORCED_EXIT: number = 7;

export function extendAddress(address: string) {
  return zeroPadValue(address, 32);
}

export function recoverDecimals(balance: bigint, decimals: number) {
  const factor = 10n ** BigInt(L2_TOKEN_DECIMALS - decimals);
  return (balance / factor) * factor;
}
