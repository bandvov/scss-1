import React from 'react'
import styles from './Ribbon.module.scss'
export default function Ribbon({ children }) {
  return (
    <div className={styles.ribbon}>{children}</div>
  )
}
