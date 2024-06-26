import { DEVNET_TOKEN_LIST, TokenList } from './index';

export const getValidToken = () => {
  if (process.env.NEXT_PUBLIC_SOLANA_NETWORK === 'mainnet-beta') {
    return TokenList.filter((e) => e.isTokenInUse === true) || [];
  }
  return DEVNET_TOKEN_LIST.filter((e) => e.isTokenInUse === true) || [];
};
