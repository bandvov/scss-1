import React, { useState } from 'react'
import styles from './MainPhoto.module.scss'

export default function MainPhoto() {
  const [activeImage, setActiveImage] = useState(0)
  const imagesArr = [
    {
      src: 'https://assets.einhell.com/im/imf/y400/900_493663/productimage'
    },
    {
      src: 'https://assets.einhell.com/im/imf/y400/900_493673/detail_image'
    },
    {
      src: ''
    },
  ]
  return (
    <section className={styles.mainphoto}>
      <div className={styles.bigphoto}>
        <img style={{
          width: "100%",
          height: '100%',
          objectFit: 'contain',
        }}
          src={imagesArr[activeImage].src} />
      </div>

      {imagesArr.map((image, index) => {
        return <div onMouseEnter={() => setActiveImage(index)} className={styles.smallphoto}>
          <img style={{
            width: "100%",
            objectFit: 'cover',
          }}
            {...image} />
        </div>
      })}
    </section>
  )
}
