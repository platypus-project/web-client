import { constructSameAddressMap } from '../utils/constructSameAddressMap'
import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

const testAddr = '0x921262fe27047cc14770bD8935abe67224662AA7'

export const UNI_ADDRESS: AddressMap = constructSameAddressMap('0x921262fe27047cc14770bD8935abe67224662AA7')

// export const UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78'

export const V2_FACTORY_ADDRESSES: AddressMap = {}
export const V2_ROUTER_ADDRESS: AddressMap = {}

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
  // [SupportedChainId.CELO]: CELO_V3_CORE_FACTORY_ADDRESSES,
  [SupportedChainId.PICADILLY]: '0x60BE01B663A8F90eA986bCa41b658D85113E4E19',
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x921262fe27047cc14770bD8935abe67224662AA7', [SupportedChainId.PICADILLY]),
}

export const MULTICALL_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0xeaD2664185C74018268aCabd03cEB999AD773f68', [SupportedChainId.PICADILLY]),
}

export const SWAP_ROUTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xaebaBd54CdD1418b0eb88A5e877EdD6cbC5804f4', [SupportedChainId.PICADILLY]),
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
  ...constructSameAddressMap('0xE532d7f2d7680e60446b2d467F949CB2548eAeF2', [SupportedChainId.PICADILLY]),
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  [SupportedChainId.PICADILLY]: '0x98a1af57F0780180e046d9E10E9Ba6cbC2c2b0bE',
  // [SupportedChainId.PICADILLY]: '0x97c08474E4e6F5448AE4a6042Ca63Eb79f22236d',
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  // [SupportedChainId.PICADILLY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  [SupportedChainId.PICADILLY]: '0x3Dd73577Ea1E2c56c2b43839613cc5bff04D7D5b',
  // [SupportedChainId.ARBITRUM_ONE]: testAddr,
  // [SupportedChainId.ARBITRUM_RINKEBY]: testAddr,
  // [SupportedChainId.CELO]: CELO_TICK_LENS_ADDRESSES,
  // [SupportedChainId.CELO_ALFAJORES]: CELO_TICK_LENS_ADDRESSES,
}
