'use client'

import React from 'react'
import Image from 'next/image'

import { useAuth } from '../../../_providers/Auth'
import { useTheme } from '../../../_providers/Theme'

import classes from './index.module.scss'

export const UserInfo = () => {
  const { user } = useAuth()
  const { theme } = useTheme()

  return (
    <div className={classes.profile}>
      <Image
        src={theme === 'dark' ? '/assets/icons/profile_white.svg' : '/assets/icons/profile.svg'}
        alt="profile"
        width={50}
        height={50}
      />

      <div className={classes.profileInfo}>
        <p className={classes.name}>{user?.name}</p>
        <p className={classes.email}>{user?.email}</p>
      </div>
    </div>
  )
}
