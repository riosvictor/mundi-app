import React from 'react';
import Image from 'next/image'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Image src="/Logo.svg" alt="Logo" width={184} height={45} />
    </header>
  )

}

export default Header;