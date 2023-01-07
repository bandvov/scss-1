import React from 'react';
import styles from './SpecificationListItem.module.scss';

export default function SpecificationListItem({ image, name, value, withUnderscore }) {
  return (
    <li
      key={name}
      className={`${styles.specification__list__item} ${withUnderscore && styles.specification__list__item__underscored}`}>
      {image}
      <span className={styles.specification__list__item__name}>{name}</span>
      <span className={styles.specification__list__item__value}>
        {value}</span>
    </li >
  )
}
