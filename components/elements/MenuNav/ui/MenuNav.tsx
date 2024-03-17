import { useUnit } from 'effector-react'
import Image from 'next/image'
import { $menuIsOpen, openMenu, closeMenu } from '@/context/modals'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import cls from './MenuNav.module.scss'
import basketImg from '@/public/icon/basket.svg'
import phoneImg from '@/public/icon/phone.svg'

export const MenuNav = () => {
  const menuIsOpen = useUnit($menuIsOpen)
  const isMedia600 = useMediaQuery(600)

  const menu_burger = menuIsOpen
    ? cls.menu_btn + ' ' + cls.menu_btn_active
    : cls.menu_btn

  const handleClickMenu = () => {
    menuIsOpen ? closeMenu() : openMenu()
  }

  return (
    <div className={cls.menu_nav}>
      <button className={cls.menu_btn}>
        <Image className={cls.menu_img} src={basketImg} alt='Basket' />
      </button>
      <button className={menu_burger} onClick={handleClickMenu}>
        <div className={cls.burger_content}>
          <span />
          <span />
          <span />
        </div>
      </button>
      {isMedia600 && (
        <button className={cls.menu_btn}>
          <Image className={cls.menu_img} src={phoneImg} alt='Phone' />
        </button>
      )}
    </div>
  )
}
