import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import cls from './SliderAboutUs.module.scss'

interface SliderAboutUsProps {
  activeImg: number
  setBgImg: (bgImg: string) => void
}

//Главная
const mainPage = {
  main: '/img/bg-home-about-us.jpg',
  tablet: '/img/bg-home-about-us-tb.jpg',
  mobile: '/img/bg-home-about-us-mb.jpg',
}

//Энтомофаги
const entomophagesPage = {
  main: '/img/bg-en-about-us.jpg',
  tablet: '/img/bg-en-about-us-tb.jpg',
  mobile: '/img/bg-en-about-us-mb.jpg',
}

//Опрыскивание
const sprayingPage = {
  main: '/img/bg-sp-about-us.jpg',
  tablet: '/img/bg-sp-about-us-tb.jpg',
  mobile: '/img/bg-sp-about-us-mb.jpg',
}

//Картография
const monitoringPage = {
  main: '/img/bg-mo-about-us.jpg',
  tablet: '/img/bg-mo-about-us-tb.jpg',
  mobile: '/img/bg-mo-about-us-mb.jpg',
}

//О нас
const aboutPage = {
  main: '/img/bg-ab-about-us.jpg',
  tablet: '/img/bg-ab-about-us-tb.jpg',
  mobile: '/img/bg-ab-about-us-mb.jpg',
}

//Каталог
const catalogPage = {
  main: '/img/bg-ca-about-us.jpg',
  tablet: '/img/bg-ca-about-us-tb.jpg',
  mobile: '/img/bg-ca-about-us-mb.jpg',
}

const arrayImg = [
  mainPage,
  entomophagesPage,
  sprayingPage,
  monitoringPage,
  aboutPage,
  catalogPage,
]

export const SliderAboutUs = ({ activeImg, setBgImg }: SliderAboutUsProps) => {
  const [activeSlide, setActiveSlide] = useState(activeImg)
  const isMedia320 = useMediaQuery(320)
  const isMedia768 = useMediaQuery(768)

  useEffect(() => {
    if (isMedia320) {
      setBgImg(arrayImg[activeSlide].mobile)
    } else if (isMedia768) {
      setBgImg(arrayImg[activeSlide].tablet)
    } else {
      console.log('activeSlide', activeSlide)
      setBgImg(arrayImg[activeSlide].main)
    }
  }, [activeSlide, isMedia320, isMedia768])

  return (
    <div className={cls.content}>
      <div className={cls.nav}>
        <span
          className={cls.arrow}
          onClick={() =>
            activeSlide !== 0 ? setActiveSlide((prev) => prev - 1) : null
          }
        >
          &#10094;
        </span>
        {arrayImg.map((item, index) => (
          <span
            key={index}
            onClick={() => setActiveSlide(index)}
            className={
              index === activeSlide
                ? `${cls.nav_item} ${cls.active}`
                : cls.nav_item
            }
          />
        ))}
        <span
          className={cls.arrow}
          onClick={() =>
            activeSlide < arrayImg.length - 1
              ? setActiveSlide((prev) => prev + 1)
              : null
          }
        >
          &#10095;
        </span>
      </div>
    </div>
  )
}
