'use client'

import cls from './SectionServices.module.scss'
import Image from 'next/image'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import servicesBgImg from '@/public/img/services-bg-one.jpg'
import servicesBgImgTwo from '@/public/img/services-bg-two.jpg'

export const SectionServices = () => {
  const isMedia525 = useMediaQuery(525)

  return (
    <div className={cls.sectionServices}>
      <div className={`${cls.inner} container`}>
        <div className={cls.sectionServicesBg}>
          <Image
            className={cls.item_img}
            src={isMedia525 ? servicesBgImgTwo : servicesBgImg}
            layout='fill'
            objectFit='cover'
            alt=''
          />
          <div className={cls.sectionServicesBgTwo} />
        </div>

        <div className={cls.content}>
          <h3 className={cls.content_title}>Оказываем услуги!</h3>
          <p className={cls.content_text}>
            Принимаем заявки по биологической и химической защите растений
            дронами, картографии и мониторингу.
          </p>
          <button className={cls.content_btn}>Оставить заявку</button>
        </div>
      </div>
    </div>
  )
}
