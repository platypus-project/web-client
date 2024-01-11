import { constructSameAddressMap } from '../utils/constructSameAddressMap'
import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const UNI_ADDRESS: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984')

// export const UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78'

export const V2_FACTORY_ADDRESSES: AddressMap = {}
export const V2_ROUTER_ADDRESS: AddressMap = {}

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  // [SupportedChainId.CELO]: CELO_V3_CORE_FACTORY_ADDRESSES,
  [SupportedChainId.MAINNET]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [SupportedChainId.PICADILLY]: '0x8439Ac94c84D89339e41F798a28aA73737DA35Cd',
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xA5644E29708357803b5A882D272c41cC0dF92B34',
  [SupportedChainId.PICADILLY]: '0x338662C6e113aD9CfA4E2e755931643D8Cf1884B',
}

export const MULTICALL_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [SupportedChainId.PICADILLY]: '0x70A003CaE209c00cB569fd41FAcE47608DA23d0f',
}

export const SWAP_ROUTER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
  [SupportedChainId.PICADILLY]: '0xeA370cBBff1927E6a73773b9665177278783c584',
}

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = {}
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  // [SupportedChainId.PICADILLY]: testAddr,
}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  // [SupportedChainId.PICADILLY]: testAddr,
}

export const TIMELOCK_ADDRESS: AddressMap = {}

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  // [SupportedChainId.PICADILLY]: testAddr,
}

export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  // [SupportedChainId.PICADILLY]: testAddr,
}

export const QUOTER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6',
  [SupportedChainId.PICADILLY]: '0x212EFFCf1Ec21677E88B48D9D8b64Bb672E9aAC6',
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x7386bC7020013EC9D67c09Bb55c6a6a2fF7f2ea4',
  [SupportedChainId.PICADILLY]: '0x7386bC7020013EC9D67c09Bb55c6a6a2fF7f2ea4',
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  // [SupportedChainId.PICADILLY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  [SupportedChainId.PICADILLY]: '0x49E2b2eAE2c1Fc53822E76D9cc6F4fC1d3641292',
}
