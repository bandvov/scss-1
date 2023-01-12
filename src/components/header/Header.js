import React from 'react'
import NavMenu from '../NavMenu/NavMenu'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import NavMenuAction from '../NavMenuAction/NavMenuAction'
import Logo from '../Logo/Logo'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navcontainer}>
        <Logo />
        <NavMenu />
        <NavMenuAction />
      </div>
      <h1 className={styles.header__copy}>
        Model S
      </h1>
    </header>
  )
}
