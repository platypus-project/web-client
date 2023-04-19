import { SupportedChainId } from 'constants/chains'
import useHttpLocations from 'hooks/useHttpLocations'
import { useMemo } from 'react'
import { isAddress } from 'utils'

import EthereumLogo from '../../assets/images/ethereum-logo.png'
import { isCelo, NATIVE_CHAIN_ID, nativeOnChain } from '../../constants/tokens'

type Network = 'ethereum' | 'arbitrum' | 'optimism' | 'polygon' | 'picadilly'

export function chainIdToNetworkName(networkId: SupportedChainId): Network {
  switch (networkId) {
    case SupportedChainId.MAINNET:
      return 'ethereum'
    case SupportedChainId.OPTIMISM:
      return 'optimism'
    case SupportedChainId.PICADILLY:
      return 'picadilly'
    default:
      return 'ethereum'
  }
}

export function getNativeLogoURI(chainId: SupportedChainId = SupportedChainId.MAINNET): string {
  switch (chainId) {
    default:
      return EthereumLogo
  }
}

function getTokenLogoURI(address: string, chainId: SupportedChainId = SupportedChainId.MAINNET): string | void {
  // const networkName = chainIdToNetworkName(chainId)
  const networksWithUrls = [SupportedChainId.MAINNET, SupportedChainId.OPTIMISM]
  if (networksWithUrls.includes(chainId)) {
    return `https://raw.githubusercontent.com/project-paltypus/token-list/main/assets/ethereum-logo.png`
  }

  // Celo logo logo is hosted elsewhere.
  if (isCelo(chainId)) {
    if (address === nativeOnChain(chainId).wrapped.address) {
      return 'https://raw.githubusercontent.com/ubeswap/default-token-list/master/assets/asset_CELO.png'
    }
  }
}

export default function useCurrencyLogoURIs(
  currency:
    | {
        isNative?: boolean
        isToken?: boolean
        address?: string
        chainId: number
        logoURI?: string | null
      }
    | null
    | undefined
): string[] {
  const locations = useHttpLocations(currency?.logoURI)
  return useMemo(() => {
    const logoURIs = [...locations]
    if (currency) {
      if (currency.isNative || currency.address === NATIVE_CHAIN_ID) {
        logoURIs.push(getNativeLogoURI(currency.chainId))
      } else if (currency.isToken || currency.address) {
        const checksummedAddress = isAddress(currency.address)
        const logoURI = checksummedAddress && getTokenLogoURI(checksummedAddress, currency.chainId)
        if (logoURI) {
          logoURIs.push(logoURI)
        }
      }
    }
    return logoURIs
  }, [currency, locations])
}
