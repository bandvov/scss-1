import React from 'react'
import { NavLink } from 'react-router-dom'
import { HEADER_MENU_ITEMS } from '../../constants'
import styles from './NavMenu.module.scss';

export default function NavMenu() {
  return (
    <nav>
      <ul className={styles.menulist}>
        {HEADER_MENU_ITEMS.map(({ url, title }) => {
          return (
            <li key={title} className={styles.menu__item}>
              <NavLink

                to={url}
                className={({ isActive }) =>
                  isActive ? styles.menu__item__active : styles.menu__item__notactive
                }
              >
                {title}
              </NavLink>
            </li>)
        })}
        <li key={"Page"} className={styles.menu__item}>
          <NavLink

            to={'/5'}
            className={({ isActive }) =>
              isActive ? styles.menu__item__active : styles.menu__item__notactive
            }
          >
            Page
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
