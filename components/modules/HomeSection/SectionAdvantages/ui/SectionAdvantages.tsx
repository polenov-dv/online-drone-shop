'use client'

import { useState } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import cls from './SectionAdvantages.module.scss'
import { DescriptionSection } from '@/components/elements/DescriptionSection'

import Image from 'next/image'

import peopleImg from '@/public/icon/people.svg'
import techImg from '@/public/icon/tech.svg'
import savingsImg from '@/public/icon/savings.svg'
import servicesImg from '@/public/icon/services.svg'
import droneAdvImg from '@/public/icon/drone-adv.svg'
import allServicesImg from '@/public/icon/all-services.svg'
import droneBgImg from '@/public/icon/drone-bg.svg'

const slideOne = {
  img: peopleImg,
  title: 'Квалифицированные сотрудники',
  text: `Все наши сотрудники имеют многолетний опыт работы в сфере беспилотной авиации. 
	Нами было реализовано множество проектов различной тематики и самой различной сложности.`,
}

const slideTwo = {
  img: techImg,
  title: 'Высокотехнологичное оборудование',
  text: `Наша компания использует современное оборудование, которое
	обеспечивает высокое качество в выполнении поставленных задач.`,
}

const slideThree = {
  img: savingsImg,
  title: 'Экономия',
  text: `Использование беспилотных технологий экономит вам много времени и
	денег. За счет отсутствия технологической колеи сохраняется до 6%
	урожая. Снижение расхода препаратов до 30%`,
}

const slideFour = {
  img: servicesImg,
  title: 'Оперативность',
  text: `За рабочую смену наши специалисты способны защитить более 1000
	гектар ваших полей, кустарников и деревьев.`,
}

const slideFive = {
  img: droneAdvImg,
  title: 'Собственное производство',
  text: `Мы разрабатываем и производим беспилотные летательные аппараты,
	поэтому знаем все тонкости их работы и можем настроить их под
	конкретные задачи и потребности клиентов.`,
}

const slideSix = {
  img: allServicesImg,
  title: 'Свой сервис',
  text: `Любой наш аппарат можно сдать на плановое техническое обслуживание
	или же в ремонт в наш собственный сервис, который гарантирует
	качество и оперативность выполнения работ.`,
}

const sliderContent = [
  slideOne,
  slideTwo,
  slideThree,
  slideFour,
  slideFive,
  slideSix,
]

export const SectionAdvantages = () => {
  const [activeSlide, setActiveSlide] = useState(1)
  const isMedia630 = useMediaQuery(630)

  return (
    <section className={cls.sectionAdvantages}>
      <div className={`${cls.inner} container`}>
        <DescriptionSection
          title='Почему нам доверяют?'
          text='Наши преимущества'
        />

        <div className={cls.content}>
          <Image className={cls.drone_bg} src={droneBgImg} alt='' />

          {sliderContent.map((slide, index) => (
            <div
              key={slide.title}
              className={cls.content_item}
              style={
                isMedia630
                  ? activeSlide === index
                    ? { display: `block` }
                    : { display: `none` }
                  : { display: `block` }
              }
            >
              <p className={cls.item_title}>
                <Image className={cls.item_img} src={slide.img} alt='People' />
                {slide.title}
              </p>
              <p className={cls.item_text}>{slide.text}</p>
            </div>
          ))}
        </div>

        <div className={cls.nav}>
          {sliderContent.map((slider, index) => (
            <span
              key={slider.title}
              onClick={() => setActiveSlide(index)}
              className={
                index === activeSlide
                  ? `${cls.nav_item} ${cls.active}`
                  : cls.nav_item
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
