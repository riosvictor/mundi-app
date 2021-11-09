import type { NextPage } from 'next'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import IconItem from './components/IconItem'

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../styles/Home.module.css"

import SwiperCore, {
  Pagination, Navigation
} from 'swiper';

SwiperCore.use([Pagination, Navigation]);

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <div>
        <div className={styles.titleContainer}>
          <div className={styles.titleBackground}>
            <Image
              src="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a" 
              alt="banner" 
              layout="fill"
            />
          </div>
          
          <div className={styles.titleAirplane}>
            <Image
              src="/Airplane.svg" 
              alt="Airplane"
              layout="fill"
            />
          </div>

          <h1 className={styles.title}>5 Continentes, <br/> infinitas possibilidades.</h1>
          <h2 className={styles.subtitle}>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</h2>
        </div>

        <div className={styles.iconsContainer}>
          <IconItem src="/cocktail 1.svg" label="vida noturna" />
          <IconItem src="/surf 1.svg" label="praia" />
          <IconItem src="/building 1.svg" label="moderno" />
          <IconItem src="/museum 1.svg" label="clássico" />
          <IconItem src="/earth 1.svg" label="e mais..." />
        </div>

        <div className={styles.divider} />

        <div className={styles.messageOverSlide}>
          Vamos nessa? <br /> Então escolha seu continente
        </div>

        <Swiper pagination={{clickable: true}} navigation={true} loop={true} slidesPerView={1} spaceBetween={30} className={styles.swiper}>
          <SwiperSlide className={styles.swiperSlide}> 
            <Image
              src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1070&q=80" 
              alt="Europe"
              layout="fill"
            /> 
            <p>Europa</p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              src="https://images.unsplash.com/photo-1534179639155-4910efc143c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80" 
              alt="South America"
              layout="fill"
            /> 
            <p>América do Sul</p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              src="https://images.unsplash.com/photo-1576771304215-6d4d30f7bb63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="North America"
              layout="fill"
            /> 
            <p>América do Norte</p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              src="https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Asian"
              layout="fill"
            /> 
            <p>Ásia</p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" 
              alt="Africa"
              layout="fill"
            /> 
            <p>África</p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              src="https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
              alt="Oceania"
              layout="fill"
            /> 
            <p>Oceania</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Home
