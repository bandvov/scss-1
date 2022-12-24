import React from 'react'
import styles from './Button.module.scss'
export default function Button({ className = "", children, ...props }) {
  return (
    <button className={`${styles.button} ${className}`} {...props}>{children}</button>
  )
}
