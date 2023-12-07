'use client'

import React from 'react'
import Image from 'next/image'

import { useTheme } from '..'

import classes from './index.module.scss'

export const ThemeSelector: React.FC = () => {
  //const selectRef = React.useRef<HTMLSelectElement>(null)
  const { theme, setTheme } = useTheme()

  // const onThemeChange = (themeToSet: Theme & 'auto') => {
  //   if (themeToSet === 'auto') {
  //     setTheme(null)
  //     if (selectRef.current) selectRef.current.value = 'auto'
  //   } else {
  //     setTheme(themeToSet)
  //   }
  // }

  // React.useEffect(() => {
  //   const preference = window.localStorage.getItem(themeLocalStorageKey)
  //   if (selectRef.current) {
  //     selectRef.current.value = preference ?? 'auto'
  //     setShow(true)
  //   }
  // }, [])

  // console.log({ theme })
  return (
    <div
      className={[classes.selectTheme].filter(Boolean).join(' ')}
      onClick={() => {
        const themeValue = theme === 'dark' ? 'light' : 'dark'
        setTheme(themeValue)
      }}
    >
      {theme === 'dark' && (
        <Image src="/assets/icons/sun_white.svg" alt="moon" width={24} height={24} />
      )}
      {theme === 'light' && (
        <Image src="/assets/icons/moon.svg" alt="moon" width={24} height={24} />
      )}
    </div>
  )
}
