import { DEVNET_TOKEN_LIST, TokenList } from './index';

export const getToken = (address: string) => {
  if (process.env.NEXT_PUBLIC_SOLANA_NETWORK === 'mainnet-beta') {
    return TokenList.find((e) => e.address === address);
  }
  return DEVNET_TOKEN_LIST.find((e) => e.address === address);
};
