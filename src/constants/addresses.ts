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
  [SupportedChainId.PICCADILLY]: '0xb4c40146E21D8A17548B1606A0D4f7d29A1d50eC',
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xA5644E29708357803b5A882D272c41cC0dF92B34',
  [SupportedChainId.PICCADILLY]: '0xb981585F3Bc2c16d6AD35436D4aD88B888bE8a47',
}

export const MULTICALL_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [SupportedChainId.PICCADILLY]: '0xEE15750b70f5Cef398F0713406873ac0B2634DC5',
}

export const SWAP_ROUTER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
  [SupportedChainId.PICCADILLY]: '0xdE7fCeDADA60ea6eE5C59E62Db21bF7cCB6A72B9',
}

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = {}
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  // [SupportedChainId.PICCADILLY]: testAddr,
}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  // [SupportedChainId.PICCADILLY]: testAddr,
}

export const TIMELOCK_ADDRESS: AddressMap = {}

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  // [SupportedChainId.PICCADILLY]: testAddr,
}

export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  // [SupportedChainId.PICCADILLY]: testAddr,
}

export const QUOTER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6',
  [SupportedChainId.PICCADILLY]: '0x2c53E677EcAcde0f354B48da9FC421f5C7e8dB54',
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x7386bC7020013EC9D67c09Bb55c6a6a2fF7f2ea4',
  [SupportedChainId.PICCADILLY]: '0x8063032929A93F383aA923AEdCad9251eC6cF8eF',
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  // [SupportedChainId.PICCADILLY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  [SupportedChainId.PICCADILLY]: '0x0c757516197393ff7b5b6131F679550b0820a462',
}
