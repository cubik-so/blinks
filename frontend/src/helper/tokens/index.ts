/*
 * The token is Jupiter strict API
 * All credit goes to Jupiter Team
 */

import { Token } from '@cubik/common-types/src/token';

export * from './getToken';

export const DEVNET_TOKEN_LIST: Token[] = [
  {
    address: 'So11111111111111111111111111111111111111111',
    chainId: 101,
    decimals: 9,
    isTokenInUse: true,
    name: 'SOL',
    symbol: 'SOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/66c41648-d23e-4bee-45df-5ec4ecce5200/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'wrapped-solana',
    },
  },
  {
    address: 'AvKszWUpyRLokHmovpSETyt7xqorKi5CjoQBDVp3HYv6',
    chainId: 101,
    decimals: 6,
    isTokenInUse: true,
    name: 'Cubik Test Token',
    symbol: 'CTT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/121c823b-5056-4ad2-717e-d9864c644e00/public',
    tags: ['old-registry'],
  },
  {
    address: '86hRcMM4uCGYZRrTk1rY6KAhsSNgig1imDNRLHEqtBnu',
    chainId: 101,
    decimals: 6,
    isTokenInUse: true,
    name: 'Cubik Bitcoin Token',
    symbol: 'BTC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3406135f-1e1f-4e39-fcdb-fac1e3e7e800/public',
    tags: ['old-registry'],
  },
  {
    address: 'BVbjJtput6XQACBUYVzR7o2GizABNvNGu8AKqJWhhWms',
    chainId: 101,
    decimals: 6,
    isTokenInUse: true,
    name: 'Cubik Punk Token',
    symbol: 'PUNK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ef2e8968-2bf5-48e5-5611-341600398100/public',
    tags: ['old-registry'],
  },
  {
    address: 'Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr',
    chainId: 101,
    decimals: 6,
    isTokenInUse: true,
    name: 'Token USD Coin Dev',
    symbol: 'USDC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/430ce51e-7321-448d-87d9-0aae44a8c000/public',
    tags: ['old-registry'],
  },
];

export const SOL_ADDRESS = 'So11111111111111111111111111111111111111111';

