import { useWeb3React } from '@web3-react/core'
import { useIsNftPage } from 'hooks/useIsNftPage'
import { useEffect } from 'react'
import { useDarkModeManager } from 'state/user/hooks'

import { SupportedChainId } from '../../constants/chains'
import { darkTheme, lightTheme } from '../colors'

const initialStyles = {
  width: '200vw',
  height: '200vh',
  transform: 'translate(-50vw, -100vh)',
}
const backgroundResetStyles = {
  width: '100vw',
  height: '100vh',
  transform: 'unset',
}

type TargetBackgroundStyles = typeof initialStyles | typeof backgroundResetStyles

const backgroundRadialGradientElement = document.getElementById('background-radial-gradient')
const setBackground = (newValues: TargetBackgroundStyles) =>
  Object.entries(newValues).forEach(([key, value]) => {
    if (backgroundRadialGradientElement) {
      backgroundRadialGradientElement.style[key as keyof typeof backgroundResetStyles] = value
    }
  })

export default function RadialGradientByChainUpdater(): null {
  const { chainId } = useWeb3React()
  const [darkMode] = useDarkModeManager()
  const isNftPage = useIsNftPage()

  // manage background color
  useEffect(() => {
    if (!backgroundRadialGradientElement) {
      return
    }

    if (isNftPage) {
      setBackground(initialStyles)
      backgroundRadialGradientElement.style.background = darkMode
        ? darkTheme.backgroundBackdrop
        : lightTheme.backgroundBackdrop
      return
    }

    switch (chainId) {
      case SupportedChainId.PICCADILLY: {
        setBackground(backgroundResetStyles)
        const piccadillyLightGradient = 'linear-gradient(180deg, #D9F6FE 0%, #FFFFFF 100%)'
        const piccadillyDarkGradient = 'linear-gradient(0deg, #07080F 0%, #121C28 101.83%)'
        backgroundRadialGradientElement.style.background = darkMode ? piccadillyDarkGradient : piccadillyLightGradient
        break
      }
      default: {
        setBackground(backgroundResetStyles)
        const defaultLightGradient = 'linear-gradient(180deg, #D9F6FE 0%, #FFFFFF 100%)'
        const defaultDarkGradient = 'linear-gradient(0deg, #07080F 0%, #121C28 101.83%)'
        backgroundRadialGradientElement.style.background = darkMode ? defaultDarkGradient : defaultLightGradient
      }
    }
  }, [darkMode, chainId, isNftPage])
  return null
}
