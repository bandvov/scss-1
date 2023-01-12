import React from 'react'
import styles from './FooterMenuList.module.scss'
import { Link } from 'react-router-dom'
export default function FooterMenuList({ title, items, left }) {
  return (
    <div>
      {title && <h3 className={styles.footer__list__title}>{title}</h3>}
      <ul className={left ? styles.footer__list__items__left : styles.footer__list__items} style={{ listStyle: 'none', margin: '0', padding: '0' }}>
        {items?.map(({ url, title }) => {
          return (
            <li>
              <Link className={styles.footer__list__item} to={url}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
