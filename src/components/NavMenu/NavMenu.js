import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HEADER_MENU_ITEMS } from '../../constants'
import styles from './NavMenu.module.scss';

export default function NavMenu() {
  return (
    <nav>
      <ul className={styles.menulist}>
        {HEADER_MENU_ITEMS.map(({ url, title }) => {
          return (
            <li className={styles.menu__item}>
              <NavLink
                key={title}
                to={url}
                className={({ isActive }) =>
                  isActive ? styles.menu__item__active : undefined
                }
              >
                {title}
              </NavLink>
            </li>)
        })}
        <li className={styles.menu__item}>
          <NavLink
            key={"Page"}
            to={'/6'}
            className={({ isActive }) =>
              isActive ? styles.menu__item__active : undefined
            }
          >
            Page
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
