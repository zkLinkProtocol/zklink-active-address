import {
  AccountInfo,
  ChainInfo,
  RpcError,
  RpcResponse,
  TxReceipt,
} from './response';
import { AccountQuery, RpcClient } from './sdk';

export class JsonRpcError extends Error {
  constructor(rpcError: RpcError) {
    super(`"code":${rpcError.code},"message":${rpcError.message}`);
    this.name = 'JsonRpcError';
    Object.setPrototypeOf(this, JsonRpcError.prototype);
  }
}

export class ZkLinkProvider {
  private client: RpcClient;

  constructor(network: string, customUrl?: string) {
    this.client = new RpcClient(network, customUrl);
  }

  async getSupportChains() {
    const jsonStr = await this.client.getSupportChains();
    const resp = JSON.parse(jsonStr) as RpcResponse<ChainInfo[]>;
    if (!!resp.error) {
      throw new JsonRpcError(resp.error);
    }
    return resp.result;
  }

  async getAccount(address: string) {
    const accountQuery = new AccountQuery(1, address);
    const jsonStr = await this.client.getAccount(accountQuery);
    const resp = JSON.parse(jsonStr) as RpcResponse<AccountInfo>;
    if (!!resp.error) {
      throw new JsonRpcError(resp.error);
    }
    return resp.result;
  }

  async sendTransaction(tx: any) {
    const jsonStr = await this.client.sendTransaction(tx);
    const resp = JSON.parse(jsonStr) as RpcResponse<string>;
    if (!!resp.error) {
      throw new JsonRpcError(resp.error);
    }
    return resp.result;
  }

  async getTxInfo(txHash: string) {
    const jsonStr = await this.client.getTransactionByHash(txHash, false);
    const resp = JSON.parse(jsonStr) as RpcResponse<TxReceipt>;
    if (!!resp.error) {
      throw new JsonRpcError(resp.error);
    }
    return resp.result;
  }

  async waitTxReceipt(txHash: string, timeout: number) {
    const start = new Date().getTime();
    let now = start;
    do {
      const txReceipt = await this.getTxInfo(txHash);
      if (txReceipt.receipt.executed) {
        return txReceipt;
      }
      await sleep(1000);
      now = new Date().getTime();
    } while (start + timeout > now);
    throw new Error(`Wait tx receipt time out: ${txHash}`);
  }
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
