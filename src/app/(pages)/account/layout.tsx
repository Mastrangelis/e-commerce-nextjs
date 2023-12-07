'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Gutter } from '../../_components/Gutter'
import { useTheme } from '../../_providers/Theme'
import { profileNavItems } from '../../constants/'
import { UserInfo } from './UserInfo'

import classes from './index.module.scss'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  return (
    <div className={classes.container}>
      <Gutter>
        <h3>My Profile</h3>
        <div className={classes.account}>
          <div className={classes.nav}>
            <UserInfo />

            <ul>
              {profileNavItems.map(item => (
                <li key={item.title}>
                  <Link href={item.url} className={classes.navItem}>
                    <Image
                      src={theme === 'dark' ? item.icon.white : item.icon.dark}
                      alt={item.title}
                      width={24}
                      height={24}
                    />
                    <p>{item.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {children}
        </div>
      </Gutter>
    </div>
  )
}
