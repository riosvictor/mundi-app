import React from 'react';
import Image from 'next/image'
import styles from './IconItem.module.css'

interface IProps {
  src: string;
  label?: string;
}

const IconItem: React.FC<IProps> = ({ src, label }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}><Image src={src} alt="Icon" width={85} height={85} /></div>

      <div className={styles.ellipsis} />
      

      {label && <p>{label}</p>}
    </div>
  )

}

export default IconItem;