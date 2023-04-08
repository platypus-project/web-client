import { useWeb3React } from '@web3-react/core'
import { useMemo } from 'react'
import { useTokenBalance } from 'state/connection/hooks'

// technically a 721, not an ERC20, but suffices for our purposes

export function useHasSocks(): boolean | undefined {
  const { account } = useWeb3React()

  const balance = useTokenBalance(account ?? undefined, undefined)

  return useMemo(() => Boolean(balance?.greaterThan(0)), [balance])
}
