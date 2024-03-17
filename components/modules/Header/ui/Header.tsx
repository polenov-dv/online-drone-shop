'use client'
import cls from './Header.module.scss'
import { useUnit } from 'effector-react'
import { $menuIsOpen } from '@/context/modals'
import Image from 'next/image'
import { Logo } from '@/components/elements/Logo'
import phoneImg from '@/public/icon/phone.svg'
import { Network } from '@/components/elements/Network'
import { MenuLang } from '@/components/elements/MenuLang'
import { MenuNav } from '@/components/elements/MenuNav'
import { Menu } from '@/components/elements/Menu'

export const Header = () => {
  const menuIsOpen = useUnit($menuIsOpen)

  return (
    <header className={`${cls.header} container`}>
      <div className={cls.logo_wrapper}>
        <Logo />
        <a className={cls.info_phone} href='tel:+79999999999'>
          <Image className={cls.phone} src={phoneImg} alt='Phone' />
          <span>+7999 99999 99</span>
        </a>
      </div>

      <div className={cls.menu}>
        <Network />
        <MenuLang />
        <MenuNav />
        {menuIsOpen && <Menu />}
      </div>
    </header>
  )
}
