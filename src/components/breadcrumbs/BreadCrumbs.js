import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Breadcrumbs.module.scss'

export default function BreadCrumbs() {
  const location = useLocation()
  const breadcrumbsArray = location.pathname.split('/').filter(Boolean)
  const mappedBreadcrumbs = breadcrumbsArray.map((path, index) => {
    const url = breadcrumbsArray.slice(0, index + 1)
    return <li className={styles.breadcrumbs__item}>
      <span className={styles.breadcrumbs__item__separator}>></span>
      <NavLink
        to={url.join('/')}
        end
        className={({ isActive }) =>
          isActive ? styles.breadcrumbs__item__active : styles.breadcrumbs__item__notactive
        }>
        {path}
      </NavLink>
    </li>
  })

  return (
    <ul className={styles.breadcrumbs}>
      <li className={styles.breadcrumbs__item}>
        <NavLink to={'/'}>
          Home
        </NavLink>
      </li>
      {mappedBreadcrumbs}
    </ul>
  )
}
