export type RpcResponse<T> = {
  id: number;
  jsonrpc: string;
  result: T;
  error?: RpcError;
};

export type RpcError = {
  code: number;
  message: string;
};

export type ChainInfo = {
  chainId: number;
  mainContract: string;
  gasTokenId: number;
};

export type AccountInfo = {
  id: number;
  address: string;
  nonce: number;
  pubKeyHash: string;
  subAccountNonces: Map<string, number>;
};

export type TxReceipt = {
  txHash: string;
  receipt: Receipt;
};

export type Receipt = {
  executed: boolean;
  executedTimestamp: number;
  success: boolean;
  failReason?: string;
  block: bigint;
  index: number;
};
