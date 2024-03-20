'use client'

import { useState } from 'react'
import Image from 'next/image'
import cls from './SectionWhatsNew.module.scss'
import { DescriptionSection } from '@/components/elements/DescriptionSection'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import whatsNewOneImg from '@/public/img/whats-new-1.jpg'
import whatsNewTwoImg from '@/public/img/whats-new-2.jpg'
import whatsNewThreeImg from '@/public/img/whats-new-3.jpg'

const slideOne = {
  img: whatsNewOneImg,
  title: 'Дроны – будущее сельского хозяйства',
  text: `Новые технологии не обходят стороной и самую консервативную
	отрасль – сельское хозяйство. Согласно прогнозам международной
	общественной организации Association for Unmanned Vehicle Systems
	International, в скором времени агросектор станет крупнейшим
	потребителем дронов – беспилотных летательных аппаратов (БПЛА).`,
}

const slideTwo = {
  img: whatsNewTwoImg,
  title: 'Зачем нужны беспилотники в сельском хозяйстве?',
  text: `Использование дронов в земледелии и в целом в сельском хозяйстве -
	одно из наиболее перспективных направлений применения этой
	технологии. БЛА могут быть эффективно использованы для
	планирования и контроля этапов сельскохозяйственного производства,
	а также для химической обработки посевов и других растений.`,
}

const slideThree = {
  img: whatsNewThreeImg,
  title: 'Создание цифровых карт и контуров полей',
  text: `Многие руководители агрохозяйств только приблизительно знают
	площади своих полей, и это негативно влияет на точность расчетов
	внесения мин-удобрений и подсчета полученной продукции. Чтобы
	эффективно управлять сельскохозяйственным предприятием потребуется
	точное знание посевных площадей.`,
}

const sliderContent = [slideOne, slideTwo, slideThree]

export const SectionWhatsNew = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const isMedia1400 = useMediaQuery(1400)
  const isMedia550 = useMediaQuery(550)

  return (
    <div className={cls.sectionWhatsNew}>
      <div className={`${cls.inner} container`}>
        <DescriptionSection title='Что у нас нового' text='Новости' />

        <div className={cls.content}>
          {sliderContent.map((slide, index) => (
            <div
              key={slide.title}
              className={cls.content_item}
              style={
                !isMedia1400 && !isMedia550
                  ? { display: `block` }
                  : isMedia1400 && !isMedia550
                    ? index === activeSlide || index === activeSlide + 1
                      ? { display: `block` }
                      : { display: `none` }
                    : isMedia1400 && isMedia550
                      ? activeSlide === index
                        ? { display: `block` }
                        : { display: `none` }
                      : { display: `block` }
              }
            >
              <div className={cls.item_img}>
                <Image className={cls.img_news} src={slide.img} alt='' />
              </div>

              <p className={cls.item_title}>{slide.title}</p>

              <p className={cls.item_text}>{slide.text}</p>

              <a href='#' className={cls.all_text}>
                Читать полностью
              </a>
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
    </div>
  )
}
