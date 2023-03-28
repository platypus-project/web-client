import { SupportedL2ChainId } from 'constants/chains'

export function isL2ChainId(chainId: number | undefined): chainId is SupportedL2ChainId {
  return false
}
