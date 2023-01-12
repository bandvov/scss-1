import React from 'react'
import styles from './Footer.module.scss'
import Logo from '../Logo/Logo'
import { CONTACT_ITEMS, FOOTER_COMPANY_ITEMS, SOCIAL_ITEMS } from '../../constants'
import FooterMenuList from '../FooterMenuList/FooterMenuList'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <Logo />
        <h2 className={styles.footer__copy}>
          OurStudio is a digital agency
          UI / UX Design and Website
          Development located in Ohio,
          United States of America
        </h2>
      </div>
      <FooterMenuList {...FOOTER_COMPANY_ITEMS} />
      <FooterMenuList {...SOCIAL_ITEMS} />
      <FooterMenuList {...CONTACT_ITEMS} left />
      <h3 className={styles.footer__copyright}>Copyright Tanah Air Studio</h3>
    </footer>
  )
}