export const TokenList: Token[] = [
  {
    address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    chainId: 101,
    decimals: 6,
    name: 'USD Coin',
    symbol: 'USDC',
    isTokenInUse: true,
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/430ce51e-7321-448d-87d9-0aae44a8c000/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'usd-coin',
    },
  },
  {
    address: 'So11111111111111111111111111111111111111111',
    chainId: 101,
    decimals: 9,
    isTokenInUse: true,
    name: 'SOL',
    symbol: 'SOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/66c41648-d23e-4bee-45df-5ec4ecce5200/public',
    tags: [],
    extensions: {
      coingeckoId: 'solana',
    },
  },
  {
    address: 'So11111111111111111111111111111111111111112',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped SOL',
    symbol: 'SOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/88505318-17b3-4f00-7f49-d87c8a5ecd00/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'wrapped-solana',
    },
  },
  {
    address: 'BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA',
    chainId: 101,
    decimals: 9,
    name: 'Blaze',
    isTokenInUse: true,
    symbol: 'BLZE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/22856f4b-40fa-4748-970c-8a3cf7112c00/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'solblaze',
    },
  },
  {
    address: 'bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1',
    chainId: 101,
    decimals: 9,
    name: 'BlazeStake Staked SOL (bSOL)',
    isTokenInUse: true,
    symbol: 'bSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/df1ff013-c2a2-42ad-b422-e7d77054c200/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'blazestake-staked-sol',
    },
  },
  {
    address: '62U5zYJadvquCqvtqxaWfZmpLU8iT59J8z3BEfVc3Q92',
    chainId: 101,
    decimals: 6,
    isTokenInUse: false,
    name: 'Founder wif out abs',
    symbol: 'FWOA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/69fc11c2-988a-469c-d020-32b9cf4fcc00/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'fwoa',
    },
  },
  {
    address: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
    chainId: 101,
    decimals: 5,
    isTokenInUse: true,
    name: 'BonkCoin',
    symbol: 'BONK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4b17d6d9-666d-4085-64a6-d4c2fcc33c00/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'bonk',
    },
  },
  {
    address: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
    chainId: 101,
    decimals: 6,
    isTokenInUse: true,
    name: 'USDT',
    symbol: 'USDT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2e59416b-1c2c-4ef9-d553-0ef18a3d4900/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'tether',
    },
  },
  {
    address: 'DDRmuJ77t7d6pkBDXE47ZALjSZm3udVGJMgZjZBk41LH',
    chainId: 101,
    decimals: 9,
    isTokenInUse: false,
    name: 'Merted',
    symbol: 'MERTD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/15169103-f9ab-43a5-0645-72e854bda500/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'mertd',
    },
  },
  {
    address: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
    chainId: 101,
    decimals: 6,
    isTokenInUse: false,
    name: 'dogwifhart',
    symbol: 'WIF',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ef986207-2adc-4ed7-f311-cd623fcf3800/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'fwoa',
    },
  },
  {
    address: 'WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk',
    chainId: 101,
    decimals: 5,
    isTokenInUse: false,
    name: 'Wen',
    symbol: 'wen',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e9c696fc-2b44-4390-6e93-ecfca371da00/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'wen',
    },
  },
  {
    address: 'J9BcrQfX4p9D1bvLzRNCbMDv8f44a9LFdeqNE4Yk2WMD',
    chainId: 101,
    decimals: 6,
    name: 'International Stable Currency',
    symbol: 'ISC',
    isTokenInUse: true,
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/fa746b53-dbf8-4678-8a81-742d469efb00/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'international-stable-currency',
    },
  },
  {
    address: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
    chainId: 101,
    decimals: 9,
    name: 'Marinade staked SOL (mSOL)',
    symbol: 'mSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0e8c1477-3495-4fb7-8d38-2f8ad3aa7500/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'msol',
    },
  },
  {
    address: 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
    chainId: 101,
    decimals: 9,
    name: 'Jito Staked SOL',
    symbol: 'JitoSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/78e38e9e-234b-45ac-a4ee-59116ef34500/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'jito-staked-sol',
    },
  },
  {
    address: '7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT',
    chainId: 101,
    decimals: 6,
    name: 'UXD Stablecoin',
    symbol: 'UXD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3f96e2db-b918-4759-67c3-b3417f403c00/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'uxd-stablecoin',
    },
  },
  {
    address: '7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs',
    chainId: 101,
    decimals: 8,
    name: 'Ether (Portal)',
    symbol: 'ETH',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/67a1b32b-e381-457e-6c85-b0d888addd00/public',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'ethereum-wormhole',
    },
  },
  {
    address: '7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj',
    chainId: 101,
    decimals: 9,
    name: 'Lido Staked SOL',
    symbol: 'stSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/25437d5b-e9cf-4b09-c6df-d2067c8cc700/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'lido-staked-sol',
    },
  },
  {
    address: 'A9mUU4qviSctJVPJdBJWkb28deg915LYJKrzQ19ji3FM',
    chainId: 101,
    decimals: 6,
    name: 'USD Coin (Portal from Ethereum)',
    symbol: 'USDCet',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c04ee90d-fa69-4cb2-770f-08e106c24400/public',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'usd-coin-wormhole-from-ethereum',
    },
  },
  {
    address: 'bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1',
    chainId: 101,
    decimals: 9,
    name: 'BlazeStake Staked SOL (bSOL)',
    isTokenInUse: true,
    symbol: 'bSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/df1ff013-c2a2-42ad-b422-e7d77054c200/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'blazestake-staked-sol',
    },
  },
  {
    address: 'orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE',
    chainId: 101,
    decimals: 6,
    name: 'Orca',
    symbol: 'ORCA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/8dc2a200-609e-4fc1-4c61-2f5ab8cf2e00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'orca',
    },
  },
  {
    address: 'nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7',
    chainId: 101,
    decimals: 6,
    name: 'Nosana',
    symbol: 'NOS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e4a8ea02-837f-44cb-13ac-a8eae89dce00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'nosana',
    },
  },
  {
    address: 'FLUXBmPhT3Fd1EDVFdg46YREqHBeNypn1h4EbnTzWERX',
    chainId: 101,
    decimals: 5,
    name: 'FluxBot',
    symbol: 'FLUXB',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9aeb7a66-d186-4b6b-c75e-17d13a48d500/public',
    tags: ['community', 'token-2022'],
    extensions: {
      coingeckoId: 'fluxbot',
    },
  },
  {
    address: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
    chainId: 101,
    decimals: 6,
    name: 'Raydium',
    symbol: 'RAY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9427d849-4103-4988-68c3-92f3c279f900/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'raydium',
    },
  },
  {
    address: 'RLBxxFkseAZ4RgJH3Sqn8jXxhmGoz9jWxDNJMh8pL7a',
    chainId: 101,
    decimals: 2,
    name: 'Rollbit Coin',
    symbol: 'RLB',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e1dc99bd-be49-416e-902c-7ffa7addae00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'rollbit-coin',
    },
  },
  {
    address: 'SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y',
    chainId: 101,
    decimals: 9,
    name: 'Shadow Token',
    symbol: 'SHDW',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e7488cc2-7f79-4658-a70f-b011daf65a00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'genesysgo-shadow',
    },
  },
  {
    address: 'rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof',
    chainId: 101,
    decimals: 8,
    name: 'Render Token',
    symbol: 'RENDER',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e13184e6-a9f5-45fc-c881-9aa5facaf400/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'render-token',
    },
  },
  {
    address: 'hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux',
    chainId: 101,
    decimals: 8,
    name: 'Helium Network Token',
    symbol: 'HNT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/8a03a288-b761-411b-ab8e-2db51b50ee00/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'helium',
    },
  },
  {
    address: '3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR',
    chainId: 101,
    decimals: 9,
    name: 'Only1 (LIKE)',
    symbol: 'LIKE',
    logoURI: 'https://only1.io/like-token.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'only1',
    },
  },
  {
    address: '3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh',
    chainId: 101,
    decimals: 8,
    name: 'Wrapped BTC (Portal)',
    symbol: 'WBTC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/727add0a-0577-4119-39b4-adc7554f4400/public',
    tags: ['wormhole', 'community', 'solana-fm'],
    extensions: {
      coingeckoId: 'wrapped-btc-wormhole',
    },
  },
  {
    address: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
    chainId: 101,
    decimals: 9,
    name: 'Samoyed Coin',
    symbol: 'SAMO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/bfc7ddae-5670-4ef0-c9a0-962845195900/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'samoyedcoin',
    },
  },
  {
    address: 'mb1eu7TzEc71KxDpsmsKoucSSuuoGLv1drys1oP2jh6',
    chainId: 101,
    decimals: 6,
    name: 'Helium Mobile',
    symbol: 'MOBILE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e59b4f4c-aa28-485e-2265-f3fb99ba9f00/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'helium-mobile',
    },
  },
  {
    address: 'ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs',
    chainId: 101,
    decimals: 6,
    name: 'Media Network',
    symbol: 'MEDIA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/98d0bf68-2000-4f92-e5ed-bc65d51e7500/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'media-network',
    },
  },
  {
    address: 'GDfnEsia2WLAW5t8yx2X5j2mkfA74i5kwGdDuZHt7XmG',
    chainId: 101,
    decimals: 9,
    name: 'CROWN Token',
    symbol: 'CROWN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4056c5ec-f6d3-499d-3846-21e40744f800/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'crown-by-third-time-games',
    },
  },
  {
    address: 'MELLd8PyFoeNW3D5VaUe7L96eZeihtrzgLWrbKz5DR2',
    chainId: 101,
    decimals: 6,
    name: 'Mellivora',
    symbol: 'MELL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ff7f78f6-54a8-4580-4ccd-40dfef5ec200/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'mellivora',
    },
  },
  {
    address: 'AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP',
    chainId: 101,
    decimals: 9,
    name: 'Aurory',
    symbol: 'AURY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b9cc7546-5e7e-477c-6f68-891161c75300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'aurory',
    },
  },
  {
    address: 'SCSuPPNUSypLBsV4darsrYNg4ANPgaGhKhsA3GmMyjz',
    chainId: 101,
    decimals: 5,
    name: 'Solcasino Token',
    symbol: 'SCS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/647ed19d-6022-43fd-8a7d-e7f80b922700/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'solcasino-token',
    },
  },
  {
    address: 'GFX1ZjR2P15tmrSwow6FjyDYcEkoFb4p4gJCpLBjaxHD',
    chainId: 101,
    decimals: 9,
    name: 'GooseFX',
    symbol: 'GOFX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/96426c0a-4129-4eb3-5efa-91ef6d569b00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'goosefx',
    },
  },
  {
    address: 'MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey',
    chainId: 101,
    decimals: 9,
    name: 'Marinade',
    symbol: 'MNDE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3dc4f699-746c-47fb-3fca-175cd8942400/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'marinade',
    },
  },
  {
    address: 'xxxxa1sKNGwFtw2kFn8XauW9xq8hBZ5kVtcSesTT9fW',
    chainId: 101,
    decimals: 6,
    name: 'Solanium',
    symbol: 'SLIM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2e79008f-aa69-427c-663f-5666a3d60f00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solanium',
    },
  },
  {
    address: 'ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx',
    chainId: 101,
    decimals: 8,
    name: 'Star Atlas',
    symbol: 'ATLAS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/072477ee-64c8-4aad-6cf8-1403a25caf00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'star-atlas',
    },
  },
  {
    address: 'poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk',
    chainId: 101,
    decimals: 8,
    name: 'Star Atlas DAO',
    symbol: 'POLIS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1dc715f6-1cf5-4e2d-9855-3b90e3619600/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'star-atlas-dao',
    },
  },
  {
    address: 'Dn4noZ5jgGfkntzcQSUZ8czkreiZ1ForXYoV2H8Dm7S1',
    chainId: 101,
    decimals: 6,
    name: 'Tether USD (Portal from Ethereum)',
    symbol: 'USDTet',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ca2f2a05-00b7-4475-7f80-1c98e8755400/public',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'tether-usd-wormhole-from-ethereum',
    },
  },
  {
    address: 'LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp',
    chainId: 101,
    decimals: 9,
    name: 'Liquid Staking Token',
    symbol: 'LST',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/8b3b89f3-6bf3-4c6c-c2e5-9506e81aaf00/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'liquid-staking-token',
    },
  },
  {
    address: 'n54ZwXEcLnc3o7zK48nhrLV4KTU5wWD4iq7Gvdt5tik',
    chainId: 101,
    decimals: 6,
    name: 'Peepo',
    symbol: 'PEEP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d3e18bd8-ff44-447d-cd65-01bddd628d00/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'peepo-sol',
    },
  },
  {
    address: 'AFbX8oGjGpmVFywbVouvhQSRmiW2aR1mohfahi4Y2AdB',
    chainId: 101,
    decimals: 9,
    name: 'GST',
    symbol: 'GST',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/94163a5c-81c0-4fce-5dfd-01304ef8b500/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'green-satoshi-token',
    },
  },
  {
    address: 'BqVHWpwUDgMik5gbTciFfozadpE2oZth5bxCDrgbDt52',
    chainId: 101,
    decimals: 9,
    name: 'Only Possible On Solana',
    symbol: 'OPOS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e1c082e1-5f80-48da-fd88-b79ece430500/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'only-possible-on-solana',
    },
  },
  {
    address: '7i5KKsX2weiTkry7jA4ZwSuXGhs5eJBEjY8vVxR4pfRx',
    chainId: 101,
    decimals: 9,
    name: 'GMT',
    symbol: 'GMT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5456bbe4-6c0e-40e3-9d15-8f99fbf90700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'stepn',
    },
  },
  {
    address: '74DSHnK1qqr4z1pXjLjPAVi8XFngZ635jEVpdkJtnizQ',
    chainId: 101,
    decimals: 5,
    name: 'COCO Token',
    symbol: 'COCO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/13e269a1-2dba-448e-16e0-ac8ab462fe00/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'coco-theheist',
    },
  },
  {
    address: 'DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ',
    chainId: 101,
    decimals: 9,
    name: 'DUST Protocol',
    symbol: 'DUST',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5a75d46a-2b19-40eb-9fbe-f9708dc74700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dust-protocol',
    },
  },
  {
    address: '9LzCMqDgTKYz9Drzqnpgee3SGa89up3a247ypMj2xrqM',
    chainId: 101,
    decimals: 8,
    name: 'Audius (Portal)',
    symbol: 'AUDIO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ff2c4f15-e1b7-4319-a4c7-5188012beb00/public',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'audius-wormhole',
    },
  },
  {
    address: 'ChVzxWRmrTeSgwd3Ui3UumcN8KX7VK3WaD4KGeSKpypj',
    chainId: 101,
    decimals: 8,
    name: 'SushiToken (Portal)',
    symbol: 'SUSHI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/40778eb2-3623-4a8d-6e12-b2bd3367fb00/public',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'sushi',
    },
  },
  {
    address: 'BaoawH9p2J8yUK9r5YXQs3hQwmUJgscACjmTkh8rMwYL',
    chainId: 101,
    decimals: 6,
    name: 'AllDomains',
    symbol: 'ALL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b9edbb67-f3a5-44bd-6ee1-febe99728d00/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'alldomains',
    },
  },
  {
    address: 'HxRELUQfvvjToVbacjr9YECdfQMUqGgPYB68jVDYxkbr',
    chainId: 101,
    decimals: 9,
    name: 'NANA Token',
    symbol: 'NANA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4a272641-31be-439a-7c5a-83fed0ff6b00/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'nana-token',
    },
  },
  {
    address: 'AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR',
    chainId: 101,
    decimals: 5,
    name: 'Guacamole',
    symbol: 'GUAC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/48019e5e-f05a-4a60-ab01-1736639c7000/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'guacamole',
    },
  },
  {
    address: 'FmQ7v2QUqXVVtAXkngBh3Mwx7s3mKT55nQ5Z673dURYS',
    chainId: 101,
    decimals: 9,
    name: 'Dark Protocol',
    symbol: 'DARK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2a1a6275-bd41-4974-2a63-0d3980a3b200/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dark-protocol',
    },
  },
  {
    address: 'iotEVVZLEywoTn1QdwNPddxPWszn3zFhEot3MfL9fns',
    chainId: 101,
    decimals: 6,
    name: 'Helium IOT',
    symbol: 'IOT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/67322b50-3e13-4ff1-e6fb-7fb43b4bee00/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'helium-iot',
    },
  },
  {
    address: 'BWXrrYFhT7bMHmNBFoQFWdsSgA3yXoAnMhDK6Fn1eSEn',
    chainId: 101,
    decimals: 9,
    name: 'Hades',
    symbol: 'HADES',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/90dfbb31-4a4a-48c7-1736-2a57f2146100/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'hades',
    },
  },
  {
    address: 'HHjoYwUp5aU6pnrvN4s2pwEErwXNZKhxKGYjRJMoBjLw',
    chainId: 101,
    decimals: 9,
    name: 'PIP',
    symbol: 'PIP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/96b6b704-3acc-4853-88f0-673fbae25300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'pip',
    },
  },
  {
    address: '4vMsoUT2BWatFweudnQM1xedRLfJgJ7hswhcpz4xgBTy',
    chainId: 101,
    decimals: 9,
    name: 'HONEY',
    symbol: 'HONEY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/dc052c37-ab56-41f7-37ce-212a01ce9300/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'hivemapper',
    },
  },
  {
    address: 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt',
    chainId: 101,
    decimals: 6,
    name: 'Serum',
    symbol: 'SRM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/bf9a8791-23a1-43d2-39d6-dded04899d00/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'serum',
    },
  },
  {
    address: 'Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1',
    chainId: 101,
    decimals: 6,
    name: 'Saber Protocol Token',
    symbol: 'SBR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9fbc81ba-4f1c-4c7c-cbed-117a7f79f700/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'saber',
    },
  },
  {
    address: '27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4',
    chainId: 101,
    decimals: 6,
    name: 'Jupiter Perps',
    symbol: 'JLP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a07c1c57-544b-45da-8290-d66105e80600/public',
    tags: ['community'],
  },
  {
    address: 'DdFPRnccQqLD4zCHrBqdY95D6hvw6PLWp9DEXj1fLCL9',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDC (Allbridge from Ethereum)',
    symbol: 'aeUSDC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/fe19a11e-e4a6-41e7-73a3-071bc9705f00/public',
    tags: ['old-registry'],
  },
  {
    address: '9noXzpXnkyEcKF3AeXqUHTdR59V5uvrRBUZ9bwfQwxeq',
    chainId: 101,
    decimals: 9,
    name: 'KING',
    symbol: 'KING',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/cdec32fc-0d1d-46db-8362-55d8f0d95000/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'king-2',
    },
  },
  {
    address: 'CKfatsPMUf8SkiURsDXs7eK6GWb4Jsd6UDbs7twMCWxo',
    chainId: 101,
    decimals: 5,
    name: 'BonkEarn',
    symbol: 'BERN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b8c9a12d-2ae1-4c6a-8436-02e37ef16400/public',
    tags: ['community', 'token-2022'],
    extensions: {
      coingeckoId: 'bonkearn',
    },
  },
  {
    address: 'CRWNYkqdgvhGGae9CKfNka58j6QQkaD5bLhKXvUYqnc1',
    chainId: 101,
    decimals: 6,
    name: 'Crowny token',
    symbol: 'CRWNY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/8001d3fa-1635-4650-771f-8abb590ed100/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'crowny-token',
    },
  },
  {
    address: '6DNSN2BJsaPFdFFc1zP37kkeNe4Usc1Sqkzr9C9vPWcU',
    chainId: 101,
    decimals: 8,
    name: 'Threshold Bitcoin',
    symbol: 'TBTC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c386b1d5-63ab-4fcb-8ec2-f6a90925db00/public',
    tags: ['wormhole', 'community'],
    extensions: {
      coingeckoId: 'tbtc',
    },
  },
  {
    address: 'USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX',
    chainId: 101,
    decimals: 6,
    name: 'USDH Hubble Stablecoin',
    symbol: 'USDH',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e92872e1-df3d-4c68-77d4-f43dc1556b00/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'usdh',
    },
  },

  {
    address: 'Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS',
    chainId: 101,
    decimals: 6,
    name: 'PAI (Parrot USD)',
    symbol: 'PAI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a08e25a5-4e93-4823-5ac0-949908ea4500/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'parrot-usd',
    },
  },
  {
    address: 'BKipkearSqAUdNKa1WDstvcMjoPsSKBuNyvKDQDDu9WE',
    chainId: 101,
    decimals: 6,
    name: 'Hawksight',
    symbol: 'HAWK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2b80d219-16dc-4248-8248-2bee6210ca00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'hawksight',
    },
  },
  {
    address: 'Eh1fXbAipe4k7CYR9UMb2bbWmBcpU3HcyX3LWuRVFBLz',
    chainId: 101,
    decimals: 4,
    name: 'Flowmatic',
    symbol: 'FM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e775be71-0abc-42ef-b385-034e4158c400/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'flowmatic',
    },
  },
  {
    address: 'kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6',
    chainId: 101,
    decimals: 5,
    name: 'KIN',
    symbol: 'KIN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ddb476ed-bbc9-403e-341e-0ca654b0b800/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'kin',
    },
  },
  {
    address: 'zebeczgi5fSEtbpfQKVZKCJ3WgYXxjkMUkNNx7fLKAF',
    chainId: 101,
    decimals: 9,
    name: 'ZEBEC',
    symbol: 'ZBC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/df8a8954-2158-4e70-9c8b-3e537893fd00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'zebec-protocol',
    },
  },
  {
    address: 'GENEtH5amGSi8kHAtQoezp1XEXwZJ8vcuePYnXdKrMYz',
    chainId: 101,
    decimals: 9,
    name: 'Genopets',
    symbol: 'GENE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/40cdd94c-0ca1-4e2d-1ca2-aa58fd92cc00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'genopets',
    },
  },
  {
    address: '9nEqaUcb16sQ3Tn1psbkWqyhPdLmfHWjKGymREjsAgTE',
    chainId: 101,
    decimals: 6,
    name: 'WOOF',
    symbol: 'WOOF',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7cfc4a29-dbf0-4162-6c25-8097a8228e00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'woof-token',
    },
  },
  {
    address: 'C98A4nkJXhpVZNAZdHUA95RpTF3T4whtQubL3YobiUX9',
    chainId: 101,
    decimals: 6,
    name: 'Coin98',
    symbol: 'C98',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/bb80b755-2ce0-464e-5924-03b085efed00/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'coin98',
    },
  },
  {
    address: 'HCgybxq5Upy8Mccihrp7EsmwwFqYZtrHrsmsKwtGXLgW',
    chainId: 101,
    decimals: 6,
    name: 'StarLaunch',
    symbol: 'STARS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f4a9071a-57e3-404c-a751-8e9eec039d00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'starlaunch',
    },
  },
  {
    address: 'EjmyN6qEC1Tf1JxiG1ae7UTJhUxSwk1TCWNWqxWV4J6o',
    chainId: 101,
    decimals: 8,
    name: 'DAI (Portal)',
    symbol: 'DAI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d5330269-4bba-4b33-89f7-9f46cc0de000/public',
    tags: ['wormhole', 'old-registry'],
  },
  {
    address: 'Fm9rHUTF5v3hwMLbStjZXqNBBoZyGriQaFM6sTFz3K8A',
    chainId: 101,
    decimals: 6,
    name: 'MonkeyBucks',
    symbol: 'MBS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0803cef5-b3b5-43d4-cb10-ad53525b4900/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'monkeyball',
    },
  },
  {
    address: 'xLfNTYy76B8Tiix3hA51Jyvc1kMSFV4sPdR7szTZsRu',
    chainId: 101,
    decimals: 6,
    name: 'xLifinity',
    symbol: 'xLFNTY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/bc16ec63-00ea-4c5d-c93a-cf81eb4f1c00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '31k88G5Mq7ptbRDf3AM13HAq6wRQHXHikR8hik7wPygk',
    chainId: 101,
    decimals: 9,
    name: 'Graphite',
    symbol: 'GP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2a3345d5-880b-45aa-f2ad-16af33e44b00/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'graphite-protocol',
    },
  },
  {
    address: 'BiDB55p4G3n1fGhwKFpxsokBMqgctL4qnZpDH1bVQxMD',
    chainId: 101,
    decimals: 9,
    name: 'Decimated',
    symbol: 'DIO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5c6719bc-b815-4d72-599a-478acc795300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'decimated',
    },
  },
  {
    address: '9DZ58i5vAfk3JaFVYezYzhrVht7j8McZsUbuTcDiSbrP',
    chainId: 101,
    decimals: 5,
    name: 'Ethrix',
    symbol: 'ETX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/69014f7c-1832-4a5f-ce06-24bb5c648c00/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'ethrix',
    },
  },
  {
    address: '9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa',
    chainId: 101,
    decimals: 8,
    name: 'Binance Coin (Portal)',
    symbol: 'BNB',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5955e187-4b15-4f98-55cf-70c2a2f23d00/public',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'binance-coin-wormhole',
    },
  },
  {
    address: 'METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m',
    chainId: 101,
    decimals: 6,
    name: 'Metaplex Token',
    symbol: 'MPLX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3e44af58-7845-4ded-400f-7a5e9a38b400/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'metaplex',
    },
  },
  {
    address: '8Yv9Jz4z7BUHP68dz8E8m3tMe6NKgpMUKn8KVqrPA6Fr',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDC (Allbridge from Avalanche)',
    symbol: 'aaUSDC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1c99dfca-1c26-42cb-9dd3-982891e85f00/public',
    tags: ['old-registry'],
  },
  {
    address: 'HZRCwxP2Vq9PCpPXooayhJ2bxTpo5xfpQrwB1svh332p',
    chainId: 101,
    decimals: 8,
    name: 'Lido DAO (Portal)',
    symbol: 'LDO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/fe589fba-f4b0-4835-e5af-12c11fd8af00/public',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'lido-dao-wormhole',
    },
  },
  {
    address: 'HBB111SCo9jkCejsZfz8Ec8nH7T6THF8KEKSnvwT6XK6',
    chainId: 101,
    decimals: 6,
    name: 'Hubble Protocol Token',
    symbol: 'HBB',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3af46e3a-e8db-4738-7a22-4e1a42329c00/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'hubble',
    },
  },
  {
    address: 'GPyzPHuFFGvN4yWWixt6TYUtDG49gfMdFFi2iniTmCkh',
    chainId: 101,
    decimals: 2,
    name: 'CHILI',
    symbol: 'CHILI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ed915d79-020c-43cc-5a82-d3fc5d5cdf00/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'chili',
    },
  },
  {
    address: 'CKaKtYvz6dKPyMvYq9Rh3UBrnNqYZAyd7iF4hJtjUvks',
    chainId: 101,
    decimals: 9,
    name: 'Gari',
    symbol: 'GARI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a20d6ea8-94d9-4dcb-d219-4d2d8344a800/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'gari-network',
    },
  },
  {
    address: '9WMwGcY6TcbSfy9XPpQymY3qNEsvEaYL3wivdwPG2fpp',
    chainId: 101,
    decimals: 6,
    name: 'Jelly',
    symbol: 'JELLY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3b736847-ccf6-43ce-34b5-3c0c4b9d2200/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'jelly-esports',
    },
  },
  {
    address: 'SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp',
    chainId: 101,
    decimals: 6,
    name: 'Solend',
    symbol: 'SLND',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9df62c54-785e-47f6-3ec3-c965679ab700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solend',
    },
  },
  {
    address: 'AaAEw2VCw1XzgvKB8Rj2DyK2ZVau9fbt2bE8hZFWsMyE',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped ETH (Allbridge from Ethereum)',
    symbol: 'aeWETH',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1fb1a054-83ac-4ca2-92de-93d6f0e1ff00/public',
    tags: ['old-registry'],
  },
  {
    address: 'NFTUkR4u7wKxy9QLaX2TGvd9oZSWoMo4jqSJqdMb7Nk',
    chainId: 101,
    decimals: 6,
    name: 'Blockasset',
    symbol: 'BLOCK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/13d484c2-d5e4-44fb-c8db-d530e1188500/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'blockasset',
    },
  },
  {
    address: 'HfYFjMKNZygfMC8LsQ8LtpPsPxEJoXJx4M6tqi75Hajo',
    chainId: 101,
    decimals: 9,
    name: 'Cryowar Token',
    symbol: 'CWAR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d73bfc7c-2b28-4056-9121-07ca9b7d4000/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cryowar-token',
    },
  },
  {
    address: 'LFNTYraetVioAPnGJht4yNg2aUZFXR776cMeN9VMjXp',
    chainId: 101,
    decimals: 6,
    name: 'Lifinity',
    symbol: 'LFNTY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/573ac33c-c08b-4bc0-1c6b-ea87bc5ec000/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'lifinity',
    },
  },
  {
    address: 'HxhWkVpk5NS4Ltg5nij2G671CKXFRKPK8vy271Ub4uEK',
    chainId: 101,
    decimals: 8,
    name: 'Hxro (Portal)',
    symbol: 'HXRO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1042164e-9acd-400b-93e8-a6a7c53af800/public',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'hxro',
    },
  },
  {
    address: '4Hx6Bj56eGyw8EJrrheM6LBQAvVYRikYCWsALeTrwyRU',
    chainId: 101,
    decimals: 8,
    name: 'dYdX (Portal)',
    symbol: 'DYDX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a441eb6d-60ca-4e1f-8caa-c4170deba400/public',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dydx-wormhole',
    },
  },
  {
    address: '9TVjnzpF3X8DHsfVqYWoCGphJxtGYh1PDCFN5QmsHW5t',
    chainId: 101,
    decimals: 9,
    name: 'Midas',
    symbol: 'MDS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/506b5886-4141-4eb4-646e-0f85ac817900/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'midas-token',
    },
  },
  {
    address: '8HGyAAB1yoM1ttS7pXjHMa3dukTFGQggnFFH3hJZgzQh',
    chainId: 101,
    decimals: 6,
    name: 'COPE',
    symbol: 'COPE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e500a797-1b1c-4d87-fbbf-d15d3cd51900/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'cope',
    },
  },
  {
    address: 'Basis9oJw9j8cw53oMV7iqsgo6ihi9ALw4QR31rcjUJa',
    chainId: 101,
    decimals: 6,
    name: 'basis',
    symbol: 'BASIS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7e87d3d4-ccd3-442b-0316-c2d9579e9400/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'basis-markets',
    },
  },
  {
    address: 'bootyAfCh1eSQeKhFaDjN9Pu6zwPmAoQPoJWVuPasjJ',
    chainId: 101,
    decimals: 9,
    name: 'BOOTY',
    symbol: 'BOOTY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/42304ec0-19ae-400f-455c-7c987dd6ee00/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'booty',
    },
  },
  {
    address: 'Bn113WT6rbdgwrm12UJtnmNqGqZjY4it2WoUQuQopFVn',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDT (Allbridge from Ethereum)',
    symbol: 'aeUSDT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b7ab9e93-a659-4167-3d47-76b5037a8b00/public',
    tags: ['old-registry'],
  },
  {
    address: 'HovGjrBGTfna4dvg6exkMxXuexB3tUfEZKcut8AWowXj',
    chainId: 101,
    decimals: 4,
    name: 'Space Falcon',
    symbol: 'FCON',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3ca945d9-368f-404e-5845-fff44e2fe600/public',
    tags: ['old-registry'],
  },
  {
    address: 'DFL1zNkaGPWm1BqAVqRjCZvHmwTFrEaJtbzJWgseoNJh',
    chainId: 101,
    decimals: 9,
    name: 'DeFi Land',
    symbol: 'DFL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/bb81ea54-a554-4c59-f954-ef69b30f0d00/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'defi-land',
    },
  },
  {
    address: '6cVgJUqo4nmvQpbgrDZwyfd6RwWw5bfnCamS3M9N1fd',
    chainId: 101,
    decimals: 6,
    name: 'Project SEED Token',
    symbol: 'SHILL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ef985de8-3fc8-4aa7-b28b-7f9dafd15700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'shill-token',
    },
  },
  {
    address: 'F9CpWoyeBJfoRB8f2pBe2ZNPbPsEE76mWZWme3StsvHK',
    chainId: 101,
    decimals: 6,
    name: 'Pepe',
    symbol: 'PEPE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0d1655d5-6dce-4f29-ddb6-ab92d7fa1600/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'pepesol',
    },
  },
  {
    address: 'So111DzVTTNpDq81EbeyKZMi4SkhU9yekqB8xmMpqzA',
    chainId: 101,
    decimals: 9,
    name: 'zSOL',
    symbol: 'zSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5b88b731-ef0f-4e6e-87c0-a22487ece300/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'zsol',
    },
  },
  {
    address: '3acxNNmfdKKZj9i35P4VDBFm74Ufdt8ojKWceVGynwC5',
    chainId: 101,
    decimals: 4,
    name: 'GM',
    symbol: 'GM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c097aea6-5bfc-45c8-af6b-3f55db50f700/public',
    tags: ['community'],
  },
  {
    address: '5goWRao6a3yNC4d6UjMdQxonkCMvKBwdpubU3qhfcdf1',
    chainId: 101,
    decimals: 6,
    name: 'Tether USD (PoS) (Portal from Polygon)',
    symbol: 'USDTpo',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9064001d-baf0-4867-64c3-52fc227e4f00/public',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'tether-usd-pos-wormhole',
    },
  },
  {
    address: 'eqKJTf1Do4MDPyKisMYqVaUFpkEFAs3riGF3ceDH2Ca',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped USDC (Allbridge from Polygon)',
    symbol: 'apUSDC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c231121c-7d93-48bc-7676-99ce5c100100/public',
    tags: ['old-registry'],
  },
  {
    address: 'TuLipcqtGVXP9XR62wM8WWCm6a9vhLs7T1uoWBk6FDs',
    chainId: 101,
    decimals: 6,
    name: 'Tulip',
    symbol: 'TULIP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0a4cd975-e029-472b-9ab5-9a914bf1f600/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solfarm',
    },
  },
  {
    address: 'StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT',
    chainId: 101,
    decimals: 9,
    name: 'Step',
    symbol: 'STEP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/de4cd483-f23a-4178-4fa1-605cc5a72000/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'step-finance',
    },
  },
  {
    address: 'MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac',
    chainId: 101,
    decimals: 6,
    name: 'Mango',
    symbol: 'MNGO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c2465acd-7dcb-490e-820d-d2da79a34b00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'mango-markets',
    },
  },
  {
    address: 'LMDAmLNduiDmSiMxgae1gW7ubArfEGdAfTpKohqE5gn',
    chainId: 101,
    decimals: 6,
    name: 'lambda.markets',
    symbol: 'LMDA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c91dde03-4896-4fbf-c9bc-cb8ba2149b00/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'lambda-markets',
    },
  },
  {
    address: '8qJSyQprMC57TWKaYEmetUR3UUiTP2M3hXdcvFhkZdmv',
    chainId: 101,
    decimals: 8,
    name: 'Tether USD (Portal from BSC)',
    symbol: 'USDTbs',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/41b5535a-069d-4d4a-65f7-7998439c2b00/public',
    tags: ['wormhole', 'old-registry'],
  },
  {
    address: 'GHvFFSZ9BctWsEc5nujR1MTmmJWY7tgQz2AXE6WVFtGN',
    chainId: 101,
    decimals: 9,
    name: 'SolAPE Token',
    symbol: 'SOLAPE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ef3b012d-3037-4b60-99b9-b389f6e37200/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solape-token',
    },
  },
  {
    address: 'AUrMpCDYYcPuHhyNX8gEEqbmDPFUpBpHrNW3vPeCFn5Z',
    chainId: 101,
    decimals: 9,
    name: 'AVAX (Allbridge from Avalanche)',
    symbol: 'AVAX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/89be1410-021f-489f-aa17-c07cb4dbb300/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'EcQCUYv57C4V6RoPxkVUiDwtX1SP8y8FP5AEToYL8Az',
    chainId: 101,
    decimals: 9,
    name: 'Walken',
    symbol: 'WLKN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9f46c546-3974-45e6-d79e-f03a59886d00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'walken',
    },
  },
  {
    address: '5yxNbU8DgYJZNi3mPD9rs4XLh9ckXrhPjJ5VCujUWg5H',
    chainId: 101,
    decimals: 5,
    name: 'Fronk',
    symbol: 'FRONK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/118d47f8-cdf8-4cdd-3c88-9be248ce6600/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'fronk',
    },
  },
  {
    address: '3FoUAsGDbvTD6YZ4wVKJgTB76onJUKz7GPEBNiR5b8wc',
    chainId: 101,
    decimals: 4,
    name: 'Cheems',
    symbol: 'CHEEMS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1154bc7d-5c49-4b12-e54d-8d3117523e00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cheems',
    },
  },
  {
    address: '8ymi88q5DtmdNTn2sPRNFkvMkszMHuLJ1e3RVdWjPa3s',
    chainId: 101,
    decimals: 0,
    name: 'SolDoge',
    symbol: 'SDOGE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0e8af7ed-2231-4c31-1b43-21b414e76100/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'soldoge',
    },
  },
  {
    address: 'isktkk27QaTpoRUhwwS5n9YUoYf8ydCuoTz5R2tFEKu',
    chainId: 101,
    decimals: 2,
    name: 'Rafkróna',
    symbol: 'ISKT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/536b18f5-4576-4e3b-fdd8-92c1246b5400/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'rafkrona',
    },
  },
  {
    address: 'AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped FTT (Sollet)',
    symbol: 'soFTT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/de961fd4-1b57-4e52-8339-48b300fc3500/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'ftx-token',
    },
  },
  {
    address: 'DubwWZNWiNGMMeeQHPnMATNj77YZPZSAz2WVR5WjLJqz',
    chainId: 101,
    decimals: 9,
    name: 'CropperFinance',
    symbol: 'CRP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/6f0e6d62-fdb3-4c25-0b2a-32c6a1fa8b00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cropperfinance',
    },
  },
  {
    address: 'ErGB9xa24Szxbk1M28u2Tx8rKPqzL6BroNkkzk5rG4zj',
    chainId: 101,
    decimals: 8,
    name: 'FRAKT Token',
    symbol: 'FRKT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e8270fde-45d4-43a3-920e-78d2c74f0b00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'frakt-token',
    },
  },
  {
    address: 'UXPhBoR3qG4UCiGNJfV7MqhHyFqKN68g45GoYvAeL2M',
    chainId: 101,
    decimals: 9,
    name: 'UXP Governance Token',
    symbol: 'UXP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/aa84bec7-2e7a-484e-e8f9-363d5c624b00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'uxd-protocol-token',
    },
  },
  {
    address: 'Taki7fi3Zicv7Du1xNAWLaf6mRK7ikdn77HeGzgwvo4',
    chainId: 101,
    decimals: 9,
    name: 'Taki',
    symbol: 'TAKI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f2ce957b-8653-4e83-3bc8-804c89d78c00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'taki',
    },
  },
  {
    address: 'G7rwEgk8KgQ4RUTnMy2W2i7dRDq4hXHD4CSp9PSmSbRW',
    chainId: 101,
    decimals: 9,
    name: 'CHAD',
    symbol: 'CHAD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/401b4a60-96ec-49d3-5f4d-e4032a432900/public',
    tags: ['community', 'token-2022'],
    extensions: {
      coingeckoId: 'chad-on-solana',
    },
  },
  {
    address: 'o1Mw5Y3n68o8TakZFuGKLZMGjm72qv4JeoZvGiCLEvK',
    chainId: 101,
    decimals: 2,
    name: 'Cope',
    symbol: 'Cope',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d92b28ad-cda1-461b-ccc2-61626cb77300/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'cope-token',
    },
  },
  {
    address: 'htoHLBJV1err8xP5oxyQdV2PLQhtVjxLXpKB7FsgJQD',
    chainId: 101,
    decimals: 9,
    name: 'HTO',
    symbol: 'HTO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/eda55b4b-77a1-48dc-4e5a-f181185bd700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'heavenland-hto',
    },
  },
  {
    address: 'PRSMNsEPqhGVCH1TtWiJqPjJyh2cKrLostPZTNy1o5x',
    chainId: 101,
    decimals: 6,
    name: 'PRISM',
    symbol: 'PRISM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/52765e3a-2bd9-40aa-0494-946093beff00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'prism',
    },
  },
  {
    address: '4TUNzcgp2fPD48fcW4seRjyqyDZMrPj4ZubnXFEsKeYk',
    chainId: 101,
    decimals: 7,
    name: 'PRNT',
    symbol: 'PRNT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/709d95c6-f8b1-4004-e931-a89237704600/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'prnt',
    },
  },
  {
    address: 'FoRGERiW7odcCBGU1bztZi16osPBHjxharvDathL5eds',
    chainId: 101,
    decimals: 9,
    name: 'FORGE',
    symbol: 'FORGE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/163ff128-c9bb-43c9-49d5-ad6fd3c8d500/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'blocksmith-labs-forge',
    },
  },
  {
    address: 'GsNzxJfFn6zQdJGeYsupJWzUAm57Ba7335mfhWvFiE9Z',
    chainId: 101,
    decimals: 6,
    name: 'Dexlab',
    symbol: 'DXL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/77d8b484-1986-4208-2163-580a68747000/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dexlab',
    },
  },
  {
    address: 'HALLAeXM6sz7vrqp6Zyaqi8RphQ1LtE69fyeMbzk42Mk',
    chainId: 101,
    decimals: 9,
    name: 'HALLAIN Token',
    symbol: 'HALLAIN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2b15827b-3bf3-4906-8c60-a1b2e5301000/public',
    tags: ['community'],
  },
  {
    address: '2VhjJ9WxaGC3EZFwJG9BDUs9KxKCAjQY4vgd1qxgYWVg',
    chainId: 101,
    decimals: 6,
    name: 'EUROe Stablecoin',
    symbol: 'EUROe',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/081482c8-b1a5-4fc1-fef5-b58f29e1b900/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'euroe-stablecoin',
    },
  },
  {
    address: '94XduSfSnyas7jAEFSJSXiCi1xQ4mENWcii1aCvjVuqu',
    chainId: 101,
    decimals: 9,
    name: 'JIMMY',
    symbol: 'JIMMY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0d5883fe-804e-44c0-75c8-5d442faf7d00/public',
    tags: ['community'],
  },
  {
    address: 'Gz7VkD4MacbEB6yC5XD3HcumEiYx2EtDYYrfikGsvopG',
    chainId: 101,
    decimals: 8,
    name: 'MATIC (Portal from Polygon)',
    symbol: 'MATICpo',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/6e166924-548b-4217-184f-a18ea4d23400/public',
    tags: ['wormhole', 'solana-fm'],
    extensions: {
      coingeckoId: 'matic-wormhole',
    },
  },
  {
    address: 'Lrxqnh6ZHKbGy3dcrCED43nsoLkM1LTzU2jRfWe8qUC',
    chainId: 101,
    decimals: 6,
    name: 'Larix',
    symbol: 'LARIX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b8955cf8-cdb5-446d-ceed-02c1d0d5ab00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'larix',
    },
  },
  {
    address: 'E2VmbootbVCBkMNNxKQgCLMS1X3NoGMaYAsufaAsf7M',
    chainId: 101,
    decimals: 6,
    name: 'USD Coin (PoS) (Portal from Polygon)',
    symbol: 'USDCpo',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/97afce78-56d1-4229-f140-2dfdbfaf2700/public',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'usd-coin-pos-wormhole',
    },
  },
  {
    address: 'EPeUFDgHRxs9xxEPVaL6kfGQvCon7jmAWKVUHuux1Tpz',
    chainId: 101,
    decimals: 8,
    name: 'Basic Attention Token (Portal)',
    symbol: 'BAT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d7d0ffcc-2744-4dda-17f4-9ad0ad916d00/public',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
  },
  {
    address: 'PugAiDuaQ5hzicBHAW9qrQQ8qi4B6sh3n7PknKhyjeX',
    chainId: 101,
    decimals: 5,
    name: 'PUGAI',
    symbol: 'PUGAI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/696f4198-8b3b-49b9-85fb-a23a1cff5c00/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'pug-ai',
    },
  },
  {
    address: '8XSsNvaKU9FDhYWAv7Yc7qSNwuJSzVrXBNEk7AFiWF69',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDC (Allbridge from BSC)',
    symbol: 'abUSDC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/29ce6a40-f3ee-4c6a-c349-091d3cb26f00/public',
    tags: ['old-registry'],
  },
  {
    address: 'EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp',
    chainId: 101,
    decimals: 6,
    name: 'Bonfida',
    symbol: 'FIDA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c23fde01-5e89-42c8-9969-7ecc947b5c00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'bonfida',
    },
  },
  {
    address: 'FoXyMu5xwXre7zEoSvzViRk3nGawHUp9kUh97y2NDhcq',
    chainId: 101,
    decimals: 0,
    name: 'Famous Fox Federation',
    symbol: 'FOXY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9505ca70-e463-4252-ba19-47e878232700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'famous-fox-federation',
    },
  },
  {
    address: 'Fishy64jCaa3ooqXw7BHtKvYD8BTkSyAPh6RNE3xZpcN',
    chainId: 101,
    decimals: 6,
    name: 'FISHY by sharky.fi',
    symbol: 'FISHY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9bc3ee08-f429-4186-febc-a060522a3d00/public',
    tags: ['community'],
  },
  {
    address: 'MEANeD3XDdUmNMsRGjASkSWdC8prLYsoRJ61pPeHctD',
    chainId: 101,
    decimals: 6,
    name: 'MEAN',
    symbol: 'MEAN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/fb8a880c-a6d0-49bf-b68f-b6e7da175500/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'meanfi',
    },
  },
  {
    address: '5HsZR8eG7QpQcN8Mnp8oFdENRkJMP9ZkcKhPSCKTJSWh',
    chainId: 101,
    decimals: 9,
    name: 'Moon Roll Coin',
    symbol: 'MRC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/56a46941-4b33-438a-f17b-856207532700/public',
    tags: ['community'],
  },
  {
    address: '5MAYDfq5yxtudAhtfyuMBuHZjgAbaS9tbEyEQYAhDS5y',
    chainId: 101,
    decimals: 6,
    name: 'Access Protocol',
    symbol: 'ACS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/714a3d70-18ed-4a7f-ac8f-13dcc9e65a00/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'access-protocol',
    },
  },
  {
    address: 'BdZPG9xWrG3uFrx2KrUW1jT4tZ9VKPDWknYihzoPRJS3',
    chainId: 101,
    decimals: 9,
    name: 'prtSOL (Parrot Staked SOL)',
    symbol: 'prtSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/71857ef5-743c-40fb-120f-30eb5ff11d00/public',
    tags: ['old-registry'],
  },
  {
    address: 'DMqv9nGbEVAkQoz13ncKh5XJrFg2BQ5YTwd1XrGEKkaz',
    chainId: 101,
    decimals: 6,
    name: 'Flying Spaghetti Monster',
    symbol: 'FSM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/25df4c9b-4aba-416c-b117-e75729aacf00/public',
    tags: ['community'],
  },
  {
    address: 'SNSNkV9zfG5ZKWQs6x4hxvBRV6s8SqMfSGCtECDvdMd',
    chainId: 101,
    decimals: 9,
    name: 'SynesisOne',
    symbol: 'SNS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/87051a1b-d1d9-4420-d300-46ae9e370c00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'synesis-one',
    },
  },
  {
    address: 'HZNpqL7RT9gxf9eWoWsWzC5DfjzQ41XTQgEA7p3VzaaD',
    chainId: 101,
    decimals: 8,
    name: 'Trust Wallet (Portal)',
    symbol: 'TWT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/09f333bb-f594-4d83-71c1-a98855270a00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'ZScHuTtqZukUrtZS43teTKGs2VqkKL8k4QCouR2n6Uo',
    chainId: 101,
    decimals: 8,
    name: 'Lido Wrapped Staked ETH',
    symbol: 'wstETH',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1033baed-9913-4343-49e5-7d77fb619700/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'E77cpQ4VncGmcAXX16LHFFzNBEBb2U7Ar7LBmZNfCgwL',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDT (Allbridge from BSC)',
    symbol: 'abUSDT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1706164d-a2dd-4d70-e24a-e6cfccca9000/public',
    tags: ['old-registry'],
  },
  {
    address: '9iLH8T7zoWhY7sBmj1WK9ENbWdS1nL8n9wAxaeRitTa6',
    chainId: 101,
    decimals: 9,
    name: 'Hedge USD',
    symbol: 'USH',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/30674017-49e5-424e-6732-5ed25dee4c00/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'hedge-usd',
    },
  },
  {
    address: 'CiKu4eHsVrc1eueVQeHn7qhXTcVu95gSQmBpX4utjL9z',
    chainId: 101,
    decimals: 8,
    name: 'Shiba Inu (Portal)',
    symbol: 'SHIB',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a23046ac-c9e9-40b0-ec0f-e79eb17e6900/public',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'shiba-inu-wormhole',
    },
  },
  {
    address: 'a11bdAAuV8iB2fu7X6AxAvDTo1QZ8FXB3kk5eecdasp',
    chainId: 101,
    decimals: 9,
    name: 'Allbridge',
    symbol: 'ABR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b103b24c-6e58-4fd1-2a11-3d1d1d30f300/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'allbridge',
    },
  },
  {
    address: '3UCMiSnkcnkPE1pgQ5ggPCBv6dXgVUy16TmMUe1WpG9x',
    chainId: 101,
    decimals: 8,
    name: 'Aleph.im (Portal)',
    symbol: 'ALEPH',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/aefd843d-6cd8-4f66-d59e-e3addae59500/public',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
  },
  {
    address: '2KE2UNJKB6RGgb78DxJbi2HXSfCs1EocHj4FDMZPr4HA',
    chainId: 101,
    decimals: 5,
    name: 'Slow Protocol',
    symbol: 'SLOW',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/12a5f02b-e839-4e58-64e8-180c0b5d8c00/public',
    tags: ['community'],
  },
  {
    address: 'METAmTMXwdb8gYzyCPfXXFmZZw4rUsXX58PNsDg7zjL',
    chainId: 101,
    decimals: 6,
    name: 'Solice',
    symbol: 'SLC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d7105255-6f7f-4779-00d1-b2ff58eedf00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solice',
    },
  },
  {
    address: '3FHpkMTQ3QyAJoLoXVdBpH4TfHiehnL2kXmv9UXBpYuF',
    chainId: 101,
    decimals: 9,
    name: 'STYLE',
    symbol: 'STYLE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c9a6ca9f-079a-447d-284e-1b58a6cfca00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'style',
    },
  },
  {
    address: '2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi',
    chainId: 101,
    decimals: 5,
    name: 'SolarMoon',
    symbol: 'MOON',
    logoURI:
      'https://gateway.ipfscdn.io/ipfs/bafkreifwdwgcv6fnh5icz3wkefokatsemsojck4hftsnuf4xcfjcvagsva',
    tags: ['community', 'token-2022'],
  },
  {
    address: '5qKDWkBejLtRh1UGFV7e58QEkdn2fRyH5ehVXqUYujNW',
    chainId: 101,
    decimals: 9,
    name: 'Sdrive Coin',
    symbol: 'SCOIN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c017f3e5-e92f-4976-e98a-a9c6ce26cc00/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'sdrive-app',
    },
  },
  {
    address: 'kNkT1RDnexWqYP3EYGyWv5ZtazB8CfgGAfJtv9AQ3kz',
    chainId: 101,
    decimals: 9,
    name: 'Kineko',
    symbol: 'KNK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/297cea88-8e7a-4048-6c10-6e3fcd825300/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'kineko-knk',
    },
  },
  {
    address: 'FHfba3ov5P3RjaiLVgh8FTv4oirxQDoVXuoUUDvHuXax',
    chainId: 101,
    decimals: 6,
    name: 'USD Coin (Portal from Avalanche)',
    symbol: 'USDCav',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e357ac35-0050-4381-f927-ff07d36f3200/public',
    tags: ['wormhole'],
  },
  {
    address: 'FCqfQSujuPxy6V42UvafBhsysWtEq1vhjfMN1PUbgaxA',
    chainId: 101,
    decimals: 8,
    name: 'USD Coin (Portal from BSC)',
    symbol: 'USDCbs',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3536d8ff-59fc-4a76-744b-0c5b2d31fc00/public',
    tags: ['wormhole', 'old-registry'],
  },
  {
    address: 'H1G6sZ1WDoMmMCFqBKAbg9gkQPCo1sKQtaJWz9dHmqZr',
    chainId: 101,
    decimals: 9,
    name: 'SHIBONK',
    symbol: 'SBONK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/fc427210-f834-4458-8780-18c09ad46a00/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'shibonk-311f81df-a4ea-4f31-9e61-df0af8211bd7',
    },
  },
  {
    address: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped Bitcoin (Sollet)',
    symbol: 'soBTC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1d6f6b50-efb4-4ef9-9d0b-12bae83ada00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'wrapped-bitcoin-sollet',
    },
  },
  {
    address: 'PsyFiqqjiv41G7o5SMRzDJCu4psptThNR2GtfeGHfSq',
    chainId: 101,
    decimals: 6,
    name: 'PsyOptions',
    symbol: 'PSY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/be595a27-87e2-4bf7-1d17-7e888f564f00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'psyoptions',
    },
  },
  {
    address: '5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm',
    chainId: 101,
    decimals: 9,
    name: 'Socean staked SOL',
    symbol: 'scnSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/8699416c-7443-4d50-daf9-189f87f4bd00/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'socean-staked-sol',
    },
  },
  {
    address: 'SUNNYWgPQmFxe9wTZzNK7iPnJ3vYDrkgnxJRJm1s3ag',
    chainId: 101,
    decimals: 6,
    name: 'Sunny Governance Token',
    symbol: 'SUNNY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7ad28d50-164a-49dd-2d1a-3fe88a85e900/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'sunny-aggregator',
    },
  },
  {
    address: '5RpUwQ8wtdPCZHhu6MERp2RGrpobsbZ6MH5dDHkUjs2',
    chainId: 101,
    decimals: 8,
    name: 'Binance USD (Portal from BSC)',
    symbol: 'BUSDbs',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a48741b4-9633-4585-8d63-9b1b52b7b300/public',
    tags: ['wormhole', 'old-registry'],
  },
  {
    address: 'z3dn17yLaGMKffVogeFHQ9zWVcXgqgf3PQnDsNs2g6M',
    chainId: 101,
    decimals: 6,
    name: 'Oxygen Protocol',
    symbol: 'OXY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/89cacb0b-5bdb-4ca9-8c66-071fe345d100/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'oxygen',
    },
  },
  {
    address: '9m9fmqJ2s7iUXZhFMsrdes1UcAtu3JyZXK3ZXfW3KPEw',
    chainId: 101,
    decimals: 5,
    name: 'BIRDIES',
    symbol: 'BIRDS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9adf877d-2b1a-4c8d-2428-56d240221400/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'birdies',
    },
  },
  {
    address: '8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA',
    chainId: 101,
    decimals: 6,
    name: 'Grape',
    symbol: 'GRAPE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e7fbcea3-9573-4b6f-ceca-e7b588275500/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'grape-2',
    },
  },
  {
    address: 'AD27ov5fVU2XzwsbvnFvb1JpCBaCB5dRXrczV9CqSVGb',
    chainId: 101,
    decimals: 9,
    name: 'Realy Token',
    symbol: 'REAL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f7c8a60a-daf9-4645-499e-867a78cd2500/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'realy-metaverse',
    },
  },
  {
    address: '2Kc38rfQ49DFaKHQaWbijkE7fcymUMLY5guUiUsDmFfn',
    chainId: 101,
    decimals: 6,
    name: 'Kurobi',
    symbol: 'KURO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/aa48166f-ca28-41e7-5c44-836406749700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'kurobi',
    },
  },
  {
    address: 'PoRTjZMPXb9T7dyU7tpLEZRQj7e6ssfAE62j2oQuc6y',
    chainId: 101,
    decimals: 6,
    name: 'Port Finance Token',
    symbol: 'PORT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/30524d5f-c35e-4410-1eb3-183ce7d5e300/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'port-finance',
    },
  },
  {
    address: '2HeykdKjzHKGm2LKHw8pDYwjKPiFEoXAz74dirhUgQvq',
    chainId: 101,
    decimals: 9,
    name: 'Sator',
    symbol: 'SAO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e36c4516-6c3d-419c-06a1-5228aad08f00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'sator',
    },
  },
  {
    address: '4dmKkXNHdgYsXqBHCuMikNQWwVomZURhYvkkX5c4pQ7y',
    chainId: 101,
    decimals: 6,
    name: 'Synthetify',
    symbol: 'SNY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/6c3d4f50-4fc5-4ce0-d8c3-f26aebcae600/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'synthetify-token',
    },
  },
  {
    address: '5nrAynqdsEyBc3GRc7hvM5QnDwjQVePNg9kn6bCvi4G3',
    chainId: 101,
    decimals: 5,
    name: 'SUPER TOKEN',
    symbol: 'SUPER',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/25d50e87-0bf2-4fc4-251e-16b4ddb98900/public',
    tags: ['community'],
  },
  {
    address: 'kiGenopAScF8VF31Zbtx2Hg8qA5ArGqvnVtXb83sotc',
    chainId: 101,
    decimals: 9,
    name: 'Genopets Ki',
    symbol: 'KI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/51399363-2210-468e-5582-765951617500/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'genopet-ki',
    },
  },
  {
    address: '5gs8nf4wojB5EXgDUWNLwXpknzgV2YWDhveAeBZpVLbp',
    chainId: 101,
    decimals: 6,
    name: 'xHashtag Token',
    symbol: 'XTAG',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3ada991b-90ab-4248-0f40-19c992b26b00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'xhashtag',
    },
  },
  {
    address: '6XWfkyg5mzGtKNftSDgYjyoPyUsLRf2rafj95XSFSFrr',
    chainId: 101,
    decimals: 9,
    name: 'Kitty Coin',
    symbol: 'KITTY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/dd0ab386-0f5b-473f-7faf-baab2ed78e00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'kitty-coin-solana',
    },
  },
  {
    address: 'FLTHudk5B5zag7JmGXqrYrFfey6otevLQA6jm1UHHLEE',
    chainId: 101,
    decimals: 9,
    name: 'FLTH',
    symbol: 'FLTH',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/daded390-a97d-4d65-9dca-840bee5d9100/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'liberty-square-filth',
    },
  },
  {
    address: '4h41QKUkQPd2pCAFXNNgZUyGUxQ6E7fMexaZZHziCvhh',
    chainId: 101,
    decimals: 6,
    name: 'The Suites Token',
    symbol: 'SUITE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/18f88e1a-964e-4ecd-e265-31438854b600/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'AAmGoPDFLG6bE82BgZWjVi8k95tj9Tf3vUN7WvtUm2BU',
    chainId: 101,
    decimals: 6,
    name: 'RaceFi Token',
    symbol: 'RACEFI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/83e0b5c9-f8ea-43af-b529-bfe17f7b4b00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'racefi',
    },
  },
  {
    address: 'SLRSSpSLUTP7okbCUBYStWCo1vUgyt775faPqz8HUMr',
    chainId: 101,
    decimals: 6,
    name: 'Solrise Finance',
    symbol: 'SLRS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/705c20f9-9ed4-4441-d808-d7c75d416100/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solrise-finance',
    },
  },
  {
    address: '88881Hu2jGMfCs9tMu5Rr7Ah7WBNBuXqde4nR5ZmKYYy',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped USD Coin (8 decimals)',
    symbol: 'sUSDC-8',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ddceaf5e-e566-4b90-204d-ef43af8f1c00/public',
    tags: ['old-registry'],
  },
  {
    address: 'HJbNXx2YMRxgfUJ6K4qeWtjatMK5KYQT1QnsCdDWywNv',
    chainId: 101,
    decimals: 9,
    name: 'Atlas Dex',
    symbol: 'ATS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/770a1c50-141c-40b6-a576-c69f13913d00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'atlas-dex',
    },
  },
  {
    address: 'Dwri1iuy5pDFf2u2GwwsH2MxjR6dATyDv9En9Jk8Fkof',
    chainId: 101,
    decimals: 9,
    name: '2080',
    symbol: '2080',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/805cf1d1-43a3-42ab-8f72-52b8a778b800/public',
    tags: ['community'],
    extensions: {
      coingeckoId: '2080',
    },
  },
  {
    address: '5p2zjqCd1WJzAVgcEnjhb9zWDU7b9XVhFhx4usiyN7jB',
    chainId: 101,
    decimals: 9,
    name: 'CATO',
    symbol: 'CATO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/fe9f07e9-8740-47f7-9571-a75269849d00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cato',
    },
  },
  {
    address: 'SLCLww7nc1PD2gQPQdGayHviVVcpMthnqUz2iWKhNQV',
    chainId: 101,
    decimals: 9,
    name: 'Solcial token',
    symbol: 'SLCL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/345b113b-78ee-479d-0aae-72d9d04d8200/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solcial',
    },
  },
  {
    address: '5JnZ667P3VcjDinkJFysWh2K2KtViy63FZ3oL5YghEhW',
    chainId: 101,
    decimals: 9,
    name: 'APYSwap',
    symbol: 'APYS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1a527bc2-54da-4598-6f17-b30a7a650d00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'apyswap',
    },
  },
  {
    address: '4tJZhSdGePuMEfZQ3h5LaHjTPsw1iWTRFTojnZcwsAU6',
    chainId: 101,
    decimals: 9,
    name: 'Elumia Crowns',
    symbol: 'ELU',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/07b26c15-b045-4f08-3278-23b64d1d6600/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'elumia',
    },
  },
  {
    address: 'G9tt98aYSznRk7jWsfuz9FnTdokxS6Brohdo9hSmjTRB',
    chainId: 101,
    decimals: 9,
    name: 'PUFF',
    symbol: 'PUFF',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ba1a192f-e4a7-476e-dd8d-60bd8b613b00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'puff',
    },
  },
  {
    address: 'AMdnw9H5DFtQwZowVFr4kUgSXJzLokKSinvgGiUoLSps',
    chainId: 101,
    decimals: 9,
    name: 'MOONLANA',
    symbol: 'MOLA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0752fd22-86bb-482a-22d1-416e0632a100/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'moonlana',
    },
  },
  {
    address: '2cJgFtnqjaoiu9fKVX3fny4Z4pRzuaqfJ3PBTMk2D9ur',
    chainId: 101,
    decimals: 6,
    name: 'Plutonian DAO',
    symbol: 'PLD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a94ec947-c9f9-48e0-0422-ea76b5fed100/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'plutonian-dao',
    },
  },
  {
    address: 'EswgBj2hZKdgovX2ihWSUDnuBg9VNbGmSGoH5yjNsPRa',
    chainId: 101,
    decimals: 9,
    name: 'Physis',
    symbol: 'PHY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c8575a72-36ec-42ea-872b-7a11f481f400/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'physis',
    },
  },
  {
    address: 'ratioMVg27rSZbSvBopUvsdrGUzeALUfFma61mpxc8J',
    chainId: 101,
    decimals: 6,
    name: 'Ratio Governance Token',
    symbol: 'RATIO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/70424bf1-e9a1-48cf-93ad-6f47bfc02600/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'ratio-finance',
    },
  },
  {
    address: 'DuSyBCGuhPvyGu6cSvbZonvQvh8JLyGvXJn1TmkJh6Zn',
    chainId: 101,
    decimals: 0,
    name: 'NeonGame Credits',
    symbol: '$NEON',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/09909bd9-3e96-4f7b-8c66-4179568dd800/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'kiraZUmSnzgfVfhrdvNj6hxHFaPFTTUk8ioY98cbh6G',
    chainId: 101,
    decimals: 9,
    name: 'KIRA',
    symbol: 'KIRA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a987dd38-ab4a-43ee-e8c7-4b3c03241000/public',
    tags: ['community'],
  },
  {
    address: 'JAzesW3tU2VLDx99pwgkDMca2DTNsEhSWG8sj21B1niz',
    chainId: 101,
    decimals: 6,
    name: 'Phoenix',
    symbol: 'PHNX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c6941378-f1cf-4a89-2c40-a610759e3b00/public',
    tags: ['community', 'token-2022'],
  },
  {
    address: 'PRT88RkA4Kg5z7pKnezeNH4mafTvtQdfFgpQTGRjz44',
    chainId: 101,
    decimals: 6,
    name: 'PRT (Parrot Protocol)',
    symbol: 'PRT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d8633b1c-92de-4fef-5db4-c054b4478700/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'parrot-protocol',
    },
  },
  {
    address: 'KgV1GvrHQmRBY8sHQQeUKwTm2r2h8t4C8qt12Cw1HVE',
    chainId: 101,
    decimals: 8,
    name: 'AVAX (Portal)',
    symbol: 'AVAX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/cd4dff60-82b6-4704-2b3d-deb528998500/public',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'avalanche-wormhole',
    },
  },
  {
    address: '8PMHT4swUMtBzgHnh5U564N5sjPSiUz2cjEQzFnnP1Fo',
    chainId: 101,
    decimals: 9,
    name: 'Rope Token',
    symbol: 'ROPE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/41cab41d-32ac-4795-c1e1-7aada7cc1500/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'rope-token',
    },
  },
  {
    address: '49c7WuCZkQgc3M4qH8WuEUNXfgwupZf1xqWkDQ7gjRGt',
    chainId: 101,
    decimals: 8,
    name: 'The Sandbox (Portal)',
    symbol: 'SAND',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/114e3597-514a-4067-4da6-7880e3c84000/public',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'the-sandbox-wormhole',
    },
  },
  {
    address: '9mWRABuz2x6koTPCWiCPM49WUbcrNqGTHBV9T9k7y1o7',
    chainId: 101,
    decimals: 9,
    name: 'MAI Stablecoin',
    symbol: 'MAI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4f5f93d9-bafa-4361-0b34-7d36a15c0b00/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'mimatic',
    },
  },
  {
    address: '4SZjjNABoqhbd4hnapbvoEPEqT8mnNkfbEoAwALf1V8t',
    chainId: 101,
    decimals: 6,
    name: 'Crypto Cavemen',
    symbol: 'CAVE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/77433b4a-fd61-413f-bfd8-176cdf90e300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cave',
    },
  },
  {
    address: '6VNKqgz9hk7zRShTFdg5AnkfKwZUcojzwAkzxSH3bnUm',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped HAPI',
    symbol: 'wHAPI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c8facd96-1c6c-44ad-5158-34f842eadd00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'hapi',
    },
  },
  {
    address: 'APTtJyaRX5yGTsJU522N4VYWg3vCvSb65eam5GrPT5Rt',
    chainId: 101,
    decimals: 6,
    name: 'Apricot',
    symbol: 'APT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e5ab1f51-4810-46a1-a0b0-3df6205b2f00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'apricot',
    },
  },
  {
    address: 'Uuc6hiKT9Y6ASoqs2phonGGw2LAtecfJu9yEohppzWH',
    chainId: 101,
    decimals: 9,
    name: 'Baby Samo Coin',
    symbol: 'BABY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7fa6a95a-b3c9-4f77-29c2-d772ea054500/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'baby-samo-coin',
    },
  },
  {
    address: '4ThReWAbAVZjNVgs5Ui9Pk3cZ5TYaD9u6Y89fp6EFzoF',
    chainId: 101,
    decimals: 8,
    name: '1sol.io (Portal)',
    symbol: '1SOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/959ac0f6-3b3c-40b4-ce58-57e3b8254200/public',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: '1sol-io-wormhole',
    },
  },
  {
    address: 'EsPKhGTMf3bGoy4Qm7pCv3UCcWqAmbC1UGHBTDxRjjD4',
    chainId: 101,
    decimals: 9,
    name: 'FTM (Allbridge from Fantom)',
    symbol: 'FTM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e324dbd2-ae72-4d6e-e2ba-765be6cab700/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '4Njvi3928U3figEF5tf8xvjLC5GqUN33oe4XTJNe7xXC',
    chainId: 101,
    decimals: 8,
    name: 'Threshold Network Token',
    symbol: 'T',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/483f4858-d24f-46d5-2444-918915400400/public',
    tags: ['wormhole'],
  },
  {
    address: '4q5UBXJxE91BZKX548qhU8i5QBWvZdXzS3RZwfTgLQda',
    chainId: 101,
    decimals: 6,
    name: 'Hydrazine',
    symbol: 'N2H4',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/87dd4fc8-7447-4761-d72e-9381eeb09500/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'FnKE9n6aGjQoNWRBZXy4RW6LZVao7qwBonUbiD7edUmZ',
    chainId: 101,
    decimals: 9,
    name: 'Sypool',
    symbol: 'SYP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/fd2464cd-4757-420c-65e6-67bdab850000/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'sypool',
    },
  },
  {
    address: '3XwZtyP5g2ku5cNzLXYcBYygvToXKdjw73GSRq73QYLQ',
    chainId: 101,
    decimals: 2,
    name: 'Kreechures Floor Index',
    symbol: 'KREECHURE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7b7adff2-4b56-41bb-1fc8-adc2b9d5fa00/public',
    tags: ['old-registry'],
  },
  {
    address: '4wjPQJ6PrkC4dHhYghwJzGBVP78DkBzA2U3kHoFNBuhj',
    chainId: 101,
    decimals: 6,
    name: 'LIQ Protocol',
    symbol: 'LIQ',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c2609d9a-c031-467f-7db6-192004d7d000/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'liq-protocol',
    },
  },
  {
    address: 'F3nefJBcejYbtdREjui1T9DPh5dBgpkKq7u2GAAMXs5B',
    chainId: 101,
    decimals: 6,
    name: 'ALL ART',
    symbol: 'AART',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5205919c-0094-44ce-c009-6ae7dce8ed00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'all-art',
    },
  },
  {
    address: 'DFrJxDoLMYt6bNYeNe8Wrjzj2UPUSLZLEMMYBLuTKcTk',
    chainId: 101,
    decimals: 8,
    name: 'NINJA TURTLES',
    symbol: 'NINJA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/03f62d88-2c5e-49c5-28d5-be3863bf3300/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'ninja-turtles',
    },
  },
  {
    address: 'YAWtS7vWCSRPckx1agB6sKidVXiXiDUfehXdEUSRGKE',
    chainId: 101,
    decimals: 6,
    name: 'Yawww',
    symbol: 'YAW',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4002a025-0bd1-42b9-2612-0880fa290d00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'yawww',
    },
  },
  {
    address: 'cxxShYRVcepDudXhe7U62QHvw8uBJoKFifmzggGKVC2',
    chainId: 101,
    decimals: 9,
    name: 'SolChicks',
    symbol: 'CHICKS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/8572df4f-68cc-4d3f-d85d-89efa25ab000/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solchicks-token',
    },
  },
  {
    address: '5SwxhEunuUUcWe4ojybdDwky6dpLxAehNmF4AA71STNh',
    chainId: 101,
    decimals: 5,
    name: 'SWEETS',
    symbol: '$SWTS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/08aeb244-d66c-4a2c-ed08-c609b26e1d00/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'sweets',
    },
  },
  {
    address: 'BYPsjxa3YuZESQz1dKuBw1QSFCSpecsm8nCQhY5xbU1Z',
    chainId: 101,
    decimals: 9,
    name: 'NEAR (Allbridge from Near)',
    symbol: 'NEAR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0b801b26-7a67-43a8-012c-8279e2ae7e00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3',
    chainId: 101,
    decimals: 8,
    name: 'Boring Protocol',
    symbol: 'BOP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0dd0ee09-8a42-4164-94f5-2d2ba129d800/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'boring-protocol',
    },
  },
  {
    address: 'HYoGYzMcbYq3tAvpg15d8VFYVHw6jWEVuGgpNTrG8hps',
    chainId: 101,
    decimals: 4,
    name: 'DOGELON SOLANA',
    symbol: 'DOGELON',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/18054c01-0e0a-4bf1-9964-834b6c788400/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'boooCKXQn9YTK2aqN5pWftQeb9TH7cj7iUKuVCShWQx',
    chainId: 101,
    decimals: 9,
    name: 'Boo Network',
    symbol: 'BOO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/de329e7a-3de1-487f-4cf9-d0941dada200/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'ghostkids',
    },
  },
  {
    address: 'xStpgUCss9piqeFUk2iLVcvJEGhAdJxJQuwLkXP555G',
    chainId: 101,
    decimals: 9,
    name: 'Staked Step',
    symbol: 'xSTEP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/41ea2f5c-87ab-4a38-b820-4ccd22aea500/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'HmKqChBkZEvqFnH8sxja694n77ziYMBWaucZRKfJDRr2',
    chainId: 101,
    decimals: 5,
    name: 'WOLF SOLANA',
    symbol: 'WOLF',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/32df883e-f10b-46a1-2b90-4e4ddf13b700/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'wolf-solana',
    },
  },
  {
    address: '9tzZzEHsKnwFL1A3DyFJwj36KnZj3gZ7g4srWp9YTEoh',
    chainId: 101,
    decimals: 6,
    name: 'ARB Protocol',
    symbol: 'ARB',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/30f9a0c8-5a02-4522-2fb2-12999714f700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'arb-protocol',
    },
  },
  {
    address: 'Doggoyb1uHFJGFdHhJf8FKEBUMv58qo98CisWgeD7Ftk',
    chainId: 101,
    decimals: 5,
    name: 'DOGGO',
    symbol: 'DOGGO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2194d681-0bd7-4f34-f963-9ee6bc57e200/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'doggo',
    },
  },
  {
    address: '4uRn7vxRPWYP4HuAa4UNXwEPLRL8oQ71YByMhr6yBnL4',
    chainId: 101,
    decimals: 2,
    name: 'Playground Waves Floor Index',
    symbol: 'WAVES',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b6ccc93d-14ec-45cb-95cb-cc8231e5ff00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'playground-waves-floor-index',
    },
  },
  {
    address: 'FbUy1NubUtCfoif7TAr6wAtJVJFapYUVWxRGmUwvKNyS',
    chainId: 101,
    decimals: 2,
    name: "𝝠ndre's Fleet Share",
    symbol: 'AFSeX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/41a5dabc-a65d-4b0b-86aa-3e602979c900/public',
    tags: ['community'],
  },
  {
    address: '7j7H7sgsnNDeCngAPjpaCN4aaaru4HS7NAFYSEUyzJ3k',
    chainId: 101,
    decimals: 6,
    name: 'SolRazr',
    symbol: 'SOLR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3dc9b0e5-e86d-4b5a-0c38-5a64ebb6f300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solrazr',
    },
  },
  {
    address: 'AebrVZPfSH7KPAxPwnuqTZB9QNepdktk7HSSY4SNj7BM',
    chainId: 101,
    decimals: 9,
    name: 'Venture Coin',
    symbol: 'VC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/444d7809-d7b9-4f16-fb76-1ea314809400/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'venture-coin-2',
    },
  },
  {
    address: 'MAPS41MDahZ9QdKXhVa4dWB9RuyfV4XqhyAZ8XcYepb',
    chainId: 101,
    decimals: 6,
    name: 'MAPS',
    symbol: 'MAPS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3d342d61-356d-4f1f-4ccf-81f4a54ebe00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'maps',
    },
  },
  {
    address: '3jzdrXXKxwkBk82u2eCWASZLCKoZs1LQTg87HBEAmBJw',
    chainId: 101,
    decimals: 1,
    name: 'FLOOF',
    symbol: 'FLOOF',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/87c0add2-7c13-44aa-78ad-c5f0aaa15b00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'floof',
    },
  },
  {
    address: 'SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M',
    chainId: 101,
    decimals: 9,
    name: 'Sentre',
    symbol: 'SNTR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/44e5b08d-d97a-481a-410e-36f7479b9500/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'sentre',
    },
  },
  {
    address: '8c71AvjQeKKeWRe8jtTGG1bJ2WiYXQdbjqFbUfhHgSVk',
    chainId: 101,
    decimals: 9,
    name: 'GARY',
    symbol: '$GARY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/197b67e2-89d5-4c89-835b-ecf10a012a00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'gary',
    },
  },
  {
    address: '87rSGrpYdmTxfNBf8o2cpyiNcxCmNhUPBXjT8aoyfob5',
    chainId: 101,
    decimals: 9,
    name: 'Equinox',
    symbol: 'ENX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/cd8a1227-d644-43d3-8da5-e5c10ccaa600/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'equinox',
    },
  },
  {
    address: 'ALQ9KMWjFmxVbew3vMkJj3ypbAKuorSgGst6svCHEe2z',
    chainId: 101,
    decimals: 6,
    name: 'MatrixETF DAO Finance',
    symbol: 'MDF',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/824f5843-ffff-400f-fa56-df5048efa900/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'matrixetf',
    },
  },
  {
    address: 'GoLDYyyiVeXnVf9qgoK712N5esm1cCbHEK9aNJFx47Sx',
    chainId: 101,
    decimals: 9,
    name: 'DeFi Land Gold',
    symbol: 'GOLDY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/21158177-7615-4323-44a4-820f8f28de00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'defi-land-gold',
    },
  },
  {
    address: 'GEYrotdkRitGUK5UMv3aMttEhVAZLhRJMcG82zKYsaWB',
    chainId: 101,
    decimals: 3,
    name: 'POTATO',
    symbol: 'POTATO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/834915de-35ee-45c2-1d62-ed425d24be00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'AASdD9rAefJ4PP7iM89MYUsQEyCQwvBofhceZUGDh5HZ',
    chainId: 101,
    decimals: 9,
    name: 'Solex Finance',
    symbol: 'SLX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/395987dc-552a-4409-ac37-132c04029100/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solex-finance',
    },
  },
  {
    address: 'MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K',
    chainId: 101,
    decimals: 6,
    name: 'Mercurial(Deprecated)',
    symbol: 'MER',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c48eac41-9029-40e9-ea70-434841f85000/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'mercurial',
    },
  },
  {
    address: 'GDzfemoYR5GkbK4YupYpyq3E8Du9fSfKXxKDpkdrqGjs',
    chainId: 101,
    decimals: 6,
    name: 'Klausen Art',
    symbol: 'KART',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/966a8306-070b-4e01-3a67-f1969ba14300/public',
    tags: ['community'],
  },
  {
    address: '2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped Ethereum (Sollet)',
    symbol: 'soETH',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7437a13d-1f34-492e-3b4b-d8fd35849900/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'wrapped-ethereum-sollet',
    },
  },
  {
    address: 'yPRTUpLDftNej7p6QofNYgRArRXsm6Mvkzohj4bh4WM',
    chainId: 101,
    decimals: 6,
    name: 'yPRT (Parrot Yield Token)',
    symbol: 'yPRT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/65d7999c-cc08-42dd-5d39-925f2781bd00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7TQTpG1qBvE9ui7J9yQWKFAYpQahkaKPKqGTsqSm1wUv',
    chainId: 101,
    decimals: 9,
    name: 'Good Vibes',
    symbol: 'GV',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c65e7582-74ae-4713-10af-5b90fc7fc700/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'FYUkUybywqUUyrUwiAezbvhTp2DUgx1eg8tQNiKkXqJ9',
    chainId: 101,
    decimals: 9,
    name: 'Magic Crystal Coin',
    symbol: 'MC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c39f40f9-034a-441b-81f4-c6694d5fb900/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'tap-fantasy-mc',
    },
  },
  {
    address: 'sonarX4VtVkQemriJeLm6CKeW3GDMyiBnnAEMw1MRAE',
    chainId: 101,
    decimals: 9,
    name: 'Sonar Watch',
    symbol: 'SONAR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f895470f-9ef9-4ed5-38dc-297d9c5d5300/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'sonarwatch',
    },
  },
  {
    address: '5KV2W2XPdSo97wQWcuAVi6G4PaCoieg4Lhhi61PAMaMJ',
    chainId: 101,
    decimals: 9,
    name: 'Kugle GU',
    symbol: 'GU',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e9f9b285-52fb-45c1-1d3e-cd47fc813500/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'gu',
    },
  },
  {
    address: 'BDrL8huis6S5tpmozaAaT5zhE5A7ZBAB2jMMvpKEeF8A',
    chainId: 101,
    decimals: 9,
    name: 'NOVA FINANCE',
    symbol: 'NOVA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5f5145ed-9225-455c-d4be-e0fe7f5a9700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'nova-finance',
    },
  },
  {
    address: '8s9FCz99Wcr3dHpiauFRi6bLXzshXfcGTfgQE7UEopVx',
    chainId: 101,
    decimals: 6,
    name: 'ChikinCoin',
    symbol: 'CKC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d0200df9-be10-44bc-4333-0de0b178dc00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'chikincoin',
    },
  },
  {
    address: 'EsirN3orp85uyvZyDrZnbe9cyo7N1114ynLFdwMPCQce',
    chainId: 101,
    decimals: 9,
    name: 'Aevum',
    symbol: 'AEVUM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/dbc1a825-0bd4-436c-2491-bbe5012fa500/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'aevum-ore',
    },
  },
  {
    address: 'E6UU5M1z4CvSAAF99d9wRoXsasWMEXsvHrz3JQRXtm2X',
    chainId: 101,
    decimals: 9,
    name: 'Dogelana',
    symbol: 'DGLN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/41dd5c4e-4ec3-4e87-8b77-7a5cf355d300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dogelana',
    },
  },
  {
    address: '5tN42n9vMi6ubp67Uy4NnmM5DMZYN8aS8GeB3bEDHr6E',
    chainId: 101,
    decimals: 9,
    name: 'Waggle Network',
    symbol: 'WAG',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ae6d8ae8-122f-409f-8475-f64bbd927700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'waggle-network',
    },
  },
  {
    address: '9vMJfxuKxXBoEa7rM12mYLMwTacLMLDJqHozw96WQL8i',
    chainId: 101,
    decimals: 6,
    name: 'UST (Portal)',
    symbol: 'UST',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0b70efc1-345b-40c4-cc65-82afef831800/public',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'terrausd-wormhole',
    },
  },
  {
    address: 'UNQtEecZ5Zb4gSSVHCAWUQEoNnSVEbWiKCi1v9kdUJJ',
    chainId: 101,
    decimals: 6,
    name: 'Unique Venture Clubs',
    symbol: 'UNQ',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/25220614-92db-4f8e-92d2-cc1e8670d200/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'unq',
    },
  },
  {
    address: 'A98UDy7z8MfmWnTQt6cKjje7UfqV3pTLf4yEbuwL2HrH',
    chainId: 101,
    decimals: 9,
    name: 'Modul',
    symbol: 'MODUL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b9c1ac52-4a37-4214-6d40-1e630bbeb300/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CAPYD6Lrm7bTZ6C7t7JvSxvpEcfKQ9YNB7kUjh6p6XBN',
    chainId: 101,
    decimals: 9,
    name: 'Capybara',
    symbol: 'CAPY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d395befd-c962-4724-7d03-327d2708dc00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'capybara',
    },
  },
  {
    address: 'EdAhkbj5nF9sRM7XN7ewuW8C9XEUMs8P7cnoQ57SYE96',
    chainId: 101,
    decimals: 9,
    name: 'FABRIC',
    symbol: 'FAB',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/97e798e1-7237-4e06-df49-b84099d5d500/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'fabric',
    },
  },
  {
    address: 'E5ndSkaB17Dm7CsD22dvcjfrYSDLCxFcMd6z8ddCk5wp',
    chainId: 101,
    decimals: 9,
    name: 'Aldrin',
    symbol: 'RIN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/16a62801-27f7-4f5c-ae42-874ee19c5100/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'aldrin',
    },
  },
  {
    address: 'JET6zMJWkCN9tpRT2v2jfAmm5VnQFDpUBCyaKojmGtz',
    chainId: 101,
    decimals: 9,
    name: 'Jet Protocol',
    symbol: 'JET',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/972c41d8-6423-40c0-b458-8f5cdd86f700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'jet',
    },
  },
  {
    address: 'CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5',
    chainId: 101,
    decimals: 8,
    name: 'renBTC',
    symbol: 'renBTC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3807c111-be06-4222-4e3f-7db075787c00/public',
    tags: ['old-registry'],
  },
  {
    address: 'HxPoEHMt1vKeqjKCePcqTj6yYgn6Xqq1fKTY3Pjx4YrX',
    chainId: 101,
    decimals: 8,
    name: 'ZAP Token',
    symbol: 'ZAP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2daf9c29-f25f-444e-1325-90ab62940d00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'zap',
    },
  },
  {
    address: '6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3',
    chainId: 101,
    decimals: 8,
    name: 'Wrapped Dingocoin',
    symbol: 'wDingocoin',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ec548cfc-92f3-4eda-9b7d-8e555ee5ac00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dingocoin',
    },
  },
  {
    address: 'GTgMjfKTBF9jVBogMnaiAVnHmvnF2wyGAv3zvtk5CBHq',
    chainId: 101,
    decimals: 9,
    name: 'CLUB',
    symbol: 'CLUB',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/064a79bd-e2b7-4660-4e23-68ee86552000/public',
    tags: ['community'],
  },
  {
    address: '6y8W5YwAuzostqrS4YDJufBvksosfSi47Pd8U4A5vrBC',
    chainId: 101,
    decimals: 9,
    name: 'Whole Earth Coin',
    symbol: 'WEC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/54901b75-036a-401f-f0ce-bd07c4306c00/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'whole-earth-coin',
    },
  },
  {
    address: '2YJH1Y5NbdwJGEUAMY6hoTycKWrRCP6kLKs62xiSKWHM',
    chainId: 101,
    decimals: 9,
    name: 'SolGems',
    symbol: 'GEMS',
    logoURI:
      'https://public.djib.io/QmdLDat9CvntvFPG98CcXJJ3tE1mQZkf5DEfPNhK8F3guq',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'DMCUFm2ZAnSU7UgsdVq23gRogMU3MEBjPgQF1gK53rEn',
    chainId: 101,
    decimals: 6,
    name: 'UncleMine',
    symbol: 'UM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d7d82d9f-b95c-4263-3e90-f48b1db3b300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'unclemine',
    },
  },
  {
    address: 'GEJpt3Wjmr628FqXxTgxMce1pLntcPV4uFi8ksxMyPQh',
    chainId: 101,
    decimals: 9,
    name: 'daoSOL Token',
    symbol: 'daoSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/cd08e533-11be-4aae-0ca7-b36b59a9e900/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'daosol',
    },
  },
  {
    address: '5Wsd311hY8NXQhkt9cWHwTnqafk7BGEbLu8Py3DSnPAr',
    chainId: 101,
    decimals: 6,
    name: 'Compendium Finance',
    symbol: 'CMFI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/056a0892-9a7b-4126-3e9c-8ed4f15e2700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'compendium-fi',
    },
  },
  {
    address: 'BABYsocP6cB95xvBDXnjXKX96VBNC37dmNWUtaV9Jk6v',
    chainId: 101,
    decimals: 2,
    name: 'SOL BABAY DOGE COIN',
    symbol: 'SBABYDOGE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1421b369-da4b-4fe0-ac06-851660fe0a00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'sol-baby-doge',
    },
  },
  {
    address: 'uNrix3Q5g51MCEUrYBUEBDdQ96RQDQspQJJnnQ4T3Vc',
    chainId: 101,
    decimals: 6,
    name: 'Solbank',
    symbol: 'SBNK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e368a073-ffbf-425e-02bf-fc1365f53300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solbank-token',
    },
  },
  {
    address: 'AEUT5uFm1D575FVCoQd5Yq891FJEqkncZUbBFoFcAhTV',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped USDT (9 decimals)',
    symbol: 'sUSDT-9',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e3cd6636-ba49-42ab-fa6c-1a2ad40d1c00/public',
    tags: ['old-registry'],
  },
  {
    address: 'JEFFSQ3s8T3wKsvp4tnRAsUBW7Cqgnf8ukBZC4C8XBm1',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped USD Coin (9 decimals)',
    symbol: 'sUSDC-9',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9a433efb-fd61-48cc-00e4-915c598f4000/public',
    tags: ['old-registry'],
  },
  {
    address: '2mqi8iLJf9WaVRHd7nhRkqvCafxfb3Us7wshaJR73ykS',
    chainId: 101,
    decimals: 5,
    name: 'Poor token',
    symbol: 'POOR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/aa7c74bb-2f40-4459-1623-4425c01c9600/public',
    tags: ['community'],
  },
  {
    address: '5sM9xxcBTM9rWza6nEgq2cShA87JjTBx1Cu82LjgmaEg',
    chainId: 101,
    decimals: 9,
    name: 'Bamboo',
    symbol: 'BMBO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1c9aecd4-83a8-4d1d-089e-7948dc3a5700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'bamboo-coin',
    },
  },
  {
    address: 'Dhg9XnzJWzSQqH2aAnhPTEJHGQAkALDfD98MA499A7pa',
    chainId: 101,
    decimals: 9,
    name: 'Shibalana',
    symbol: 'SHIBA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9beb0f33-1451-490f-bc2b-628f3db3f600/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'shibalana',
    },
  },
  {
    address: 'FEELeKVxHtsHHvu1ARySjETxnJMKbLC6wHCaMD68ipiR',
    chainId: 101,
    decimals: 9,
    name: 'FEEL',
    symbol: 'FEEL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/cee6733e-0b17-41fc-3ca2-dc6db8e8fc00/public',
    tags: ['community'],
  },
  {
    address: 'CYuXNHURE8cF3rQc1687DZnmsWx9ATNG3mZPFmryu22S',
    chainId: 101,
    decimals: 9,
    name: 'PEPESOLANA',
    symbol: 'PEPE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d2509ca6-6294-4faf-d00a-902f09119700/public',
    tags: ['community'],
  },
  {
    address: 'B5Fvzd2RL5ctrmFsvDafXiNGbBqbxapiryJo8JfoSEcA',
    chainId: 101,
    decimals: 5,
    name: 'KITTI TOKEN',
    symbol: 'KITTI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/df6e9d9a-5218-41f9-14b4-bd83de58a200/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'kitti',
    },
  },
  {
    address: '6kwTqmdQkJd8qRr9RjSnUX9XJ24RmJRSrU1rsragP97Y',
    chainId: 101,
    decimals: 6,
    name: 'SAIL',
    symbol: 'SAIL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/6f09de60-e79a-4ab8-ecb7-3f7462ef7800/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'sail',
    },
  },
  {
    address: 'CobcsUrt3p91FwvULYKorQejgsm5HoQdv5T8RUZ6PnLA',
    chainId: 101,
    decimals: 8,
    name: 'ConstitutionDAO (Portal)',
    symbol: 'PEOPLE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7f9c637c-c079-4adb-638e-f7e542731300/public',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'constitutiondao-wormhole',
    },
  },
  {
    address: 'DxRbkqB2cEqa4rnXJwq4z3GuksgpL2U27PWBw8QBcNv2',
    chainId: 101,
    decimals: 2,
    name: "Trippin' Ape Tribe Floor Index",
    symbol: 'TAPES',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/33931206-fce8-4364-1756-be441651f900/public',
    tags: ['community'],
  },
  {
    address: 'HonyeYAaTPgKUgQpayL914P6VAqbQZPrbkGMETZvW4iN',
    chainId: 101,
    decimals: 6,
    name: 'HONEY',
    symbol: '$HONEY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/273f9e08-5998-41d6-7fc4-bd0ed2b79900/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'honey-finance',
    },
  },
  {
    address: '3DHPqxdMXogNNnpqBMF8N4Zs4dn1WR31H7UjWq6FExwG',
    chainId: 101,
    decimals: 9,
    name: 'DAWG',
    symbol: 'DAWG',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/dd3fb74c-442c-4b9a-e04e-c51f2078ba00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dawg',
    },
  },
  {
    address: 'EAefyXw6E8sny1cX3LTH6RSvtzH6E5EFy1XsE2AiH1f3',
    chainId: 101,
    decimals: 6,
    name: 'Republic Credits',
    symbol: 'RPC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e2617fb2-8c45-4fc4-f31e-cfefed5da400/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'republic-credits',
    },
  },
  {
    address: '5K1JtWpdSksVKaL6R2DuLpCDAjzxK6sq2CpXaXDWHVLg',
    chainId: 101,
    decimals: 9,
    name: 'Yorkipoo',
    symbol: 'YORK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0e4995f0-e5a8-44ec-3e6b-64e29a39df00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'xALGoH1zUfRmpCriy94qbfoMXHtK6NDnMKzT4Xdvgms',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped ALGO',
    symbol: 'xALGO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/96ff476d-8eba-4c52-954d-e91726b69700/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'wrapped-algo',
    },
  },
  {
    address: '32gaR4rn9JyzoDVwMzZ5j3NgcHc5RQhMSJby55FFKnq3',
    chainId: 101,
    decimals: 9,
    name: 'RIBBET',
    symbol: 'RIBBET',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/29a44fa9-2fb1-4607-8410-1dc5a1807a00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'BzjsQpgKjxZedFawUV9GZMExhr7VbvsasQv12v2PVxSt',
    chainId: 101,
    decimals: 8,
    name: 'BAT',
    symbol: 'BATT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/58792753-cca5-4bf5-8b74-da7800713c00/public',
    tags: ['community'],
  },
  {
    address: '2jw1uFmc1hhfJH3EqGhaE2rfZMMC2YBpxkZcdUbPppMn',
    chainId: 101,
    decimals: 9,
    name: 'Vivaion Token',
    symbol: 'VIVAION',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5aecb15a-98c6-4590-268f-f1eea2a9c000/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '9zoqdwEBKWEi9G5Ze8BSkdmppxGgVv1Kw4LuigDiNr9m',
    chainId: 101,
    decimals: 9,
    name: 'Solster',
    symbol: 'STR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/bae3c59c-102a-47ee-a8a1-df9d1ef9e200/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solster',
    },
  },
  {
    address: '3AMtw8m3pZnrGLmGqQcJnHSQSaegtZGBMpon74EVZVQ3',
    chainId: 101,
    decimals: 6,
    name: 'Pink',
    symbol: 'PINK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/99fd9c56-b464-4280-0ddf-81099d3eae00/public',
    tags: ['community', 'token-2022'],
  },
  {
    address: 'FNFKRV3V8DtA3gVJN6UshMiLGYA8izxFwkNWmJbFjmRj',
    chainId: 101,
    decimals: 6,
    name: 'TabTrader Token',
    symbol: 'TTT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1e2ff35e-03c8-4ae9-76aa-b2272a8ef300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'tabtrader',
    },
  },
  {
    address: 'RLYv2ubRMDLcGG2UyvPmnPmkfuQTsMbg4Jtygc7dmnq',
    chainId: 101,
    decimals: 9,
    name: 'Rally (Legacy - deprecated)',
    symbol: 'sRLY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/868b2fac-fafc-4465-1c28-cbaf7115eb00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'GfJ3Vq2eSTYf1hJP6kKLE9RT6u7jF9gNszJhZwo5VPZp',
    chainId: 101,
    decimals: 9,
    name: 'Solpad Finance',
    symbol: 'SOLPAD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7ddb17d3-a159-4ffb-7400-07f711a4b800/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solpad-finance',
    },
  },
  {
    address: '4UuGQgkD3rSeoXatXRWwRfRd21G87d5LiCfkVzNNv1Tt',
    chainId: 101,
    decimals: 9,
    name: 'Solareum',
    symbol: 'XSB',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/365d01a6-9d9a-4b95-bca7-698cd5581300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solareum-wallet',
    },
  },
  {
    address: 'CN7qFa5iYkHz99PTctvT4xXUHnxwjQ5MHxCuTJtPN5uS',
    chainId: 101,
    decimals: 9,
    name: 'Boryoku Dragonz',
    symbol: 'BOKU',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4d08f0e6-1eb7-4e8b-03e0-4781dc1f3400/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'boku',
    },
  },
  {
    address: 'E7BGDtpNXUTqPNbZxKHiLowgLddiAeuKcByD7tSnfYWD',
    chainId: 101,
    decimals: 5,
    name: 'GEM',
    symbol: 'GEM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f0e8f9b8-bf2c-4f8a-e0a4-2f51550d9a00/public',
    tags: ['community', 'token-2022'],
  },
  {
    address: '4Te4KJgjtnZe4aE2zne8G4NPfrPjCwDmaiEx9rKnyDVZ',
    chainId: 101,
    decimals: 9,
    name: 'SolClout',
    symbol: 'SCT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/15720a80-b1a0-4f50-7e07-129fb44b8c00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solclout',
    },
  },
  {
    address: 'Ee1pKgTQmP5xjYQs76HmRM2c2YkqEdc9tk5mQbiGFigT',
    chainId: 101,
    decimals: 9,
    name: 'Mad Bears Club',
    symbol: 'MBC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e796be36-8a2c-41d0-aaa3-1707c006c900/public',
    tags: ['community'],
    extensions: {
      coingeckoId: 'mad-bears-club-2',
    },
  },
  {
    address: '4BzxVoBQzwKoqm1dQc78r42Yby3EzAeZmMiYFdCjeu5Z',
    chainId: 101,
    decimals: 9,
    name: 'Swole Doge',
    symbol: 'SWOLE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3f6a5d00-4fb2-4ce3-a48d-ea1532cebf00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa',
    chainId: 101,
    decimals: 6,
    name: 'NIRV',
    symbol: 'NIRV',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/bc2e227c-ad4c-4caa-89f6-ef6766f8ff00/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'nirvana-nirv',
    },
  },
  {
    address: '9EaLkQrbjmbbuZG9Wdpo8qfNUEjHATJFSycEmw6f1rGX',
    chainId: 101,
    decimals: 9,
    name: 'pSOL (Parrot SOL)',
    symbol: 'pSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1ee07c2e-7528-4621-f874-002831494100/public',
    tags: ['old-registry'],
  },
  {
    address: 'LPFiNAybMobY5oHfYVdy9jPozFBGKpPiEGoobK2xCe3',
    chainId: 101,
    decimals: 9,
    name: 'LP Finance DAO',
    symbol: 'LPFi',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/beffd602-c737-4ff5-da0c-6f437dd58900/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'lp-finance',
    },
  },
  {
    address: 'G7uYedVqFy97mzjygebnmmaMUVxWHFhNZotY6Zzsprvf',
    chainId: 101,
    decimals: 9,
    name: 'CoreStarter',
    symbol: 'CSTR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2180b0d9-d129-4172-acc5-9d2771db1900/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'corestarter',
    },
  },
  {
    address: 'FYfQ9uaRaYvRiaEGUmct45F9WKam3BYXArTrotnTNFXF',
    chainId: 101,
    decimals: 9,
    name: 'Sola Token',
    symbol: 'SOLA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5e00fdb6-dfdc-4b21-a564-b25f502f1400/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'sola-token',
    },
  },
  {
    address: 'HezGWsxSVMqEZy7HJf7TtXzQRLiDruYsheYWqoUVnWQo',
    chainId: 101,
    decimals: 9,
    name: 'HolyGrails',
    symbol: 'HOLY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/cacf8fbd-573e-475f-314c-897c21948b00/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'holygrails-io',
    },
  },
  {
    address: '8RYSc3rrS4X4bvBCtSJnhcpPpMaAJkXnVKZPzANxQHgz',
    chainId: 101,
    decimals: 9,
    name: 'SolYard Finance',
    symbol: 'YARD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/cc85b77d-acf7-4a58-45b0-9f3d799d4f00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solyard-finance',
    },
  },
  {
    address: '24a1k6wSDQUSwoRXJyvkr25kF5do8f6Ddff6A2fTc1pM',
    chainId: 101,
    decimals: 9,
    name: 'BEAR',
    symbol: '$BEAR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/110fe268-fdd9-4ad5-c473-e024d037ea00/public',
    tags: ['community'],
  },
  {
    address: 'YtfMZ4jg2ubdz4GasY86iuGjHdo5rCPJnFqgSf8gxAz',
    chainId: 101,
    decimals: 9,
    name: 'Charactbit',
    symbol: 'CHB',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/754cb3bd-8558-4857-0000-1f20bab31300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'charactbit',
    },
  },
  {
    address: 'AmgUMQeqW8H74trc8UkKjzZWtxBdpS496wh4GLy2mCpo',
    chainId: 101,
    decimals: 3,
    name: 'Mycelium McToken',
    symbol: 'TOKE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f1e4f8a6-e0ed-4d05-a197-508e529c1000/public',
    tags: ['community'],
  },
  {
    address: 'MLKmUCaj1dpBY881aFsrBwR9RUMoKic8SWT3u1q5Nkj',
    chainId: 101,
    decimals: 9,
    name: 'MILK',
    symbol: 'MILK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/dfa7cf00-eeb0-46ff-e92f-adee9e916300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'udder-chaos-milk',
    },
  },
  {
    address: 'sRLY3migNrkC1HLgqotpvi66qGkdNedqPZ9TJpAQhyh',
    chainId: 101,
    decimals: 9,
    name: 'sRLY (Rally Solana)',
    symbol: 'sRLY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f1dce0af-8bcf-4cef-a348-334dd444a700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'rally-solana',
    },
  },
  {
    address: 'MarcoPaG4dV4qit3ZPGPFm4qt4KKNBKvAsm2rPGNF72',
    chainId: 101,
    decimals: 6,
    name: 'Gobi',
    symbol: 'GOBI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/62bef04d-0a1d-4475-545d-3f2d25bc3000/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'gobi-labs',
    },
  },
  {
    address: '3K6rftdAaQYMPunrtNRHgnK2UAtjm2JwyT2oCiTDouYE',
    chainId: 101,
    decimals: 0,
    name: 'XCOPE',
    symbol: 'XCOPE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0187bf3f-77d7-4290-6478-b86f99bbe600/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7SZUnH7H9KptyJkUhJ5L4Kee5fFAbqVgCHvt7B6wg4Xc',
    chainId: 101,
    decimals: 5,
    name: 'TheSolanDAO',
    symbol: 'SDO',
    logoURI: 'https://thesolandao.com/logohero.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'thesolandao',
    },
  },
  {
    address: '5s4BYUXLuvs9ZcVDTxkTpKhThWFSpaU8GG55q2iySe2N',
    chainId: 101,
    decimals: 2,
    name: 'Enrex',
    symbol: 'ENRX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/13d1f98b-ff45-43a5-1d04-5f8ebac9f700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'enrex',
    },
  },
  {
    address: 'PhiLR4JDZB9z92rYT5xBXKCxmq4pGB1LYjtybii7aiS',
    chainId: 101,
    decimals: 5,
    name: 'Phil Overdrive | Youtube',
    symbol: 'POVT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/77e2c27b-2935-4e9e-c399-4cc6ef6dd700/public',
    tags: ['community'],
  },
  {
    address: '4jE4VuqFWZfmSXjTDD5KUoN2qkVu96nPTPj4mhs5PA1W',
    chainId: 101,
    decimals: 5,
    name: 'YoloNolo Coin',
    symbol: 'YOLO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/90ad9d47-51d7-492d-5475-e592befcf100/public',
    tags: ['community'],
  },
  {
    address: '51tMb3zBKDiQhNwGqpgwbavaGH54mk8fXFzxTc1xnasg',
    chainId: 101,
    decimals: 9,
    name: 'APEX',
    symbol: 'APEX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0ffd30fe-dc55-40ed-1b40-9ebe18a95a00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'apexit-finance',
    },
  },
  {
    address: 'C6qep3y7tCZUJYDXHiwuK46Gt6FsoxLi8qV1bTCRYaY1',
    chainId: 101,
    decimals: 6,
    name: 'Learning Star',
    symbol: 'LSTAR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b550e450-0c9d-4d27-a5cb-28907970a200/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'learning-star',
    },
  },
  {
    address: '2maDvG9nXGVstjdnsCZoSsNtjoda1SsZTLrHBVRgLR5F',
    chainId: 101,
    decimals: 9,
    name: 'CORE',
    symbol: 'CORE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d2385807-cf58-4d59-ca00-869b4242ad00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'FkCaFsprX7gySagFoQPHNbe9MRkjrvh21cokJo6C1e2T',
    chainId: 101,
    decimals: 6,
    name: 'JEFF',
    symbol: 'JEFF',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ec13e0bd-967d-4203-1b2e-78a0369ed300/public',
    tags: ['community', 'token-2022'],
  },
  {
    address: '7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn',
    chainId: 101,
    decimals: 9,
    name: 'JPOOL Solana Token',
    symbol: 'JSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/58e58487-47ad-4cef-235b-20a50a55ec00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'jpool',
    },
  },
  {
    address: 'DNhZkUaxHXYvpxZ7LNnHtss8sQgdAfd1ZYS1fB7LKWUZ',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped USDT (Allbridge from Polygon)',
    symbol: 'apUSDT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b1f170ea-d7df-47f6-f8d4-879bd51f5300/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'wrapped-usdt-allbridge-from-polygon',
    },
  },
  {
    address: '6Y7LbYB3tfGBG6CSkyssoxdtHb77AEMTRVXe8JUJRwZ7',
    chainId: 101,
    decimals: 6,
    name: 'DINO',
    symbol: 'DINO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/39a47090-6dd9-40ef-fe05-0c2c3c198100/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dino',
    },
  },
  {
    address: 'Ue4yjkPjA4QGis37eWbBsnqfzyK83BtY4AioDETp3Ab',
    chainId: 101,
    decimals: 6,
    name: 'WHEY',
    symbol: 'WHEY',
    logoURI:
      'https://cdn.discordapp.com/attachments/1052450866243850280/1076846325951365161/Coin_2.png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'whey-token',
    },
  },
  {
    address: '2uRFEWRBQLEKpLmF8mohFZGDcFQmrkQEEZmHQvMUBvY7',
    chainId: 101,
    decimals: 9,
    name: 'Solberg',
    symbol: 'SLB',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7a640e9a-5bcd-4688-c065-c1c60c426f00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solberg',
    },
  },
  {
    address: 'CCRJohp9bfQdhZCvCe7MzUQuXMJkKBi4XCjUq3A2YqN8',
    chainId: 101,
    decimals: 10,
    name: 'BOOP',
    symbol: 'BOOP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/429c443c-6217-484b-cb57-ab92cb81db00/public',
    tags: ['community'],
  },
  {
    address: 'Czt7Fc4dz6BpLh2vKiSYyotNK2uPPDhvbWrrLeD9QxhV',
    chainId: 101,
    decimals: 9,
    name: 'Nest Arcade',
    symbol: 'NESTA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c362500f-5fa4-4c03-e9c1-b756e500da00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'nest-arcade',
    },
  },
  {
    address: '5EbpXhW7t8ypBF3Q1X7odFaHjuh7XJfCohXR3VYAW32i',
    chainId: 101,
    decimals: 3,
    name: 'MetaMall',
    symbol: 'MALL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/dbf00cea-8eef-4dc0-14b0-d9feb9c6d900/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'metamall',
    },
  },
  {
    address: 'DUALa4FC2yREwZ59PHeu1un4wis36vHRv5hWVBmzykCJ',
    chainId: 101,
    decimals: 6,
    name: 'Dual DAO Token',
    symbol: 'DUAL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/183e6d86-45d5-419a-9daf-8ce8c6699500/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'dual-finance',
    },
  },
  {
    address: 'SBTCB6pWqeDo6zGi9WVRMLCsKsN6JiR1RMUqvLtgSRv',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped Bitcoin (Sollet) (8 decimals)',
    symbol: 'sBTC-8',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b5e9a41c-1d0f-4584-54b7-bbc21d41ad00/public',
    tags: ['old-registry'],
  },
  {
    address: '6naWDMGNWwqffJnnXFLBCLaYu1y5U9Rohe5wwJPHvf1p',
    chainId: 101,
    decimals: 3,
    name: 'SCRAP',
    symbol: 'SCRAP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/6c69a75c-2e58-43ed-3241-52ba0e9d1800/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'scrap',
    },
  },
  {
    address: '6F9XriABHfWhit6zmMUYAQBSy6XK5VF1cHXuW5LDpRtC',
    chainId: 101,
    decimals: 9,
    name: 'Run Token',
    symbol: 'RUN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3b9767f9-9070-4ef4-295e-76432d7e8f00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'run',
    },
  },
  {
    address: '33fsBLA8djQm82RpHmE3SuVrPGtZBWNYExsEUeKX1HXX',
    chainId: 101,
    decimals: 8,
    name: 'Binance USD (Portal from Ethereum)',
    symbol: 'BUSDet',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/8f19873b-e4f7-426c-e104-e8bc439aa400/public',
    tags: ['wormhole', 'old-registry'],
  },
  {
    address: 'EcK2evV2cDECVsmvY2FxU51eu3fp4w48zrZxuA92AAAN',
    chainId: 101,
    decimals: 9,
    name: 'Food Token',
    symbol: 'FOOD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/043b9aed-b18f-4fe9-acd8-c401984ae300/public',
    tags: ['community'],
  },
  {
    address: '56tNQ29XBrbovm5K5SThuQatjCy92w2wKUaUeQ8WCD9g',
    chainId: 101,
    decimals: 9,
    name: 'CRY Coin',
    symbol: 'CRYY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e955a6ab-eca2-4ca2-aa41-11f9711c1900/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cry-coin',
    },
  },
  {
    address: '8j3hXRK5rdoZ2vSpGLRmXtWmW6iYaRUw5xVk4Kzmc9Hp',
    chainId: 101,
    decimals: 9,
    name: 'SolChicks Shards',
    symbol: 'SHARDS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d12c8edc-a771-45c5-9e2f-ac097a66fc00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solchicks-shards',
    },
  },
  {
    address: 'svtMpL5eQzdmB3uqK9NXaQkq8prGZoKQFNVJghdWCkV',
    chainId: 101,
    decimals: 6,
    name: 'Solvent',
    symbol: 'SVT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/6fabdd29-d15e-4483-8331-dd1382b6d600/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CREAMpdDimXxj2zTCwP5wMEtba4NYaKCrTBEQTSKtqHe',
    chainId: 101,
    decimals: 9,
    name: 'Creamy',
    symbol: 'CREAMY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ea54365c-ed39-4ca9-7877-8924638ea200/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'creamy',
    },
  },
  {
    address: '8FU95xFJhUUkyyCLU13HSzDLs7oC4QZdXQHL6SCeab36',
    chainId: 101,
    decimals: 8,
    name: 'Uniswap (Portal)',
    symbol: 'UNI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9b892b28-3e5c-4c83-c139-3626454c8500/public',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'uniswap-wormhole',
    },
  },
  {
    address: 'HKfs24UEDQpHS5hUyKYkHd9q7GY5UQ679q2bokeL2whu',
    chainId: 101,
    decimals: 6,
    name: 'TinyBits',
    symbol: 'TINY',
    logoURI: 'https://tinycolony.io/tinycolonytoken.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'tiny-colony',
    },
  },
  {
    address: 'H7Qc9APCWWGDVxGD5fJHmLTmdEgT9GFatAKFNg6sHh8A',
    chainId: 101,
    decimals: 9,
    name: 'OOGI',
    symbol: 'OOGI',
    logoURI: 'https://oogi.com/icon.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'oogi',
    },
  },
  {
    address: '83LGLCm7QKpYZbX8q4W2kYWbtt8NJBwbVwEepzkVnJ9y',
    chainId: 101,
    decimals: 6,
    name: 'Synthetic USD',
    symbol: 'xUSD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3dd9ce4d-d590-4c48-9b3c-02287a9bad00/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'synthetic-usd',
    },
  },
  {
    address: 'WNZzxM1WqWFH8DpDZSqr6EoHKWXeMx9NLLd2R5RzGPA',
    chainId: 101,
    decimals: 4,
    name: 'Winerz',
    symbol: '$WNZ',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/750d7372-b69c-42a3-c4fc-e1e6e54bd100/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'winerz',
    },
  },
  {
    address: 'G7eETAaUzmsBPKhokZyfbaT4tD9igdZSmfQGEYWem8Sw',
    chainId: 101,
    decimals: 6,
    name: 'NftEyez Coin',
    symbol: 'EYE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/29c641c1-8cfc-4d83-f12a-d63638c8c200/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'nfteyez',
    },
  },
  {
    address: 'BULLa6g9e5UCuTXC5Z3Cf7s7CgvJhnJfY71DwipSmF8w',
    chainId: 101,
    decimals: 9,
    name: 'BULL',
    symbol: 'BULL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a59593d0-c623-447f-3713-ca0443c53100/public',
    tags: ['community'],
  },
  {
    address: 'FTT9rBBrYwcHam4qLvkzzzhrsihYMbZ3k6wJbdoahxAt',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped Wrapped FTT (Sollet) (9 decimals)',
    symbol: 'sFTT-9',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/8ddcf293-d6e9-4474-9084-46c935447100/public',
    tags: ['old-registry'],
  },
  {
    address: 'DjPt6xxMoZx1DyyWUHGs4mwqWWX48Fwf6ZJgqv2F9qwc',
    chainId: 101,
    decimals: 9,
    name: 'VOID Token',
    symbol: 'VOID',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9af4a091-b8e9-4871-6cb1-df2b3f033700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'void-games',
    },
  },
  {
    address: 'AVKnbqNQgXDY8kbnno9eSGfwpVz5idimBnDKiz1vbWAh',
    chainId: 101,
    decimals: 9,
    name: 'Particle',
    symbol: 'PART',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/733a3714-89b0-4d7f-4964-af6b8cb24b00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'particle-technology',
    },
  },
  {
    address: 'BRLsMczKuaR5w9vSubF4j8HwEGGprVAyyVgS4EX7DKEg',
    chainId: 101,
    decimals: 6,
    name: 'Cykura',
    symbol: 'CYS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9fef48d4-0f7b-4fa4-5f86-5366c24a5c00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cyclos',
    },
  },
  {
    address: 'DeoP2swMNa9d4SGcQkR82j4RYYeNhDjcTCwyzEhKwfAf',
    chainId: 101,
    decimals: 9,
    name: 'Deo',
    symbol: 'DEO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/79f59b0d-ca19-4f7c-8349-be9740eb5a00/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'player-2',
    },
  },
  {
    address: 'seedEDBqu63tJ7PFqvcbwvThrYUkQeqT6NLf81kLibs',
    chainId: 101,
    decimals: 9,
    name: 'Seeded Network',
    symbol: 'SEEDED',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a6068dbf-6f71-4bbe-5580-dbaa21277b00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'seeded-network',
    },
  },
  {
    address: 'FR87nWEUxVgerFGhZM8Y4AggKGLnaXswr1Pd8wZ4kZcp',
    chainId: 101,
    decimals: 8,
    name: 'Frax (Portal)',
    symbol: 'FRAX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4a1a6ec1-64bc-47ab-764c-b580541e5f00/public',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'frax',
    },
  },
  {
    address: '3uNAevHamuZKKQdtdLzmHNvqD8r14tXUUXx5PN48UbYC',
    chainId: 101,
    decimals: 9,
    name: 'Nasi Lemak',
    symbol: 'NLTK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/013958d6-02ff-4276-dcb7-01aa72ac2b00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '4h4LvS6NsVjZ87uBwrYyTeppTm1ii5PtRN9A6Ld2kZjw',
    chainId: 101,
    decimals: 6,
    name: 'StayFly',
    symbol: '$FLY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a417a66d-4f87-44c2-e181-d90264ad5200/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CmSryDa4mnDYUicq7qSESsTKAdgBP26jSYcg8zavVoJd',
    chainId: 101,
    decimals: 7,
    name: 'GM Solana',
    symbol: 'GM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/20e7500e-92f3-4de0-684e-c50cac221500/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CRkwd2QedqDi5u6W2w6jeAViAUd1pR4AXs2aKvh7GW7M',
    chainId: 101,
    decimals: 6,
    name: 'Solanium Ecosystem Index',
    symbol: 'SEI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/6c8e51ae-70f4-4117-a1cb-7faeebaaf700/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'B6aJ3TGfme3SMnLSouHXqWXjVFqYyqj7czzhzr8WJFAi',
    chainId: 101,
    decimals: 4,
    name: 'RAD',
    symbol: 'RAD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/6d6b3174-97fb-47f7-9e43-3aafe983c100/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'rad',
    },
  },
  {
    address: 'CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped Chainlink (Sollet)',
    symbol: 'soLINK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2bb314e7-6d46-4af7-df61-f2872e84a500/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '6frkvZf72wiz3uqRWhBqLftNU4PS6XXYCoNrW9P4CFdK',
    chainId: 101,
    decimals: 6,
    name: 'QUACK',
    symbol: 'QUACK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c216f3cf-c1f4-41bb-3e14-4980f9f07e00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '2TxM6S3ZozrBHZGHEPh9CtM74a9SVXbr7NQ7UxkRvQij',
    chainId: 101,
    decimals: 6,
    name: 'DINOEGG',
    symbol: 'DINOEGG',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/209e44d2-58c2-43d0-e97d-3268759eeb00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dinoegg',
    },
  },
  {
    address: 'BjTUmZjNUUAPKHVdTs8yZsCmecW5isSK4AbuFihXoUwa',
    chainId: 101,
    decimals: 9,
    name: 'Pussy',
    symbol: 'PUSSY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/bc14a10f-1c1b-40b1-e003-d43c700e4f00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Gz3u6eJaKEviYpPC5AwUziz891kNX76PNdsmJrnaNNY4',
    chainId: 101,
    decimals: 9,
    name: 'SouloCoin',
    symbol: 'SOULO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2af30ff7-0e69-4575-459a-461e71250e00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'soulocoin',
    },
  },
  {
    address: 'A12XggFFk3b5GCd6ZYxuQ55cQbxarHL4h7Jxs3GQcdC3',
    chainId: 101,
    decimals: 9,
    name: 'Froggo',
    symbol: 'Froggo',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/014876d4-05eb-4fac-4cd7-308672259500/public',
    tags: ['community'],
  },
  {
    address: '4F2yutcbkabE5MJoDvrDLa5U2re5HPABSCVKA7vqrKcH',
    chainId: 101,
    decimals: 2,
    name: 'REJECT Token',
    symbol: 'REJECT',
    logoURI: 'https://arweave.net/ijxRvhTwJRWTanYUI-j2DwPzOkpqRbB3y-qSuuvQqhQ',
    tags: ['community'],
  },
  {
    address: '7rmV64vLfbrbS5rTFvojYWzCVEn8dnJ9RfSRx3nD6C5E',
    chainId: 101,
    decimals: 4,
    name: 'Super Mario',
    symbol: 'MARIO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1c3a3bc6-e2f8-4ef5-a022-00f9ffbe8700/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CvB1ztJvpYQPvdPBePtRzjL4aQidjydtUz61NWgcgQtP',
    chainId: 101,
    decimals: 6,
    name: 'Epics Token',
    symbol: 'EPCT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/539b5383-7bfa-4215-89f8-f80134b1b100/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'epics-token',
    },
  },
  {
    address: 'ARg9wfeLN4qZTxgYTYeuGtGFMmYdk5zFhBuSnTfXXUvb',
    chainId: 101,
    decimals: 9,
    name: 'Project Paradise - CHI Token',
    symbol: 'CHI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0014be88-33e5-4b1e-0b04-670a900de700/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7VUUicqKYFVmewg1U4w4e9K4FoEYdTcYyxYCPhRNf5Qy',
    chainId: 101,
    decimals: 9,
    name: 'solana green',
    symbol: 'green',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d85db1ef-2a1a-4db6-b941-68ce117afd00/public',
    tags: ['community'],
  },
  {
    address: 'FgX1WD9WzMU3yLwXaFSarPfkgzjLb2DZCqmkx9ExpuvJ',
    chainId: 101,
    decimals: 6,
    name: 'NINJA',
    symbol: 'NINJA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d3e5a349-13f5-4e32-f7d3-726b1219e400/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'ninja-protocol',
    },
  },
  {
    address: 'HysWcbHiYY9888pHbaqhwLYZQeZrcQMXKQWRqS7zcPK5',
    chainId: 101,
    decimals: 8,
    name: 'Axie Infinity Shard (Portal from Ethereum)',
    symbol: 'AXSet',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/54b031ef-5736-4ef0-e945-7d31818baf00/public',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'axie-infinity-shard-wormhole',
    },
  },
  {
    address: 'FZgL5motNWEDEa24xgfSdBDfXkB9Ru9KxfEsey9S58bb',
    chainId: 101,
    decimals: 6,
    name: 'VentureCapital',
    symbol: 'VCC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a0633bfc-e273-4ed2-7e05-ceb9b20a4b00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '4TGxgCSJQx2GQk9oHZ8dC5m3JNXTYZHjXumKAW3vLnNx',
    chainId: 101,
    decimals: 9,
    name: 'Oxbull Sol',
    symbol: 'OXS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/6bd7ec40-d379-4328-2c67-047f586f0a00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'oxbull-solana',
    },
  },
  {
    address: 'GYCVdmDthkf3jSz5ns6fkzCmHub7FSZxjVCfbfGqkH7P',
    chainId: 101,
    decimals: 9,
    name: 'GameYoo Token',
    symbol: 'GYC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/db01dd6a-60cb-4a8f-9bd8-390409313700/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'AkhdZGVbJXPuQZ53u2LrimCjkRP6ZyxG1SoM85T98eE1',
    chainId: 101,
    decimals: 8,
    name: 'Starbots Token',
    symbol: 'BOT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4d20c1b5-54ea-4dc0-6895-30addcfa6200/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'starbots',
    },
  },
  {
    address: 'GS6E87SLTioRDG3uSVRwQmuKKMxDmWU7fktCTJ5xkEM8',
    chainId: 101,
    decimals: 9,
    name: 'Lost At Sea WAVE',
    symbol: 'WAVE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b731b590-88d4-4bbf-befb-0a128685b200/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7eJCLyW5KkvzdzkVXs1ukA1WfFjCcocXjVit64tYcown',
    chainId: 101,
    decimals: 9,
    name: 'SolanaLite',
    symbol: 'SLITE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1a04d70f-ac18-4e17-38ba-c1f4062eb300/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3byG6HEKhG5gUZ5PZU9zKkFaEHYPveGEtvs68LYR8R5N',
    chainId: 101,
    decimals: 4,
    name: 'OPOS Coin',
    symbol: 'OPOS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/125cdb3d-5bb9-4fee-5ffa-95b99dc1a400/public',
    tags: ['community'],
  },
  {
    address: 'ALKiRVrfLgzeAV2mCT7cJHKg3ZoPvsCRSV7VCRWnE8zQ',
    chainId: 101,
    decimals: 9,
    name: 'Maneki-neko',
    symbol: 'NEKI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/193e9148-cfb1-4683-5a40-9427e6986600/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'maneki-neko',
    },
  },
  {
    address: 'CJ5U6wPmjxFUyTJpUTS7Rt1UqhTmSVRMvmJ8WD4nndXW',
    chainId: 101,
    decimals: 9,
    name: 'Astrals GLXY',
    symbol: 'GLXY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d90db250-b6b3-469b-0d1c-e41ae31a4300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'astrals-glxy',
    },
  },
  {
    address: 'RoLLn5qBN4juQ1D2KFpJyAcC7Deo3cYotXi4qDooHLU',
    chainId: 101,
    decimals: 6,
    name: 'ROL',
    symbol: 'ROL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/97adbe41-21de-4e78-4853-4e971b448f00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'BhPXDQio8xtNC6k5Bg5fnUVL9kGN8uvRDNwW8MZBu8DL',
    chainId: 101,
    decimals: 4,
    name: 'Shibana',
    symbol: 'BANA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/cbc725d2-adc5-4379-fffe-89318d168e00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'shibana',
    },
  },
  {
    address: 'EwJN2GqUGXXzYmoAciwuABtorHczTA5LqbukKXV1viH7',
    chainId: 101,
    decimals: 6,
    name: 'UPS token (UPFI Network)',
    symbol: 'UPS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d825bc23-b084-4e77-c8e3-2496eb8e4200/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'upfi-network',
    },
  },
  {
    address: 'FsPncBfeDV3Uv9g6yyx1NnKidvUeCaAiT2NtBAPy17xg',
    chainId: 101,
    decimals: 6,
    name: 'Glitter Finance',
    symbol: 'XGLI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5540284b-eae4-4d64-4449-ff73abec9a00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'glitter-finance',
    },
  },
  {
    address: 'AMNoi4727tzy7adu4wnx3cN2VQbQdG71DqaPoSm7isJ3',
    chainId: 101,
    decimals: 9,
    name: 'Bitch Of Solana',
    symbol: 'BITCH',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3a551014-893e-48ee-9cb8-78f1f3cd4200/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CpFE715P5DnDoJj9FbCRcuyHHeTXNdRnvzNkHvq1o23U',
    chainId: 101,
    decimals: 8,
    name: 'DARC Token',
    symbol: 'DARC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/01d0e261-50cf-447c-bee8-448308e01c00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'darcmatter-coin',
    },
  },
  {
    address: '9ae76zqD3cgzR9gvf5Thc2NN3ACF7rqqnrLqxNzgcre6',
    chainId: 101,
    decimals: 9,
    name: 'WipeMyAss',
    symbol: 'WIPE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/233e88f8-bd00-4032-66c6-3cf15d0c3f00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'wipemyass',
    },
  },
  {
    address: 'BgqjQdnnjRtcELAgkYpfKAxWRqSReWercDdRTH6uLoer',
    chainId: 101,
    decimals: 6,
    name: 'ᗪOᖇK ᒪOᖇᗪ',
    symbol: 'DORKL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/20598f08-cf49-4b95-8620-5b0c8db2de00/public',
    tags: ['community'],
  },
  {
    address: 'ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo',
    chainId: 101,
    decimals: 6,
    name: 'ANA',
    symbol: 'ANA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/01c9058c-f38c-4791-f03a-13b8144f2100/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'nirvana-ana',
    },
  },
  {
    address: 'zwqe1Nd4eiWyCcqdo4FgCq7LYZHdSeGKKudv6RwiAEn',
    chainId: 101,
    decimals: 9,
    name: 'SOLPAY',
    symbol: 'SOLPAY',
    logoURI:
      'https://raw.githubusercontent.com/nguilbaud/token-list/main/assets/mainnet/zwqe1Nd4eiWyCcqdo4FgCq7LYZHdSeGKKudv6RwiAEn/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solpay-finance',
    },
  },
  {
    address: '9TE7ebz1dsFo1uQ2T4oYAKSm39Y6fWuHrd6Uk6XaiD16',
    chainId: 101,
    decimals: 9,
    name: 'Million Monke',
    symbol: 'MIMO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ff245951-442b-4290-09d6-fbdf8b1c2000/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'million-monke',
    },
  },
  {
    address: 'GkDg1ZfoFkroLAwLqtJNXhxCDg8gmKxHAGxSUZagYFfE',
    chainId: 101,
    decimals: 9,
    name: 'SOL100',
    symbol: 'SOL100',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2209e1c2-677e-4ab8-b25a-d7a0542d5400/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7SEsxCsiNiYqCpYG16wx4c9u2YGLZphnEFTAU9ENAizD',
    chainId: 101,
    decimals: 9,
    name: 'RING',
    symbol: 'RING',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/6437cb53-5876-4314-2b41-629635f08800/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'F6weWmuc1vwdL4u38Ro9jKXHEMjP9BoNdWMF5o5TvtJf',
    chainId: 101,
    decimals: 9,
    name: 'SOUL',
    symbol: 'SOUL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d5405865-f41d-4f8f-252c-1897e928cf00/public',
    tags: ['community'],
  },
  {
    address: 'FNMLmBPkhh7nBFyGHsdrmCuvgEf6ygpaVqFejimHEx9V',
    chainId: 101,
    decimals: 9,
    name: 'vBLSH',
    symbol: 'vBLSH',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/581c89fe-990d-4b68-f94b-37e62cb29e00/public',
    tags: ['community', 'solana-fm'],
  },
  {
    address: 'ATX1pK34GgPtKJLaXvGHQqu5DKkoJnmZBbwCxvmq3Y3h',
    chainId: 101,
    decimals: 6,
    name: 'Atellix',
    symbol: 'ATX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ff8cfa48-195a-4cd3-d561-567aee205b00/public',
    tags: ['community'],
  },
  {
    address: 'FeLoyXk8ac2AYVmDhAWEKNWWT63Z9TczeidYbpDvxF3T',
    chainId: 101,
    decimals: 8,
    name: 'Wrapped Capsule Coin (Wormhole v1)',
    symbol: 'wCAPS_v1',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/df1dd15f-fec4-4ad6-4125-d1c916153700/public',
    tags: ['old-registry'],
  },
  {
    address: 'DK6PWMyuZ4NMjsm9AWNCTMKrajQYrtfMjMJ3QauX2UH5',
    chainId: 101,
    decimals: 9,
    name: 'BITXBIT',
    symbol: 'BITXBIT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1e0a23c6-39c4-4c7c-4609-cb9723ecde00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CRYPTi2V87Tu6aLc9gSwXM1wSLc6rjZh3TGC4GDRCecq',
    chainId: 101,
    decimals: 9,
    name: 'Crypt',
    symbol: '$CRYPT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/8bcc8ba4-da09-4b76-cd66-cdd6a40bd400/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'secret-skellies-society',
    },
  },
  {
    address: '2cZv8HrgcWSvC6n1uEiS48cEQGb1d3fiowP2rpa4wBL9',
    chainId: 101,
    decimals: 2,
    name: 'ACF Game',
    symbol: 'ACF',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/88cd61f0-920a-4b5f-3adb-8ba47b531700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'alien-chicken-farm',
    },
  },
  {
    address: 'EzL6LLmv4vgfF7irkjG7ZxM92bTJ9f6nFopDXJTow7zj',
    chainId: 101,
    decimals: 9,
    name: 'Solana Condoms',
    symbol: 'CONDOMS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/06ead16c-a44b-406b-abbf-e46d4f475400/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '48AEwauAHsJibyt3WqjQ6EoHnFBcnyHASfo7vB2eCXPS',
    chainId: 101,
    decimals: 0,
    name: 'DragonWar',
    symbol: 'DRAW',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f25ffc0f-998a-44ad-1ea7-7a3247e4d700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dragon-war',
    },
  },
  {
    address: '5WWRMYPchxgh3VmYGPqoq2kfzCtBLxXB9vFH2TeFeR9m',
    chainId: 101,
    decimals: 4,
    name: 'TOYPOODLE COIN',
    symbol: 'TPC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/da308e2f-d9dc-400d-0f4e-a99fbc73bf00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'fujiCeCeP9AFDVCv27P5JRcKLoH7wfs2C9xmDECs24m',
    chainId: 101,
    decimals: 3,
    name: 'FUJI',
    symbol: 'FUJI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/10a3a0d2-03e4-46d4-3767-2536901efb00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Ceqwd4CSGBZnW8PHEexBQCAV2NDPkBoSqheiKR7gzELV',
    chainId: 101,
    decimals: 5,
    name: 'BABS',
    symbol: 'BABS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/49c82584-112e-45c2-44d4-632583dc1600/public',
    tags: ['community'],
  },
  {
    address: '66edZnAPEJSxnAK4SckuupssXpbu5doV57FUcghaqPsY',
    chainId: 101,
    decimals: 9,
    name: 'ProtoReality Games Token',
    symbol: 'PRGC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7545724f-b8af-4244-6fcd-831cf0af0d00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Qikhhhg9Ta3Jg7WoDFbSYuCAE14hx9hPvdz1zVp3zUw',
    chainId: 101,
    decimals: 9,
    name: 'tudaBirds Token',
    symbol: 'BURD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/28dba361-42e4-4706-fa31-207e23425d00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'tudabirds',
    },
  },
  {
    address: '76gDMbyohg6yHy6XJ2Rn9kxC22Q6v6uYpPXxkiwR5ota',
    chainId: 101,
    decimals: 6,
    name: 'MOAR GAINZ',
    symbol: 'MOAR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/78bdc0fc-e771-40a6-d52c-b43325405c00/public',
    tags: ['community', 'token-2022'],
  },
  {
    address: 'TKMKgSh3aADsmjr4yFWG52tkCQvmDxsQC1he1aBsi65',
    chainId: 101,
    decimals: 9,
    name: 'TOKAMAK ON SOLANA',
    symbol: 'TKMK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c6916674-90b8-47ce-c798-f50e00ec9c00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'FANTafPFBAt93BNJVpdu25pGPmca3RfwdsDsRrT3LX1r',
    chainId: 101,
    decimals: 6,
    name: 'Phantasia',
    symbol: 'FANT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0a2b5fd7-71c6-424a-c7c1-264222ea8300/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3e9pHUxa2nvAqso2Kr2KqJxYvZaz9qZLjoLaG77uQwB1',
    chainId: 101,
    decimals: 9,
    name: 'BAIL COIN',
    symbol: 'BAIL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/fd9f9611-0518-4e4f-c3f1-4ee93a92b100/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '8EDaoeBqpcVACwvkYXh1vAcU29HiBiNhqoF4pRsuUsZS',
    chainId: 101,
    decimals: 9,
    name: 'SunnySideUp staked SOL (sSOL)',
    symbol: 'sSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ae0801c3-6c4d-4d73-c920-22268cfd6700/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '98ouGzbMV2DnHfn3Uc7oahwvDP4Cf7Ls77JsBiARdjvn',
    chainId: 101,
    decimals: 6,
    name: 'DBank Coin',
    symbol: 'DBC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/63a30e2c-0a4c-4b50-4272-51279b9a7500/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7dgHoN8wBZCc5wbnQ2C47TDnBMAxG4Q5L3KjP67z8kNi',
    chainId: 101,
    decimals: 8,
    name: 'Decentraland (Portal)',
    symbol: 'MANA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/90469f4c-4865-4a95-d895-c982935a6400/public',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'decentraland-wormhole',
    },
  },
  {
    address: 'EzfnjRUKtc5vweE1GCLdHV4MkDQ3ebSpQXLobSKgQ9RB',
    chainId: 101,
    decimals: 6,
    name: 'Cricket Star Manager',
    symbol: 'CSM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0362c966-bd64-4318-015d-76b7330ced00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cricket-star-manager',
    },
  },
  {
    address: 'ASTRALvKjGK2xk2pamjMBU5dav5cEQa6zpKCP6FZ7BAJ',
    chainId: 101,
    decimals: 6,
    name: 'ASTRALIS',
    symbol: 'ASTRALIS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/6e11c991-34b4-43cd-2963-04f347017700/public',
    tags: ['community'],
  },
  {
    address: '4onzDs1X6ubktirorHB8iYbve3K4bBtkGpYehqzGm9So',
    chainId: 101,
    decimals: 9,
    name: 'BIJU',
    symbol: 'BIJU',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/161aba06-ecda-465c-67ec-3fe1dbb3af00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'SCYfrGCw8aDiqdgcpdGjV6jp4UVVQLuphxTDLNWu36f',
    chainId: 101,
    decimals: 9,
    name: 'Synchrony',
    symbol: 'SCY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b88ef1f8-2d29-411f-1d2b-093e34689300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'synchrony',
    },
  },
  {
    address: 'FriCEbw1V99GwrJRXPnSQ6su2TabHabNxiZ3VNsVFPPN',
    chainId: 101,
    decimals: 9,
    name: 'Soltato FRIES',
    symbol: 'FRIES',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/93642e16-efe9-4df9-5a35-297952404800/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'soltato-fries',
    },
  },
  {
    address: '76aYNHbDfHemxSS7vmh6eJGfjodK8m7srCxiYCrKxzY1',
    chainId: 101,
    decimals: 6,
    name: 'HRHC Token',
    symbol: 'ROLL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a5d65d1a-f60a-427a-0921-006c02764c00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'high-roller-hippo-clique',
    },
  },
  {
    address: 'sunSBR8hRLZy13HCHdrT3hjJZVRpkVfXF3QaaJYjxZ2',
    chainId: 101,
    decimals: 6,
    name: 'sunSBR',
    symbol: 'sunSBR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/99666423-535d-462b-a4bf-e289c3ae5a00/public',
    tags: ['community'],
  },
  {
    address: 'SL819j8K9FuFPL84UepVcFkEZqDUUvVzwDmJjCHySYj',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped Ethereum (Sollet) (8 decimals)',
    symbol: 'sETH-8',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a0401d64-95c0-48da-3f32-38114c27c300/public',
    tags: ['old-registry'],
  },
  {
    address: 'B8wCsjSv3TDZcaLuhPZNDvpk2vuBtRgpgmTuvoDAJZZ7',
    chainId: 101,
    decimals: 9,
    name: 'Chimp',
    symbol: 'CHIMP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/8bd20625-3fff-4887-2aeb-36ea15d5b800/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'AAXng5czWLNtTXHdWEn9Ef7kXMXEaraHj2JQKo7ZoLux',
    chainId: 101,
    decimals: 9,
    name: 'DarleyGo Essence',
    symbol: 'DGE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c20b6ca8-aac3-44e9-40eb-d79eaf3d1300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'darleygo-essence',
    },
  },
  {
    address: 'HCpyiCXvziKByTGoQMLUmooAWBkCLvZmzB9D6TyPdACR',
    chainId: 101,
    decimals: 8,
    name: 'QDOT',
    symbol: 'QDOT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d15b590d-f0c0-49a7-f55c-906624ae4200/public',
    tags: ['old-registry'],
  },
  {
    address: 'KNVfdSJyq1pRQk9AKKv1g5uyGuk6wpm4WG16Bjuwdma',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped Ether (Portal) (9 decimals)',
    symbol: 'swhETH-9',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/fcc6ea97-5368-45d1-7de8-406e994ebc00/public',
    tags: ['old-registry'],
  },
  {
    address: '5yw793FZPCaPcuUN4F61VJh2ehsFX87zvHbCA4oRebfn',
    chainId: 101,
    decimals: 2,
    name: 'RICE',
    symbol: 'RICE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f87c2434-4aa1-4f3d-f95e-929e8f976b00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '6D7nXHAhsRbwj8KFZR2agB6GEjMLg4BM7MAqZzRT8F1j',
    chainId: 101,
    decimals: 8,
    name: 'Gosu',
    symbol: 'GOSU',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2213b315-88cb-4810-aa43-7c78c22e1d00/public',
    tags: ['old-registry'],
  },
  {
    address: 'SuperbZyz7TsSdSoFAZ6RYHfAWe9NmjXBLVQpS8hqdx',
    chainId: 101,
    decimals: 6,
    name: 'SuperBonds Token',
    symbol: 'SB',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d837b0aa-1b52-4f6f-6d25-be06b49c6a00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'xnorPhAzWXUczCP3KjU5yDxmKKZi5cSbxytQ1LgE3kG',
    chainId: 101,
    decimals: 6,
    name: 'Serum (Portal from Ethereum)',
    symbol: 'SRMet',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/65642abc-9ba1-40d7-f453-632faa019d00/public',
    tags: ['wormhole', 'old-registry'],
  },
  {
    address: 'ELSnGFd5XnSdYFFSgYQp7n89FEbDqxN4npuRLW4PPPLv',
    chainId: 101,
    decimals: 8,
    name: 'HEX (Wormhole v1)',
    symbol: 'wHEX_v1',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c9d08620-54f0-4a0b-a2fb-2bce1b80c900/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '9iz45n44TQUPyoRymdZXEunqvZUksZyhzS6zQ7sLMadj',
    chainId: 101,
    decimals: 9,
    name: 'Positron',
    symbol: 'POT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9c576c21-6d7f-4e72-9a76-af5a41b19300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'positron-token',
    },
  },
  {
    address: '2e7yNwrmTgXp9ABUmcPXvFJTSrEVLj4YMyrb4GUM4Pdd',
    chainId: 101,
    decimals: 6,
    name: 'Matrix Solana Index',
    symbol: 'MSI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5fb2d9a4-4925-438f-2485-682a33faf700/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '33MJjPS6H7P2nwD648uiTiUu8v5fJ1zKyjnVqeWZ344F',
    chainId: 101,
    decimals: 9,
    name: 'everwave',
    symbol: 'WVE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/fdda4038-d3c3-44d9-6135-2575f6b67300/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'GePFQaZKHcWE5vpxHfviQtH5jgxokSs51Y5Q4zgBiMDs',
    chainId: 101,
    decimals: 9,
    name: 'Jungle DeFi',
    symbol: 'JFI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/cc625114-6ff5-429c-6969-c435cbb04500/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'jungle-defi',
    },
  },
  {
    address: '7a4cXVvVT7kF6hS5q5LDqtzWfHfys4a9PoK6pf87RKwf',
    chainId: 101,
    decimals: 9,
    name: 'Luna Yield',
    symbol: 'LUNY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3bfadc25-eb0e-4386-75c9-9e720e3f8100/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '2MtPZqwNKTNsBoFCwm4ZTWk3ySz4LSd82ucDGeTk7VNu',
    chainId: 101,
    decimals: 2,
    name: 'Portals Ivory Index',
    symbol: 'IVRY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7b7adff2-4b56-41bb-1fc8-adc2b9d5fa00/public',
    tags: ['old-registry'],
  },
  {
    address: '5L2YboFbHAUpBDDJjvDB5M6pu9CW2FRjyDB2asZyvjtE',
    chainId: 101,
    decimals: 8,
    name: 'Pixels.so Token',
    symbol: 'PIXL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5e76b56a-c440-4aa6-5465-9649a7ad9500/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '6Cw88QKMxS7LzAucXbYDcUEXPq1TvsojYPV9xWwJPt7r',
    chainId: 101,
    decimals: 8,
    name: 'Spore',
    symbol: 'SPORE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/8021b2ab-23a7-4efc-8e11-fee633965100/public',
    tags: ['community'],
  },
  {
    address: 'HkNokfCXG33eu5vCcS49mq3jZcKZeQSQCyta964YxxYg',
    chainId: 101,
    decimals: 0,
    name: 'Breezy Bunnies Carrot',
    symbol: 'CRRT',
    logoURI: 'https://breezybunnies.com/images/3-p-500.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Hmatmu1ktLbobSvim94mfpZmjL5iiyoM1zidtXJRAdLZ',
    chainId: 101,
    decimals: 7,
    name: 'Parasol',
    symbol: 'PSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f1e627bb-34a2-4729-3d2e-ff6e9b8e0900/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'parasol-finance',
    },
  },
  {
    address: 'FTT8cGNp3rfTC6c44uPTuEFLqmsVDhjd2BhH65v2uppr',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped Wrapped FTT (Sollet) (8 decimals)',
    symbol: 'ssoFTT-8',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/711cb050-936c-4472-e903-13756eb7bb00/public',
    tags: ['old-registry'],
  },
  {
    address: '7GNyprqrpvJHNwzWSj4KVkqw9cKyV5aR3ehM2HeE5pw',
    chainId: 101,
    decimals: 0,
    name: 'Mikuko Token',
    symbol: 'Miku',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ff32ebfe-9b9a-4a55-d288-b7ee7c838400/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'unknXbA1bDg39nuBqVgMNZ5qSZa8pw5HditgkPe5eFA',
    chainId: 101,
    decimals: 9,
    name: 'UNKN',
    symbol: 'UNKN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f7028664-9735-4d3b-4078-592e0a9c0400/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'AymKzSDznoLT7Vhsb4wSRnCj1gjcG3zkgYFY8fxsHHer',
    chainId: 101,
    decimals: 8,
    name: 'The Ticket Finance',
    symbol: 'TICKET',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/631935d5-03bd-4f9f-38e5-d4df4fb8f000/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'KRTapyUMe5fW92KZkYoXToFtc6Cn7UG6seaKz646oGu',
    chainId: 101,
    decimals: 9,
    name: 'OOINK',
    symbol: 'OOINK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/bf61ca77-5aae-483b-b3c0-9aacf8015f00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'HNm1VgnyhaMZZF71RjNFNiYLN76zyZTDcBZPjYveWFXX',
    chainId: 101,
    decimals: 6,
    name: 'Chimp Frens',
    symbol: 'FRENS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f31bd39e-7017-4fd0-e534-6882ee401b00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'gmdu3snwW28DmmxCseChp9owWLUhamH9eS3hWfHG8Vg',
    chainId: 101,
    decimals: 9,
    name: 'We Say gm',
    symbol: 'GMSOL',
    logoURI: 'https://github.com/icnivadmai/gm-logo/blob/master/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CTYiHf58UGShfHtpkTwx7vjPDA779dd6iVaeD281fEVx',
    chainId: 101,
    decimals: 9,
    name: 'Hunter Diamond',
    symbol: 'HUNT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5b7d44ed-5233-4620-d36a-9c77b1faeb00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'BvEj2MNMPsUrD4vSk7NHs4TtRcCcJd75Wx5HvVbY4rbK',
    chainId: 101,
    decimals: 9,
    name: 'Decimus Dynamics Token',
    symbol: 'DEDS',
    logoURI:
      'https://github.com/DecimusDynamics/assets/blob/main/decimus-icon-1x1-black.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'BKydRTNdaMJ8B4zPva3YhwUQcpvAsyZaGJnKA6F44fX7',
    chainId: 101,
    decimals: 9,
    name: 'FakeBiz',
    symbol: 'FBZ',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9f716b53-ae9d-4b64-fd75-3f48b6609f00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3LDAW7enNUZ4DjE1jCi1cDpXvXLrJ1rPiECPbcHpMgG2',
    chainId: 101,
    decimals: 2,
    name: 'FEED on ACF Game',
    symbol: 'FEED',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a1058d6b-3074-44d4-884a-7d426e921a00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'H5euuuZXAuFak2NVTMu53fckdkHFWuJzXXb3TfKTrLWK',
    chainId: 101,
    decimals: 9,
    name: 'DevCoin',
    symbol: 'DEV',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0c0476f9-f2f2-4606-fb4a-cb97e7f0b000/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '9mXZ54YnJJRmUN2MaMEtWCfFyoncP4ZhKz7U9DZ4JY2X',
    chainId: 101,
    decimals: 4,
    name: 'SPACEGOLD',
    symbol: 'SPACEGOLD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ae5e46c4-e56e-43e4-5bb9-eafd81015500/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Hg35Vd8K3BS2pLB3xwC2WqQV8pmpCm3oNRGYP1PEpmCM',
    chainId: 101,
    decimals: 9,
    name: 'Eversol staked SOL',
    symbol: 'eSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1308a5ed-4fd1-44ed-d636-fb93dcfd2100/public',
    tags: ['old-registry'],
  },
  {
    address: 'EZF2sPJRe26e8iyXaCrmEefrGVBkqqNGv9UPGG9EnTQz',
    chainId: 101,
    decimals: 9,
    name: 'FUMoney',
    symbol: 'FUM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d67db96d-fa79-4252-fdb8-28fa84c5f800/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'fumoney',
    },
  },
  {
    address: 'BUD1144GGYwmMRFs4Whjfkom5UHqC9a8dZHPVvR2vfPx',
    chainId: 101,
    decimals: 6,
    name: 'BunnyDucky Token',
    symbol: 'BUD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d186ab84-0de5-4738-da67-d5669549a200/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'PRAxfbouRoJ9yZqhyejEAH6RvjJ86Y82vfiZTBSM3xG',
    chainId: 101,
    decimals: 6,
    name: 'prANA',
    symbol: 'PRANA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f0a680dd-67b5-4d41-806f-5b60af1a7800/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'nirvana-prana',
    },
  },
  {
    address: 'rvxo8t7TKeSmAgpdqK1CY9ddZi3NyowRCh1m2d7KrUc',
    chainId: 101,
    decimals: 9,
    name: 'SMRAI',
    symbol: 'SMRAI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/574f211b-0b20-4500-8f80-866ef3918900/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'GHAhTrgtYW7jRkojQQWPGkMbmG5jGK25QBu6FSj5tvZ5',
    chainId: 101,
    decimals: 9,
    name: 'Glitter',
    symbol: 'GLTR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9aeb740d-44f0-442b-6541-6d77535eea00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CejQBkdRPN8Jyod2jVUYTfHwU9hPHvM3rD9prvQiffDU',
    chainId: 101,
    decimals: 9,
    name: 'TAP Coin',
    symbol: 'TAP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0102d53d-ee96-4d2f-09f3-0ab7b2f99f00/public',
    tags: ['community'],
  },
  {
    address: '2zjmVX4KDWtNWQyJhbNXgpMmsAoXwftB7sGV4qvV18xa',
    chainId: 101,
    decimals: 9,
    name: 'Shear Ego Coin',
    symbol: 'EGO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/82fe0591-c46e-4870-c9b7-4334a0f75300/public',
    tags: ['old-registry'],
  },
  {
    address: 'ANqY8h3sRSwkC29FvGJenAh7VGRABVVx7Ls6Mq4BuGT',
    chainId: 101,
    decimals: 9,
    name: 'ZIG Coin',
    symbol: 'ZIG',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/99bf85c9-8ca6-4991-a7c4-0ad21f26ab00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '8FktFPUvi73Ywf7ZivsbuQFyQCqZUwvqSQ51hNvRhR26',
    chainId: 101,
    decimals: 8,
    name: 'Milk',
    symbol: '$MILK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ccfd58a9-6751-4bff-44df-21b7614f8900/public',
    tags: ['community'],
  },
  {
    address: 'HDEqEpFgTrBawzDgTG1eyH8Go9PX84LCEC8Qjt8T4jFN',
    chainId: 101,
    decimals: 2,
    name: 'Skullbot Biker Gang Floor Index',
    symbol: 'BOTS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7b7adff2-4b56-41bb-1fc8-adc2b9d5fa00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'HtbhBYdcfXbbD2JiH6jtsTt2m2FXjn7h4k6iXfz98k5W',
    chainId: 101,
    decimals: 9,
    name: 'DeadKnight Token',
    symbol: 'DKM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f30c4886-c247-48e0-ad87-1e8cd50a1300/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '9999j2A8sXUtHtDoQdk528oVzhaKBsXyRGZ67FKGoi7H',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped Bitcoin (Sollet) (9 decimals)',
    symbol: 'sBTC-9',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/35695b61-4708-4b50-28aa-c3f2ca955500/public',
    tags: ['old-registry'],
  },
  {
    address: '3vHSsV6mgvpa1JVuuDZVB72vYbeUNzW4mBxiBftwzHEA',
    chainId: 101,
    decimals: 9,
    name: 'Final Frontier',
    symbol: 'FRNT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/daf112ef-928a-4386-1273-8dccdb494700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'final-frontier',
    },
  },
  {
    address: '9kt93AW5QMjFL6ZxomnSq3FbWiU5ibNeTSgBz9UDFSB6',
    chainId: 101,
    decimals: 6,
    name: 'GOD',
    symbol: 'GOD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1bc06454-73b9-4865-72e4-fd8230a8c900/public',
    tags: ['old-registry'],
  },
  {
    address: 'EctmRn2jMAdTDvQdG7mxadyiTvhGZiGYNrt9PWe6zioG',
    chainId: 101,
    decimals: 9,
    name: 'Santaclaus',
    symbol: 'SANTA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/657d6f7a-ffb2-472f-2efc-20b437492600/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'GV6n9Uow3XzMWSs8vwTCML8SvMA6ozbidaEfdPoSoraQ',
    chainId: 101,
    decimals: 9,
    name: 'Space Vizsla',
    symbol: 'SVIZ',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/8dc36929-05ee-40ec-1f0e-0acad10daa00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CRMaDAzKCWYbhUfsKYA8448vaA1qUzCETd7gNBDzQ1ks',
    chainId: 101,
    decimals: 9,
    name: 'Crema',
    symbol: 'CRM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f8c2cb9f-f69f-47f3-a1ee-0bc42cd6ab00/public',
    tags: ['community'],
  },
  {
    address: 'FanJWA4yEVUJj1r83tR7XybxmDGF6bNH8M81ag9aeUbF',
    chainId: 101,
    decimals: 9,
    name: 'BMT',
    symbol: 'BMT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b43c1196-4a59-4155-f269-96ff7b350400/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7xd71KP4HwQ4sM936xL8JQZCwE4amUko1AdCCf6Znjrt',
    chainId: 101,
    decimals: 9,
    name: 'SOL Frens',
    symbol: 'FREN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ca127569-9935-4187-f078-e9573bbc7500/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'F14Cp89oAXMrNnaC4mKMNKHPWw2p2R4DRFAZEdJhUBkD',
    chainId: 101,
    decimals: 6,
    name: 'MOONBURN',
    symbol: 'MOONBURN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d7c4bacd-2ac6-48f4-ff6b-668f458c8800/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'DSXWF79VQ3RzFBB67WeNfCzfzAQq5X6m97zi85bq1TRx',
    chainId: 101,
    decimals: 2,
    name: 'Catalina Whale Mixer Floor Index',
    symbol: 'WHALES',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f54aa1c4-dad8-4b6c-3c31-77841d729400/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'catalina-whales-index',
    },
  },
  {
    address: '6nuaX3ogrr2CaoAPjtaKHAoBNWok32BMcRozuf32s2QF',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped BUSD (Allbridge from BSC)',
    symbol: 'abBUSD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5a1c1b2b-c539-4dcf-1dc3-e1fd700a1f00/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'wrapped-busd-allbridge-from-bsc',
    },
  },
  {
    address: 'DHVUoxNqv3D7EgktBxUsxFF2Wx83hVDmD2wBBpUaw3jn',
    chainId: 101,
    decimals: 9,
    name: 'Crypto Health Plus',
    symbol: 'CHP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c37dfd87-1390-4bb5-2d89-621b1c2cea00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'BygDd5LURoqztD3xETc99WCxLUbTi6WYSht9XiBgZ4HW',
    chainId: 101,
    decimals: 9,
    name: 'Whalemap',
    symbol: 'WMP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ffee20bd-ae34-4a80-fa0d-fa34eeffa300/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped ALEPH (Sollet)',
    symbol: 'soALEPH',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/323a3be4-6ae4-47f3-031a-ab20b066c900/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'UST8SCn7jrqsq51odVLqcmvnC658HkqrKrPL3w2hHQ7',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped UST (Portal) (8 decimals)',
    symbol: 'sUST-8',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d650df59-ba7e-4a2f-f91e-6dc437592900/public',
    tags: ['old-registry'],
  },
  {
    address: '3zE4Qmh9hrC4inHynT3aSRzHcWhnxPCHLeN9WWqvoRVz',
    chainId: 101,
    decimals: 9,
    name: 'Race Raiders Rewards',
    symbol: 'RRR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1c5cf2da-1124-4174-1cdb-449650c0fa00/public',
    tags: ['community'],
  },
  {
    address: 'E6oCGvmSYW7qhy7oeDfiNZLX6hEmPCVxBC8AknwAj82B',
    chainId: 101,
    decimals: 2,
    name: 'Playground Art Collection',
    symbol: 'PLAYA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7573553f-a454-441d-d038-467b3b98c100/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CgbJxXyaHeU8VsquBpySuFXA94b6LWXxioZ28wRr8fs9',
    chainId: 101,
    decimals: 6,
    name: 'Viral Inu',
    symbol: 'VINU',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7c64a260-0007-46cc-4b47-f0bae34f3b00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'viral-inu',
    },
  },
  {
    address: 'Aogv6j1wWiBAZcqRNN1Y89eozda2ke6rkc4CYy7c4iCi',
    chainId: 101,
    decimals: 9,
    name: 'Jungle',
    symbol: 'JUNGLE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4588628e-4e1d-4a0f-52ac-85980bea8300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'jungle',
    },
  },
  {
    address: '9m8E1yLHaG1B2TFSNeWahsitQh5yQRnrbyw756HFAcEa',
    chainId: 101,
    decimals: 9,
    name: 'Random Blockasset Legends',
    symbol: 'rLGND',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/26e240b0-e138-409a-202c-524607631400/public',
    tags: ['old-registry'],
  },
  {
    address: '7vVRYg24HvVmgxV4neAog66GjW6aCUwnArvjDn6bgrX5',
    chainId: 101,
    decimals: 9,
    name: 'NECTAR2 Token',
    symbol: 'NECTAR2',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d7908cb7-7f2f-4f54-cae0-1239b1037300/public',
    tags: ['old-registry'],
  },
  {
    address: '51pPuhLArFyrUTiLwFtoySBnELppjNdG13b86zPVBY9Z',
    chainId: 101,
    decimals: 9,
    name: 'CIKKA',
    symbol: 'CKKA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/098ac087-c117-4a77-0499-4eaebe7b9100/public',
    tags: ['community'],
  },
  {
    address: 'ELXRYrf8wd4DcyXDU9QPnMdD8jn2twg7o7qEtf5z2GBW',
    chainId: 101,
    decimals: 9,
    name: 'ELIXIR',
    symbol: 'ELIXIR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f09d88ed-b91e-4030-02bf-5f486475d600/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'FwEHs3kJEdMa2qZHv7SgzCiFXUQPEycEXksfBkwmS8gj',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDT (Allbridge from Avalanche)',
    symbol: 'aaUSDT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3688443b-0b19-4897-73ca-2b5e379ec300/public',
    tags: ['old-registry'],
  },
  {
    address: 'HuMShjViKhcfihmHkgvctcFAyeyxAk8hK5K58zWpuRKf',
    chainId: 101,
    decimals: 9,
    name: 'DREAM TOKEN',
    symbol: 'DREAM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2e4ef1bc-ee5c-43e6-78c2-76e60f12a200/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CgnTSoL3DgY9SFHxcLj6CgCgKKoTBr6tp4CPAEWy25DE',
    chainId: 101,
    decimals: 9,
    name: 'Cogent SOL',
    symbol: 'cgntSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/381a655f-cd3b-48d2-e7b0-ca65f7efbd00/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'cogent-sol',
    },
  },
  {
    address: 'EHaEBhYHWA7HSphorXXosysJem6qF4agccoqDqQKCUge',
    chainId: 101,
    decimals: 8,
    name: 'WEYU',
    symbol: 'WEYU',
    logoURI: 'https://weyu.io/img/WEYU.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'weyu',
    },
  },
  {
    address: '7V5AaqHTwiySegaAmNPLekQfTAoK4WvEVgfi2R8V44tB',
    chainId: 101,
    decimals: 9,
    name: 'Random FRAKTs',
    symbol: 'rFRAKT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/6069a179-c171-4132-637c-e5d76a579600/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'NEo3D6MXRXf2iAfaqvZYqSmFkfutLvNjm86xmfGWNh5',
    chainId: 101,
    decimals: 9,
    name: 'NEO3D TOKEN',
    symbol: 'NEO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/cd3f7362-a0df-44f7-c947-6b929f49fa00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '2Ry7AGS1w488LdSxhz2XvSrU1EVUzUGJo27DBP57couh',
    chainId: 101,
    decimals: 7,
    name: 'BEN',
    symbol: '$BEN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3b30d106-7332-4c15-0b81-896d723c8a00/public',
    tags: ['community'],
  },
  {
    address: 'CCKDRAd4Xwjoovtf2s1duu3d4TPTmFRyh1hfrb3ZUGR2',
    chainId: 101,
    decimals: 9,
    name: 'Tiddy Juice Coin',
    symbol: 'MILK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/54255c57-72d2-4ea0-4015-3060e3059200/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7sWMHQaJJPn1rkeizq41iPiW5gG7Ry7PXYAVHaUwY4qu',
    chainId: 101,
    decimals: 9,
    name: 'EDO',
    symbol: 'EDO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5f84f110-d459-4df3-8f79-81de1fc1c100/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3JSf5tPeuscJGtaCp5giEiDhv51gQ4v3zWg8DGgyLfAB',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped YFI (Sollet)',
    symbol: 'soYFI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/22cad7f1-f41b-40bd-197e-eebcda0e4900/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'EwxNF8g9UfmsJVcZFTpL9Hx5MCkoQFoJi6XNWzKf1j8e',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped CUSD (Allbridge from Celo)',
    symbol: 'acUSD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c1d2d448-6673-40fa-27bc-d47c530e2c00/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'wrapped-cusd-allbridge-from-celo',
    },
  },
  {
    address: '75XracgnqjPeuexHKWQU3bBcXMZG6XLDF867tKB1T9e6',
    chainId: 101,
    decimals: 9,
    name: 'The Islanders',
    symbol: 'ISL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e43e93fc-8a51-406f-ccfd-cd35d01fc700/public',
    tags: ['old-registry'],
  },
  {
    address: 'T8KdT8hDzNhbGx5sjpEUxepnbDB1TZoCa7vtC5JjsMw',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped USDT (8 decimals)',
    symbol: 'sUSDT-8',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/12b21709-deb5-4073-a466-82d90e374600/public',
    tags: ['old-registry'],
  },
  {
    address: '4NGNdLiQ1KG8GgqZimKku4WCLdXbNw6UQJvqax3fE6CJ',
    chainId: 101,
    decimals: 2,
    name: 'fWAVE999',
    symbol: 'WAV',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9ce2799a-2688-4d4d-2bf7-1b746922a100/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'ASoLXbfe7cd6igh5yiEsU8M7FW64QRxPKkxk7sjAfond',
    chainId: 101,
    decimals: 9,
    name: 'aSOL Aggregate Solana Stake Pool',
    symbol: 'aSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7b7adff2-4b56-41bb-1fc8-adc2b9d5fa00/public',
    tags: ['old-registry'],
  },
  {
    address: 'TKDrcm3n4mfXFfPKZoLp5soRSdFQSmyWLdomdKL3ktU',
    chainId: 101,
    decimals: 0,
    name: 'Tenkai Token',
    symbol: 'TENKAI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/344ab0fb-b78f-4dc0-3c0d-b6fb175be700/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'aYZPYgohjK6LYM8o1v6pnr3ZinhuRzSHd6TRDVDUBkK',
    chainId: 101,
    decimals: 8,
    name: 'BitLegacy Token',
    symbol: 'BTL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/68c251bf-8059-4d41-8b9f-c4850fec3200/public',
    tags: ['old-registry'],
  },
  {
    address: 'D8TFo4FsDF9CnejkezEZtwdhdmwaiNgLRDAQUTwWQuBU',
    chainId: 101,
    decimals: 6,
    name: 'TEST',
    symbol: '$TEST',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c29d4f40-3957-48cc-9231-8dc2c5d34d00/public',
    tags: ['community'],
  },
  {
    address: 'HbrmyoumgcK6sDFBi6EZQDi4i4ZgoN16eRB2JseKc7Hi',
    chainId: 101,
    decimals: 9,
    name: 'Crystal',
    symbol: 'CRY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/6733c743-f389-4c9e-199d-7ff0a85ddf00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '4JWktLr39ZbyutVnym7wKxV1RDoJz7ifDYxMUHDmAbPB',
    chainId: 101,
    decimals: 8,
    name: 'DARK COIN',
    symbol: 'DMV',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/fd1054b3-c860-456d-3548-3d8e47ef9900/public',
    tags: ['old-registry'],
  },
  {
    address: 'EBQ6gWBQNxA2zB4twR5GWP6CkeAhqZZZeDgeP7BTtdM3',
    chainId: 101,
    decimals: 2,
    name: 'PerpeTraders',
    symbol: 'PERP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e4ff8e83-d63b-40d3-bfa5-984462ab4a00/public',
    tags: ['old-registry'],
  },
  {
    address: 'GtLBsmS6Z4FC9gmnCFS2ZzCKmb9vYL3kELnjVmxHurnh',
    chainId: 101,
    decimals: 2,
    name: 'ENG Token',
    symbol: 'ENG',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5aa854c3-5b5d-404e-6b6a-e525cb48cc00/public',
    tags: ['community'],
  },
  {
    address: 'Bqd2ujCTEzpKzfjb1FHL7FKrdM6n1rZSnRecJK57EoKz',
    chainId: 101,
    decimals: 9,
    name: 'HottoShotto',
    symbol: 'HOTTO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1b4511c9-856e-4755-39a8-facb50a16d00/public',
    tags: ['old-registry'],
  },
  {
    address: '8HfNu2EfwFQz2srSNDvPsjaWV3G65ZWP3pDC67mcNv6J',
    chainId: 101,
    decimals: 9,
    name: 'Neural Octopus',
    symbol: 'NOCT',
    logoURI:
      'https://raw.githubusercontent.com/Neural-Octopus-Token/noct-metadata/main/logo.png',
    tags: ['community'],
  },
  {
    address: 'CRSzWoeyfR8sJxB2d6LLEre92Uc59TCPX2gZidp4t3eE',
    chainId: 101,
    decimals: 9,
    name: 'Agave Zwolf',
    symbol: 'AGVZ',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d721f048-c1fe-4293-2d44-b2f91c968600/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3uejHm24sWmniGA5m4j4S1DVuGqzYBR5DJpevND4mivq',
    chainId: 101,
    decimals: 9,
    name: 'IP3',
    symbol: 'IP3',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/48bbb328-9b67-48ca-10b6-d379b3365a00/public',
    tags: ['community', 'solana-fm'],
  },
  {
    address: '4iGtA8VSTFNFjXdQZiSkMkM2sS4x21tC9y5DAU9WxoQd',
    chainId: 101,
    decimals: 5,
    name: 'Quantity build',
    symbol: 'QB',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ef3cd0c4-5b4f-47fb-30b1-d5eb4ef04100/public',
    tags: ['community'],
  },
  {
    address: 'FyNuYGBBry5LAtPEkh8Y73izjTUNT2td2J3sGCK7E9Ju',
    chainId: 101,
    decimals: 9,
    name: 'VIBEZ',
    symbol: 'VIBEZ',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9eec8073-1b34-4e9d-36bf-bbcf48bcf800/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '5YtGSyQ7YxFgDc9oj4SpZGTjoS5p5Fubkg8sMauQqXoS',
    chainId: 101,
    decimals: 9,
    name: 'PULP',
    symbol: 'PULP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/95fd4d11-2b9b-4a56-01d7-6b38eca63c00/public',
    tags: ['old-registry'],
  },
  {
    address: '8yQuj5v4s72UqZi3sYZL5rAD4NPV4ueUwBKzChBDWMVf',
    chainId: 101,
    decimals: 9,
    name: 'Maars',
    symbol: 'MRX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e915a088-0806-498e-9ce9-e4797df22400/public',
    tags: ['old-registry'],
  },
  {
    address: '8TQdiAzdZZEtkWUR8Zj1tqDYGPv9TR1XjPqrew39Vq9V',
    chainId: 101,
    decimals: 7,
    name: 'HypeProxy',
    symbol: 'HYPE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ccba9c7b-98e3-419c-b052-9f2ed5617a00/public',
    tags: ['old-registry'],
  },
  {
    address: '6ybxMQpMgQhtsTLhvHZqk8uqao7kvoexY6e8JmCTqAB1',
    chainId: 101,
    decimals: 4,
    name: 'QUEST',
    symbol: 'QUEST',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/dad44fde-dd72-4b54-887a-e53b14651900/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'hone3CJTYjczb5nJh45KCNMkjrKMt7SCnHkWGWsVfVu',
    chainId: 101,
    decimals: 0,
    name: 'Yokoito Crew Hone',
    symbol: 'HONE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0c4097a9-d227-4e0e-70b5-6e02c9ed2f00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'FDKBUXKxCdNQnDrqP7DLe8Kri3hzFRxcXyoskoPa74rk',
    chainId: 101,
    decimals: 9,
    name: 'YETI',
    symbol: '$YETI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ee0e2505-8096-411c-518e-bce92a9cd900/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'LiLyT885cG9xZKYQk9x6VWMzmcui4ueV9J1uzPDDajY',
    chainId: 101,
    decimals: 6,
    name: 'Solily Protocol Coin',
    symbol: 'LILY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/48aa9c42-e7ab-4f34-be0d-98769ed19600/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '9MjAmgHXbu5drkNa9XpzfozgsM5Dcq6bSnKZzdNrwscC',
    chainId: 101,
    decimals: 9,
    name: 'Force',
    symbol: '$FORCE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4a78ab50-215e-443b-bf8c-6091a38e1800/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3in9a9yHtdjDFRjDyGTTpGUwJpT9zZBcyjQ8J7nqqNtq',
    chainId: 101,
    decimals: 9,
    name: 'Doggy Style',
    symbol: 'DoggyStyle',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/81d956af-6d69-4346-3ef3-feb755f92a00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3Ztt53vwGhQGoEp3n1RjSu4CFnGRfqzwo6L8KN8gmXfd',
    chainId: 101,
    decimals: 9,
    name: 'METASEER',
    symbol: 'METAS',
    logoURI: 'https://metaseer.io/img/home-one/logo256.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7JnHPPJBBKSTJ7iEmsiGSBcPJgbcKw28uCRXtQgimncp',
    chainId: 101,
    decimals: 8,
    name: 'Orbs',
    symbol: 'Orbs',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/bcae7030-d876-48b2-0f80-0f1baaf18100/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '27nqFZqb2iPBeVA7bbE4KPZrJgi3dJdKV9VzhCguSy6Y',
    chainId: 101,
    decimals: 9,
    name: 'PozzCoin',
    symbol: 'POZZ',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4c9c5d5b-64cc-4c4b-75c5-6c1661a3fe00/public',
    tags: ['old-registry'],
  },
  {
    address: 'E8G4uo2i9d12aGnXDHXXcw6hU2fh2NytR5XR3qurTLBx',
    chainId: 101,
    decimals: 9,
    name: 'WNDO',
    symbol: 'WNDO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9877066f-9029-4624-6353-ec3551045300/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CFbdjaKonbBQTYG2GC6CmB7exofgDYGCDR8tp8KVGS7T',
    chainId: 101,
    decimals: 6,
    name: 'Cyborg Apes BORG',
    symbol: 'BORG',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f98de27f-c48b-4d6c-4a85-3bd98251f000/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cyborg-apes',
    },
  },
  {
    address: '88YqDBWxYhhwPbExF966EdaCYBKP51xVm1oGBcbWzcf2',
    chainId: 101,
    decimals: 9,
    name: 'Garlic',
    symbol: 'GRLC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/538154c1-273b-4c2d-6c7f-95cb951cf000/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Gh1jKzmxf95cT5PQabNbfJskkQU8kQ5UugfpbHSnPq9z',
    chainId: 101,
    decimals: 3,
    name: 'Neon Rocket Coin',
    symbol: 'NRC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ba895ceb-df3c-4d0b-00ea-2d787d5c6100/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '4mJ6N65rD9w6sFPQ17UDWot2H64UtzR31biVLaKpZT6J',
    chainId: 101,
    decimals: 0,
    name: 'AlienUniverse Token',
    symbol: 'ALIEN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/bb496a48-f8f5-477a-644d-008c51cf6b00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'idoLztG5ZGMVEjjoQWjeSu2eVkVsp3YnrFZKf7dNi4j',
    chainId: 101,
    decimals: 9,
    name: 'IDOLZ Token',
    symbol: 'IDOLZ',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c2ba5182-2cc9-4943-3d90-f6adf8148e00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '42Y3CgJQLnHjdScYMu8VS4TbeZMUNVdBMKYbf7hz7aum',
    chainId: 101,
    decimals: 6,
    name: 'Gamify Club',
    symbol: 'GMFC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7b7adff2-4b56-41bb-1fc8-adc2b9d5fa00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3jsFX1tx2Z8ewmamiwSU851GzyzM2DJMq7KWW5DM8Py3',
    chainId: 101,
    decimals: 8,
    name: 'CHAI (Portal)',
    symbol: 'CHAI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1c0a6aee-9ff0-48f6-3d26-81df392e5b00/public',
    tags: ['wormhole'],
    extensions: {
      coingeckoId: 'chai',
    },
  },
  {
    address: '7y2KpMzsxmjCN8ogA3PSfwZvmYUgMuWo7NWY4Ct5jRHp',
    chainId: 101,
    decimals: 6,
    name: 'SolBird',
    symbol: 'BIRD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4621603a-27ec-43e2-dc91-8f0b95329800/public',
    tags: ['community'],
  },
  {
    address: 'ForaXiBD8K3a7C1PwxV1xqDHs5aV8y8nWRmHebafdkes',
    chainId: 101,
    decimals: 9,
    name: 'Fora',
    symbol: 'FORA',
    logoURI: 'imagepng',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '6FLsSkF4AqQeDuqEmGPyBZvVebc4WWWntnZP2QZyBzG8',
    chainId: 101,
    decimals: 9,
    name: 'JJC',
    symbol: 'JJJJC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4fb77035-7fad-451a-0426-712be0822500/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Ce3PSQfkxT5ua4r2JqCoWYrMwKWC5hEzwsrT9Hb7mAz9',
    chainId: 101,
    decimals: 9,
    name: 'SolDate(DATE) Token',
    symbol: 'DATE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f99d8259-bef8-4136-618c-adf8de043400/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'KomoNuvereGko9jNKUgb3AJZdG3pDaXjbph77ZWvFy1',
    chainId: 101,
    decimals: 2,
    name: 'Komoverse Token',
    symbol: 'KOMO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/af88c1d3-8c02-4744-fe29-39c03409a600/public',
    tags: ['community'],
  },
  {
    address: 'LAinEtNLgpmCP9Rvsf5Hn8W6EhNiKLZQti1xfWMLy6X',
    chainId: 101,
    decimals: 9,
    name: 'Laine Stake',
    symbol: 'laineSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/66059327-5a77-4dcb-3613-02d218637800/public',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'laine-stake',
    },
  },
  {
    address: 'PRiME7gDoiG1vGr95a3CRMv9xHY7UGjd4JKvfSkmQu2',
    chainId: 101,
    decimals: 9,
    name: 'SolanaPrime',
    symbol: 'PRIME',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5f117235-07bb-4e23-5556-092c76315400/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'solanaprime',
    },
  },
  {
    address: '8iSagwHZNj4Hx4CMeoZwLLMVbWt4mUT6qk42TxiHkRtn',
    chainId: 101,
    decimals: 6,
    name: 'DegenAlley',
    symbol: 'DGNA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/27916994-7351-4440-f649-96ab13f52a00/public',
    tags: ['old-registry'],
  },
  {
    address: 'Gm6szibJfB1ZzUxNYf85nXwFchugqTqNyE5fDwWfBc7K',
    chainId: 101,
    decimals: 9,
    name: 'ILoveU Token',
    symbol: 'ILU',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/fbb6c0ee-a9d6-407a-edfb-c9fb8dc17000/public',
    tags: ['old-registry'],
  },
  {
    address: 'Aymdf5Fp2URJNcsHpEF2NqEqFHiqvvhrDvYQtyZFw7zn',
    chainId: 101,
    decimals: 4,
    name: 'Water Bears',
    symbol: 'WTRBR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/913e65ed-6cf0-4d8b-b1c9-ee0a1a5d7300/public',
    tags: ['community'],
  },
  {
    address: 'sMEANebFMnd9uTYpyntGzBmTmzEukRFwCjEcnXT2E8z',
    chainId: 101,
    decimals: 6,
    name: 'Staked MEAN',
    symbol: 'sMEAN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7b7adff2-4b56-41bb-1fc8-adc2b9d5fa00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'uL2qhMckUAroJPt2MLHwEeppJNYE3wBAGFMCs3anwXn',
    chainId: 101,
    decimals: 2,
    name: 'Drippies Floor Index',
    symbol: 'DRIPSPLIT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b5ee066c-4df4-44fc-de15-d339585dd300/public',
    tags: ['old-registry'],
  },
  {
    address: '8BLiujyxu5gJajWBXoZQkwSsamdeHNKWQbu1ApAao8Ps',
    chainId: 101,
    decimals: 6,
    name: 'Acacia',
    symbol: 'ACA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2d616a00-3332-42a5-228f-037632bb0000/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7R7rZ7SsLDXkYAfJyRCBScLuZwizeMWaTWrwFhSZU2Jq',
    chainId: 101,
    decimals: 9,
    name: 'Weble Ecosystem Token',
    symbol: 'WET',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/6e1688d5-f45a-421c-7d7a-b2ddae60ef00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'KARTdF5K68Q2nGppizG3DeCzp7AhHy6YXf2uTQjBSQx',
    chainId: 101,
    decimals: 0,
    name: 'Mushroom Racers Token',
    symbol: 'VROOM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/12080238-b9dc-4bdf-1df0-78843723aa00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'DMbb79fgxR3fKKVKWcbetMCuxNNtJnfjY3qqAE4G4wJf',
    chainId: 101,
    decimals: 3,
    name: 'Dusk',
    symbol: 'DUSK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/69471789-3d43-4c5d-22dd-71d85a230900/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'iVNcrNE9BRZBC9Aqf753iZiZfbszeAVUoikgT9yvr2a',
    chainId: 101,
    decimals: 6,
    name: 'Investin Protocol',
    symbol: 'IVN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9f188492-f60c-4e43-2721-694a400b8200/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'investin',
    },
  },
  {
    address: '4nhQdXfoHvCCVnyZQg3awXqPrKL89Ys7Rbe77oXM47GG',
    chainId: 101,
    decimals: 9,
    name: 'AIO Exchange Token',
    symbol: 'AIO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2eff2962-a701-4add-39a6-6183955fb500/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'dab15vg2k8zGJPy4xM2DH2G2BY3khrqduXapzYAV3y8',
    chainId: 101,
    decimals: 8,
    name: 'DABLOONS',
    symbol: 'DABLNS',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/302e1065-6ad9-478f-f0d3-4af0405cca00/public',
    tags: ['community'],
  },
  {
    address: '9e6nnqbsTjWx3ss6a3x7Q9ZvpupLNYLb8cTbVmm6UD2K',
    chainId: 101,
    decimals: 9,
    name: 'Shuttlecoin',
    symbol: 'SHUT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/987771ef-04e3-4464-13d1-d8fcbb8d6700/public',
    tags: ['old-registry'],
  },
  {
    address: '7udMmYXh6cuWVY6qQVCd9b429wDVn2J71r5BdxHkQADY',
    chainId: 101,
    decimals: 3,
    name: 'COBAN',
    symbol: 'COBAN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c5e8c3fe-50c3-4c70-01df-71abf35bed00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'coban',
    },
  },
  {
    address: '4tejdaGTug9xWg58f92zmFMrsoWqCnvt8WaVuCiP3uUy',
    chainId: 101,
    decimals: 8,
    name: 'ICHIGO',
    symbol: 'ICHIGO',
    logoURI: 'https://ichigo.network/logos/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'icex2Fy2KtXjfiAAUEHLPHu7XKDLvwiyVUPP9PNpSkF',
    chainId: 101,
    decimals: 9,
    name: 'Infinity Diamonds ICE',
    symbol: 'ICE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/78c66790-cc18-4401-7af0-c52a242a8600/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Bx1fDtvTN6NvE4kjdPHQXtmGSg582bZx9fGy4DQNMmAT',
    chainId: 101,
    decimals: 9,
    name: 'Solcubator',
    symbol: 'SOLC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/651d9f81-6be0-40cd-45f7-483f6a270000/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solcubator',
    },
  },
  {
    address: '4B619RbcXbXrKTzNVgDSRiUn9wfxWgA1w1oFLveGacNy',
    chainId: 101,
    decimals: 3,
    name: 'Hydrogencoin',
    symbol: 'HCOIN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b37c498b-786c-4e74-e7ef-752ca68e1b00/public',
    tags: ['old-registry'],
  },
  {
    address: '7rrJLRar2WjZwRoF3iJKHKnA7d7d9YJT1X9HAJnwUH3Z',
    chainId: 101,
    decimals: 6,
    name: 'Project Wisdom',
    symbol: 'WIZE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0b9a78f1-993f-4e85-276d-86549e555600/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'GTuDe5yneFKaWSsPqqKgu413KTk8WyDnUZcZUGxuNYsT',
    chainId: 101,
    decimals: 9,
    name: 'Dasch Coin',
    symbol: 'DASCH',
    logoURI: 'https://github.com/kennethoqs/dasch/blob/main/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'GZL4yjPohDShW4RofJ6dEWu2Fv7qEa5mBT7Dpje5hqe7',
    chainId: 101,
    decimals: 2,
    name: 'Stoned Ape Crew Index',
    symbol: 'SAC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/808b7f3d-4600-45f0-4566-be821cb03500/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '45wdSjpSqZCk9mkqmq5Nh7beCEqqUJMJcVduwYCip5eq',
    chainId: 101,
    decimals: 8,
    name: 'BofB',
    symbol: 'BOFB',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/71838c25-c827-4845-8718-c64776167e00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'AgnHzGspNu7F3nFM4izuPt5g7m1URjVaTaFNgvqSXcjC',
    chainId: 101,
    decimals: 9,
    name: 'Nectar',
    symbol: 'NCTR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/73238ae1-e511-47ab-dfe2-1b68b7b24a00/public',
    tags: ['community'],
  },
  {
    address: 'GjdreVe7iUG4hyESSweGyFzgekWufhEwGJqAaa1hr7pf',
    chainId: 101,
    decimals: 9,
    name: 'WATT token',
    symbol: 'WATT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/bc3c5b5f-b2d3-41d7-7c8f-a07c4adabe00/public',
    tags: ['old-registry'],
  },
  {
    address: '8UaGbxQbV9v2rsMxy2G2NEh1JYQ8T9dmggq1oesrXD9c',
    chainId: 101,
    decimals: 3,
    name: 'Ribh',
    symbol: 'RIBH',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/fce24721-7289-4dab-40a8-c55136d06200/public',
    tags: ['old-registry'],
  },
  {
    address: '2zzC22UBgJGCYPdFyo7GDwz7YHq5SozJc1nnBqLU8oZb',
    chainId: 101,
    decimals: 9,
    name: '1SPACE',
    symbol: '1SP',
    logoURI: 'https://1space.me/images/1SP_logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'onespace',
    },
  },
  {
    address: 'C5xtJBKm24WTt3JiXrvguv7vHCe7CknDB7PNabp4eYX6',
    chainId: 101,
    decimals: 9,
    name: 'Tiny Bonez',
    symbol: 'T1NY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/6282eba7-c424-44dd-96c5-88c4fe1e6500/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'tiny-bonez',
    },
  },
  {
    address: 'UST98bfV6EASdTFQrRwCBczpehdMFwYCUdLT5tEbhpW',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped UST (Portal) (9 decimals)',
    symbol: 'swtUST-9',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/85bb0e44-67c8-42ba-cff3-228acd2ace00/public',
    tags: ['old-registry'],
  },
  {
    address: 'Frog8vt6gmuuUuuerd7ispP6yavssBUtMpEP5DCEuUgD',
    chainId: 101,
    decimals: 9,
    name: 'Frog',
    symbol: '$FROG',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d174c22c-18f5-465e-145a-984262c1be00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'At5j3zhbEj8mfFsSy1MPbjVhrX2uNmRMPEDZiyFcETNX',
    chainId: 101,
    decimals: 4,
    name: 'BRAWNDO',
    symbol: 'BRWNDO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/eab73f23-de70-4faf-2f16-1dc949cac200/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'FtgGSFADXBtroxq8VCausXRr2of47QBf5AS1NtZCu4GD',
    chainId: 101,
    decimals: 4,
    name: 'BRZ',
    symbol: 'BRZ',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1bd158f8-3927-46e6-74be-b27ac3075d00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'brz',
    },
  },
  {
    address: '6Dujewcxn1qCd6rcj448SXQL9YYqTcqZCNQdCn3xJAKS',
    chainId: 101,
    decimals: 6,
    name: 'ARTE',
    symbol: 'ARTE',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/32a68551-490d-4f07-6fb1-480c9d99ad00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'EP2aYBDD4WvdhnwWLUMyqU69g1ePtEjgYK6qyEAFCHTx',
    chainId: 101,
    decimals: 9,
    name: 'KRILL',
    symbol: 'KRILL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ffa59fdd-e379-4cc9-6076-c6195c8cdb00/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'krill',
    },
  },
  {
    address: 'F9BqFoWRML4Red6YPiL3xJBP7u9g8f61AKJMEYDB3wBR',
    chainId: 101,
    decimals: 9,
    name: 'Athens',
    symbol: 'ATH',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/8e31c9cb-055f-4961-9da0-754641ad4500/public',
    tags: ['community'],
  },
  {
    address: 'GKNr1Gwf7AMvEMEyMzBoEALVBvCpKJue9Lzn9HfrYYhg',
    chainId: 101,
    decimals: 9,
    name: '611Coin',
    symbol: 'SIXY',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5689be09-8f78-49c0-67e8-6c7a04bae300/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'DYbRXaQcnj44SH9woxvyFdtcKkSoPoCEshRTQDZSjsBm',
    chainId: 101,
    decimals: 9,
    name: 'Marijuana Joint',
    symbol: 'MARIJUANA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/752b3de3-2dc1-44e5-9d28-b9cd9b5e8700/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'AGkFkKgXUEP7ZXazza5a25bSKbz5dDpgafPhqywuQnpf',
    chainId: 101,
    decimals: 9,
    name: 'SunnySideUp Token',
    symbol: 'SSU',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ae770145-5d8b-4509-1ffe-01659e0a1100/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'sunnysideup',
    },
  },
  {
    address: 'kiNeKo77w1WBEzFFCXrTDRWGRWGP8yHvKC9rX6dqjQh',
    chainId: 101,
    decimals: 9,
    name: 'KKO Protocol',
    symbol: 'KKO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/ca2daf81-c462-4ecc-8c83-310321ee4300/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'kineko',
    },
  },
  {
    address: 'FmoKY2ERGmE9NzrYphAJcqH5BPRy2Hs4VomRfu8Qgt7Y',
    chainId: 101,
    decimals: 2,
    name: 'SMB Index',
    symbol: 'MONKES',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/dcc724e7-0cc9-4062-bce4-a97dc0b25000/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'FUCKuTfQVT9yCe3jPXdejBPhcPJpnceQy17uvcT9cLx8',
    chainId: 101,
    decimals: 9,
    name: 'White Solana',
    symbol: 'white',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4ddf5c08-ba04-45eb-ac58-3716b6e01d00/public',
    tags: ['community'],
  },
  {
    address: 'HWSqJdwemji7TNiKQPudUj86LXyF3vGAtWm5ePk5KzgD',
    chainId: 101,
    decimals: 9,
    name: 'Solana Eco Index',
    symbol: 'SIX',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f80fcdb3-57c3-4acc-a78e-1db493f46d00/public',
    tags: ['old-registry'],
  },
  {
    address: 'BB33fYoeBVA2uv119be9tKvmXeuwtcx1W25N9KFNd2ca',
    chainId: 101,
    decimals: 9,
    name: 'Godz Token',
    symbol: 'GODZ',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/f23f7d1a-abfa-4990-c7e1-80a01157ee00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'gso1xA56hacfgTHTF4F7wN5r4jbnJsKh99vR595uybA',
    chainId: 101,
    decimals: 9,
    name: 'Sunrise gSOL',
    symbol: 'GSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3b5f080c-95ba-4ec5-b857-ac76f6221f00/public',
    tags: ['community', 'solana-fm'],
  },
  {
    address: '9AGm8DWXiB4PwvH1V2r31ChsTE2f2TDySvDbfJmfaMBq',
    chainId: 101,
    decimals: 8,
    name: 'DLP8 Coin',
    symbol: 'DLP8',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/343ec14e-2841-4cb8-2d4b-2a1a08a80200/public',
    tags: ['community'],
  },
  {
    address: '6j14WyX1Ag2pLWvn99euK4xp2VcZD62VeJv2iwCrYmT8',
    chainId: 101,
    decimals: 9,
    name: 'Keeshond Coin',
    symbol: '$KSH',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/92c82685-1ced-4785-f99b-bcf486754100/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Kz1csQA91WUGcQ2TB3o5kdGmWmMGp8eJcDEyHzNDVCX',
    chainId: 101,
    decimals: 6,
    name: 'Tether USD (Portal from Avalanche)',
    symbol: 'USDTav',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0e0974ed-f0e1-4e7e-def1-83587f11f300/public',
    tags: ['wormhole'],
  },
  {
    address: 'MMAx26JtJgSWv6yH48nEHCGZcVvRbf9Lt9ALa7jSipe',
    chainId: 101,
    decimals: 9,
    name: 'mma',
    symbol: 'MMA',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4e3dcef5-9ff2-4d53-8ecb-e6c1345d8000/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Vjq9T5xmqRzLXQRyvigzyZzpHCGCsbYAJ7afLVuF8j9',
    chainId: 101,
    decimals: 9,
    name: 'Random Zaysan Raptors',
    symbol: 'rZOOM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2435349d-c6fe-4f14-bba9-09285ac93900/public',
    tags: ['old-registry'],
  },
  {
    address: '3WV4fTWGvtWNvQb8oVU4t99By8KztDLtExqHnkPfHAA9',
    chainId: 101,
    decimals: 9,
    name: 'CopyCats token',
    symbol: 'PAW',
    logoURI:
      'https://imagedelivery.net/aAmca-Po70V1nH4n9cT-uA/98c9b68b-1494-43d1-0c2c-31e5d0129a00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'E9bjYSAqabYAd2Zaev4qAMVNAiX7Z2Dp4Sn1JgsTn2b6',
    chainId: 101,
    decimals: 9,
    name: 'Chairman Chow',
    symbol: 'CCC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/824c0186-f846-433f-b049-e97da32ab700/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'AR1Mtgh7zAtxuxGd2XPovXPVjcSdY3i4rQYisNadjfKy',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped SUSHI (Sollet)',
    symbol: 'soSUSHI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/406c640a-1d7e-4d27-ee50-0f2b1071bb00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'bonegFPgrpZ4bfVn3kQK1aMbGYddWtfMAywNt5LsuVE',
    chainId: 101,
    decimals: 2,
    name: 'BONES Token',
    symbol: 'BONES',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/153eb8b4-9115-42e2-b745-bd7a7edec600/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'soul-dog-city-bones',
    },
  },
  {
    address: 'GpQLC7KnNgAvEpamfWi1AWFdXECZ1eQetvFYTuETLZC7',
    chainId: 101,
    decimals: 9,
    name: 'SchimmelPeter Monster',
    symbol: 'SPM',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/c2bdea3b-d60b-425c-8109-5a7ac438ca00/public',
    tags: ['old-registry'],
  },
  {
    address: '519W6ZZnduudeo6tp1YMgeWiNFeoq4kTVS4uMZggKE5r',
    chainId: 101,
    decimals: 9,
    name: 'Kleyne Gelt',
    symbol: 'KLGT',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2a16922f-0ce8-434e-5d08-66ba674d6300/public',
    tags: ['old-registry'],
  },
  {
    address: 'AMzmwvDRKdt5AQ3m1m28tWjzBxmQNe1PsmHnYitVZwzp',
    chainId: 101,
    decimals: 9,
    name: 'JUNK',
    symbol: 'JUNKz',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7c5ea193-3be9-4e25-8e33-7ecfa7801500/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '6ABQdaTwRvmacto7aeRBGghS6Pxctd6cFGL8gDdwV1dd',
    chainId: 101,
    decimals: 8,
    name: 'Extra Reality',
    symbol: 'XTR',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9f67419c-9d99-4520-3643-9810c8ed3000/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3rH1toffQAELHo5vyRKdwEFxhPTZA7ocfRdJK2c8txoJ',
    chainId: 101,
    decimals: 9,
    name: 'FamilySOL',
    symbol: 'FamSOL',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7c5da280-0cc9-4631-5e9c-2d0e20b10600/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '42KmnheUHt3UaQFoAKnipLgBJ1Zm427heJdQcHGPtnjc',
    chainId: 101,
    decimals: 7,
    name: 'TURBO on Solana',
    symbol: '$TURBO',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2a6c2385-5d76-4c24-f84e-c75a36c80e00/public',
    tags: ['community'],
  },
  {
    address: 'A3HyGZqe451CBesNqieNPfJ4A9Mu332ui8ni6dobVSLB',
    chainId: 101,
    decimals: 5,
    name: 'WOOP',
    symbol: 'WOOP',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0aa3db89-fbc4-4ffc-9a18-e963fc48c700/public',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'woop',
    },
  },
  {
    address: 'CALusHembJf3tQ69BxFbLRUSpGRwKzEnLKWUPhQo5dFk',
    chainId: 101,
    decimals: 9,
    name: 'calUSD Stablecoin',
    symbol: 'calUSD',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/fa05eabc-5bf0-4035-e537-b8889ef92e00/public',
    tags: ['old-registry'],
  },
  {
    address: 'BybpSTBoZHsmKnfxYG47GDhVPKrnEKX31CScShbrzUhX',
    chainId: 101,
    decimals: 8,
    name: 'HUSD Stablecoin (Wormhole v1)',
    symbol: 'wHUSD_v1',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e4a4e923-29aa-48f4-83cb-92f669f32f00/public',
    tags: ['old-registry'],
  },
  {
    address: 'PUhuAtMHsKavMTwZsLaDeKy2jb7ciETHJP7rhbKLJGY',
    chainId: 101,
    decimals: 9,
    name: 'USN (Allbridge from Near)',
    symbol: 'USN',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5de9db5a-fe61-40d8-27dc-680c1daa4400/public',
    tags: ['old-registry'],
  },
  {
    address: '7p6zGHdmWHvCH4Lsik2MoMBXqPGhFbSPSceSBXd8KNEC',
    chainId: 101,
    decimals: 6,
    name: 'Plutonium 238',
    symbol: 'PU238',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/132c65c3-7d64-4f9c-11aa-a6e31b063f00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CXLBjMMcwkc17GfJtBos6rQCo1ypeH6eDbB82Kby4MRm',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped UST (Wormhole v1)',
    symbol: 'wUST_v1',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/74439ebe-6059-46af-7d84-a3cebefd8000/public',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'wrapped-ust',
    },
  },
  {
    address: 'xLPFiPmWve5rUnAYcHZSZWjwgyqEdcV6dDzoBJRtNw9',
    chainId: 101,
    decimals: 9,
    name: 'xLP Finance',
    symbol: 'xLPFi',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/bb8d45be-26ee-445c-8aef-15121b5f1c00/public',
    tags: ['community', 'solana-fm'],
  },
  {
    address: '8L8pDf3jutdpdr4m3np68CL9ZroLActrqwxi6s9Ah5xU',
    chainId: 101,
    decimals: 9,
    name: 'Frax (Wormhole v1)',
    symbol: 'wFRAX_v1',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/8c811197-d7da-4fcb-c6a5-f622bce98400/public',
    tags: ['old-registry'],
  },
  {
    address: 'FYpdBuyAHSbdaAyD1sKkxyLWbAP8uUW9h6uvdhK74ij1',
    chainId: 101,
    decimals: 9,
    name: 'Dai Stablecoin (Wormhole v1)',
    symbol: 'wDAI_v1',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d1f2a7b5-a88d-45ea-8531-d07f1af93500/public',
    tags: ['old-registry'],
  },
  {
    address: 'DHpoYejUDqzByb6HAdaLWF7KZvwUv2vWYDY9cTENNZui',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDC (Allbridge from Celo)',
    symbol: 'acUSDC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/2301dbbd-e4c3-4b54-467c-4d8ab9afd800/public',
    tags: ['old-registry'],
  },
  {
    address: 'EgQ3yNtVhdHz7g1ZhjfGbxhFKMPPaFkz8QHXM5RBZBgi',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped DAI (Allbridge from Avalanche)',
    symbol: 'aaDAI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/5424a179-b0f8-47f2-49fe-dfa7f3dbf000/public',
    tags: ['old-registry'],
  },
  {
    address: '9w6LpS7RU1DKftiwH3NgShtXbkMM1ke9iNU4g3MBXSUs',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped DAI (Allbridge from Ethereum)',
    symbol: 'aeDAI',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b22cbc9a-0a9c-4530-1db9-8d6ff4918000/public',
    tags: ['old-registry'],
  },
  {
    address: 'AJ1W9A9N9dEMdVyoDiam2rV44gnBm2csrPDP7xqcapgX',
    chainId: 101,
    decimals: 9,
    name: 'Binance USD (Wormhole v1)',
    symbol: 'wBUSD_v1',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/cefa31c4-3498-4830-5170-1d76a2b90e00/public',
    tags: ['old-registry'],
  },
  {
    address: '43m2ewFV5nDepieFjT9EmAQnc1HRtAF247RBpLGFem5F',
    chainId: 101,
    decimals: 8,
    name: 'USDK (Portal)',
    symbol: 'USDK',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a4e8dc4b-b10c-4923-a279-a22f3a0a8500/public',
    tags: ['wormhole', 'old-registry'],
  },
  {
    address: 'EyrnrbE5ujd3HQG5PZd9MbECN9yaQrqc8pRwGtaLoyC',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped ETH (Allbridge from BSC)',
    symbol: 'abETH',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0135a780-7d34-407b-22b4-c5bb0acc9800/public',
    tags: ['old-registry'],
  },
  {
    address: '8bqjz8DeSuim1sEAsQatjJN4zseyxSPdhHQcuuhL8PCK',
    chainId: 101,
    decimals: 9,
    name: 'Synthetic ETH',
    symbol: 'xETH',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/e67b359b-d6d6-459a-105a-7c93615cb500/public',
    tags: ['old-registry'],
  },
  {
    address: 'Bzq68gAVedKqQkQbsM28yQ4LYpc2VComDUD9wJBywdTi',
    chainId: 101,
    decimals: 8,
    name: 'Interest Bearing Bitcoin (Portal)',
    symbol: 'ibBTC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7c71253a-7550-49cf-254d-60d8f53aa200/public',
    tags: ['wormhole'],
  },
  {
    address: '7dVH61ChzgmN9BwG4PkzwRP8PbYwPJ7ZPNF2vamKT2H8',
    chainId: 101,
    decimals: 8,
    name: 'Huobi BTC (Portal)',
    symbol: 'HBTC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/3202c616-1dd5-4358-8f0f-f386be730000/public',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'huobi-btc-wormhole',
    },
  },
  {
    address: 'DYDWu4hE4MN3aH897xQ3sRTs5EAjJDmQsKLNhbpUiKun',
    chainId: 101,
    decimals: 8,
    name: 'pBTC (Parrot BTC)',
    symbol: 'pBTC',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/601d03fc-6df3-4d8f-95d7-df5a84c74f00/public',
    tags: ['old-registry'],
  },
  {
    address: 'FACTQhZBfRzC7A76antnpAoZtiwYmUfdAN8wz7e8rxC5',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped renBTC (9 decimals)',
    symbol: 'srenBTC-9',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/72b629dc-364c-4a0a-c127-e21fad84e700/public',
    tags: ['old-registry'],
  },
  {
    address: 'BtX7AfzEJLnU8KQR1AgHrhGH5s2AHUTbfjhUQP8BhPvi',
    chainId: 101,
    decimals: 10,
    name: 'Saber Wrapped renBTC (10 decimals)',
    symbol: 'srenBTC-10',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/be2b5d31-cb75-41fe-5e9e-37735ebb2700/public',
    tags: ['old-registry'],
  },
  {
    address: 'GbBWwtYTMPis4VHb8MrBbdibPhn28TSrLB53KvUmb7Gi',
    chainId: 101,
    decimals: 9,
    name: 'FTT (Wormhole v1)',
    symbol: 'wFTT_v1',
    logoURI:
      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/a5324102-7a26-41f6-2fa3-229ce07f1600/public',
    tags: ['old-registry'],
  },
];
