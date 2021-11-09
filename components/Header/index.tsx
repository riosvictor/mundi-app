import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { ChevronLeftIcon } from '@chakra-ui/icons'
import styles from './Header.module.css'

interface IProps {
  routerBack?: string;
}

const Header: React.FC<IProps> = ({routerBack}) => {
  const router = useRouter()

  return (
    <header className={styles.header}>
      {
        routerBack && 
        <button 
          aria-label="back" 
          onClick={() => router.back()}
        >
          <ChevronLeftIcon w="25" h="25" />
        </button>
      }
      <Image src="/Logo.svg" alt="Logo" width={184} height={45} />

      {
        routerBack && <div />
      }
    </header>
  )

}

export default Header;