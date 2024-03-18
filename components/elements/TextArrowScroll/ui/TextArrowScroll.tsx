'use client'

import { useState } from 'react'
import Image from 'next/image'
import cls from './TextArrowScroll.module.scss'
import arrowUpImg from '@/public/icon/arrow-up-circle.svg'
import arrowDownImg from '@/public/icon/arrow-down-circle.svg'

interface TextArrowScrollProps {
  text?: string
}

export const TextArrowScroll = ({ text }: TextArrowScrollProps) => {
  const [activeText, setActiveText] = useState(true)

  return (
    <div className={cls.textArrowScroll}>
      <input
        type='checkbox'
        className={cls.read_more_checker}
        id='read_more_checker'
      />
      <div className={cls.limited}>
        <div
          className={
            activeText ? `${cls.bottom} ${cls.bottom_after}` : cls.bottom
          }
        >
          {text}
        </div>
      </div>
      <label
        onClick={() => setActiveText(!activeText)}
        htmlFor='read_more_checker'
        className={cls.read_more_button}
      >
        <span className={cls.btn_line} />
        {activeText ? (
          <Image className={cls.btn_img} src={arrowDownImg} alt='' />
        ) : (
          <Image className={cls.btn_img} src={arrowUpImg} alt='' />
        )}
        <span className={cls.btn_line} />
      </label>
    </div>
  )
}
