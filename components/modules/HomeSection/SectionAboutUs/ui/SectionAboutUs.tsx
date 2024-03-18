'use client'

import cls from './SectionAboutUs.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import { SliderAboutUs } from '@/components/elements/SliderAboutUs'
import droneImg from '@/public/icon/drone-about-us.svg'
import lineImg from '@/public/icon/about-us-line.svg'

export const SectionAboutUs = () => {
  const [bgImg, setBgImg] = useState('')

  return (
    <section className={cls.sectionAboutUs}>
      <div
        className={cls.sectionAboutBg}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className={cls.slider}>
          <SliderAboutUs activeImg={0} setBgImg={setBgImg} />
        </div>{' '}
      </div>

      <div className={`${cls.inner} container`}>
        <div className={cls.info}>
          <p className={cls.info_title}>
            AgroScout - беспилотные технологии для сельского хозяйства и
            промышлености
          </p>
          <div className={cls.info_drone}>
            <Image className={cls.line_img} src={lineImg} alt='' />
            <Image className={cls.drone_img} src={droneImg} alt='' />
          </div>
          <ul className={cls.info_text}>
            <li className={cls.info_text_item}>
              <p className={cls.info_text_item_title}>50 000 Га</p>
              <p className={cls.info_text_item_about}>ежегодной обработки</p>
            </li>
            <li className={cls.info_text_item}>
              <p className={cls.info_text_item_title}>30%</p>
              <p className={cls.info_text_item_about}>экономии средств</p>
            </li>
            <li className={cls.info_text_item}>
              <p className={cls.info_text_item_title}>10 команд</p>
              <p className={cls.info_text_item_about}>специалистов</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
