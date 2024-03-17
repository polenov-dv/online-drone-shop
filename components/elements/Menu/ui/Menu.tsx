import cls from './Menu.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/hooks/useLang'
import { closeMenu } from '@/context/modals'
import homeImg from '@/public/icon/home.svg'
import insectsImg from '@/public/icon/insects.svg'
import droneImg from '@/public/icon/drone.svg'
import pinMapImg from '@/public/icon/pin-map.svg'
import dronesImg from '@/public/icon/drones.svg'
import newsImg from '@/public/icon/news.svg'
import companyImg from '@/public/icon/company.svg'
import phoneImg from '@/public/icon/phone_menu.svg'
import whatsappImg from '@/public/icon/whatsapp.svg'
import weChatImg from '@/public/icon/weChat.svg'
import telegramImg from '@/public/icon/telegram.svg'

export const Menu = () => {
  const { lang, translation } = useLang()

  const handleCloseMenu = () => {
    closeMenu()
  }

  return (
    <nav className={cls.nav}>
      <ul className={cls.nav_content}>
        <li className={cls.nav_item}>
          <Link href='/' className={cls.nav_link} onClick={handleCloseMenu}>
            <div className={cls.nav_img}>
              <Image src={homeImg} alt='Home' />
            </div>
            <p className={cls.nav_text}>{translation[lang].menu.main}</p>
          </Link>
        </li>
        <li className={cls.nav_item}>
          <Link
            href='/entomophages'
            className={cls.nav_link}
            onClick={handleCloseMenu}
          >
            <div className={cls.nav_img}>
              <Image src={insectsImg} alt='Insects' />
            </div>
            <p className={cls.nav_text}>
              {translation[lang].menu.entomophages}
            </p>
          </Link>
        </li>
        <li className={cls.nav_item}>
          <Link
            href='/spraying'
            className={cls.nav_link}
            onClick={handleCloseMenu}
          >
            <div className={cls.nav_img}>
              <Image src={droneImg} alt='Drone' />
            </div>
            <p className={cls.nav_text}>{translation[lang].menu.spraying}</p>
          </Link>
        </li>
        <li className={cls.nav_item}>
          <Link
            href='/monitoring'
            className={cls.nav_link}
            onClick={handleCloseMenu}
          >
            <div className={cls.nav_img}>
              <Image src={pinMapImg} alt='PinMap' />
            </div>
            <p className={cls.nav_text}>{translation[lang].menu.cartography}</p>
          </Link>
        </li>
        <li className={cls.nav_item}>
          <a className={cls.nav_link} href='#'>
            <div className={cls.nav_img}>
              <Image src={dronesImg} alt='Drones' />
            </div>
            <p className={cls.nav_text}>{translation[lang].menu.catalog}</p>
          </a>
        </li>
        <li className={cls.nav_item}>
          <Link href='/news' className={cls.nav_link} onClick={handleCloseMenu}>
            <div className={cls.nav_img}>
              <Image src={newsImg} alt='News' />
            </div>
            <p className={cls.nav_text}>{translation[lang].menu.news}</p>
          </Link>
        </li>
        <li className={cls.nav_item}>
          <Link
            href='/about'
            className={cls.nav_link}
            onClick={handleCloseMenu}
          >
            <div className={cls.nav_img}>
              <Image src={companyImg} alt='Company' />
            </div>
            <p className={cls.nav_text}>{translation[lang].menu.about}</p>
          </Link>
        </li>
        <li className={cls.nav_item}>
          <Link
            href='/contacts'
            className={cls.nav_link}
            onClick={handleCloseMenu}
          >
            <div className={cls.nav_img}>
              <Image src={phoneImg} alt='Phone' />
            </div>
            <p className={cls.nav_text}>{translation[lang].menu.contacts}</p>
          </Link>
        </li>
        <li className={cls.nav_line} />
        <li>
          <ul className={cls.chats}>
            <li className={cls.chats_item}>
              <Link href='/'>
                <Image src={whatsappImg} alt='Whatsapp' />
              </Link>
            </li>
            <li className={cls.chats_item}>
              <Link href='/'>
                <Image src={weChatImg} alt='WeChat' />
              </Link>
            </li>
            <li className={cls.chats_item}>
              <Link href='/'>
                <Image src={telegramImg} alt='Telegram' />
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
