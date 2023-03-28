import { FACTORY_ADDRESS as V2_FACTORY_ADDRESS } from '@uniswap/v2-sdk'

import { constructSameAddressMap } from '../utils/constructSameAddressMap'
import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

const testAddr = '0x3BD7Ff55d6c4c2577D0b26466C9285e1738721f6'

export const UNI_ADDRESS: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984')

// export const UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78'

export const V2_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V2_FACTORY_ADDRESS)
export const V2_ROUTER_ADDRESS: AddressMap = constructSameAddressMap('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D')

// // celo v3 addresses
// const CELO_V3_CORE_FACTORY_ADDRESSES = '0x60BE01B663A8F90eA986bCa41b658D85113E4E19'
// const CELO_ROUTER_ADDRESS = '0xCE7C7b6bBEff85998B9B5F5A50F94De939789fF8'
// const CELO_V3_MIGRATOR_ADDRESSES = '0x921262fe27047cc14770bD8935abe67224662AA7'
// const CELO_MULTICALL_ADDRESS = '0xe23E1d8051A68f32d8c11489F34cBBa4BeE46Ab5'
// const CELO_QUOTER_ADDRESSES = '0x10a256d8C7d1b8A0bc4aeeCE0882C083B66E07A0'
// const CELO_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES = 'test'
// const CELO_TICK_LENS_ADDRESSES = 'test'

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x60BE01B663A8F90eA986bCa41b658D85113E4E19', [SupportedChainId.OPTIMISM]),
  // [SupportedChainId.CELO]: CELO_V3_CORE_FACTORY_ADDRESSES,
  // [SupportedChainId.CELO_ALFAJORES]: CELO_V3_CORE_FACTORY_ADDRESSES,
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x921262fe27047cc14770bD8935abe67224662AA7', []),
  // [SupportedChainId.CELO]: CELO_V3_MIGRATOR_ADDRESSES,
  // [SupportedChainId.CELO_ALFAJORES]: CELO_V3_MIGRATOR_ADDRESSES,
}

export const MULTICALL_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0xe23E1d8051A68f32d8c11489F34cBBa4BeE46Ab5', [SupportedChainId.OPTIMISM]),
  // [SupportedChainId.CELO]: CELO_MULTICALL_ADDRESS,
  // [SupportedChainId.CELO_ALFAJORES]: CELO_MULTICALL_ADDRESS,
}

export const SWAP_ROUTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xCE7C7b6bBEff85998B9B5F5A50F94De939789fF8', [SupportedChainId.OPTIMISM]),
  // [SupportedChainId.CELO]: CELO_ROUTER_ADDRESS,
  // [SupportedChainId.CELO_ALFAJORES]: CELO_ROUTER_ADDRESS,
}

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(testAddr)
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: testAddr,
}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: testAddr,
}

export const TIMELOCK_ADDRESS: AddressMap = constructSameAddressMap(testAddr)

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: testAddr,
}

export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: testAddr,
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xE532d7f2d7680e60446b2d467F949CB2548eAeF2', [SupportedChainId.OPTIMISM]),
  // [SupportedChainId.CELO]: CELO_QUOTER_ADDRESSES,
  // [SupportedChainId.CELO_ALFAJORES]: CELO_QUOTER_ADDRESSES,
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(testAddr, [SupportedChainId.OPTIMISM]),
  // [SupportedChainId.CELO]: CELO_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,
  // [SupportedChainId.CELO_ALFAJORES]: CELO_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}

export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: testAddr,
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  // [SupportedChainId.ARBITRUM_ONE]: testAddr,
  // [SupportedChainId.ARBITRUM_RINKEBY]: testAddr,
  // [SupportedChainId.CELO]: CELO_TICK_LENS_ADDRESSES,
  // [SupportedChainId.CELO_ALFAJORES]: CELO_TICK_LENS_ADDRESSES,
}
