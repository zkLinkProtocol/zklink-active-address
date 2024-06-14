import { ZkLinkProvider } from './provider';
import { ChangePubKeyBuilder, Signer } from './sdk';

export class ZkLinkWallet {
  private provider: ZkLinkProvider;
  private signer: Signer;

  constructor(provider: ZkLinkProvider, signerKey: string) {
    this.provider = provider;
    this.signer = new Signer(signerKey, 0);
  }

  pubkeyHash() {
    return this.signer.getPubkeyHash();
  }

  async changePubKey(
    chainId: number,
    targetAccountId: number,
    targetSubAccountId: number,
    targetAccountNonce: number,
    feeToken: number,
    fee: string,
  ) {
    const txBuilder = new ChangePubKeyBuilder(
      chainId,
      targetAccountId,
      targetSubAccountId,
      this.pubkeyHash(),
      feeToken,
      fee,
      targetAccountNonce,
    );
    const tx = txBuilder.build();
    const signature = this.signer.signChangePubkeyWithOnchain(tx);
    return await this.provider.sendTransaction(signature.tx);
  }
}
