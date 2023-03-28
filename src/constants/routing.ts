// a list of tokens by chain
import { Currency, Token } from '@uniswap/sdk-core'

import { SupportedChainId } from './chains'
import {
  AMPL,
  DAI,
  ETH2X_FLI,
  FEI,
  FRAX,
  FXS,
  nativeOnChain,
  rETH2,
  sETH2,
  SWISE,
  TRIBE,
  USDC_MAINNET,
  USDT,
  WRAPPED_NATIVE_CURRENCY,
} from './tokens'

type ChainTokenList = {
  readonly [chainId: number]: Token[]
}

type ChainCurrencyList = {
  readonly [chainId: number]: Currency[]
}

const WRAPPED_NATIVE_CURRENCIES_ONLY: ChainTokenList = Object.fromEntries(
  Object.entries(WRAPPED_NATIVE_CURRENCY)
    .map(([key, value]) => [key, [value]])
    .filter(Boolean)
)

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WRAPPED_NATIVE_CURRENCIES_ONLY,
  [SupportedChainId.MAINNET]: [...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.MAINNET], DAI, USDC_MAINNET, USDT],
}
export const ADDITIONAL_BASES: { [chainId: number]: { [tokenAddress: string]: Token[] } } = {
  [SupportedChainId.MAINNET]: {
    '0xF16E4d813f4DcfDe4c5b44f305c908742De84eF0': [ETH2X_FLI],
    [rETH2.address]: [sETH2],
    [SWISE.address]: [sETH2],
    [FEI.address]: [TRIBE],
    [TRIBE.address]: [FEI],
    [FRAX.address]: [FXS],
    [FXS.address]: [FRAX],
  },
}
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId: number]: { [tokenAddress: string]: Token[] } } = {
  [SupportedChainId.MAINNET]: {
    [AMPL.address]: [DAI, WRAPPED_NATIVE_CURRENCY[SupportedChainId.MAINNET] as Token],
  },
}

/**
 * Shows up in the currency select for swap and add liquidity
 */
export const COMMON_BASES: ChainCurrencyList = {
  [SupportedChainId.MAINNET]: [
    nativeOnChain(SupportedChainId.MAINNET),
    DAI,
    USDC_MAINNET,
    USDT,
    WRAPPED_NATIVE_CURRENCY[SupportedChainId.MAINNET] as Token,
  ],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WRAPPED_NATIVE_CURRENCIES_ONLY,
  [SupportedChainId.MAINNET]: [...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.MAINNET], DAI, USDC_MAINNET, USDT],
}
export const PINNED_PAIRS: { readonly [chainId: number]: [Token, Token][] } = {
  [SupportedChainId.MAINNET]: [
    [
      new Token(SupportedChainId.MAINNET, '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643', 8, 'cDAI', 'Compound Dai'),
      new Token(
        SupportedChainId.MAINNET,
        '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
        8,
        'cUSDC',
        'Compound USD Coin'
      ),
    ],
    [USDC_MAINNET, USDT],
    [DAI, USDT],
  ],
}
