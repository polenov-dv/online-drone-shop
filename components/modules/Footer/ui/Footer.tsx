import cls from './Footer.module.scss'
import Image from 'next/image'
import { Logo } from '@/components/elements/Logo'
import phoneImg from '@/public/icon/phone.svg'
import { Network } from '@/components/elements/Network'

export const Footer = () => (
  <div className={cls.footer}>
    <div className={`${cls.inner} container`}>
      <div className={cls.info}>
        <Logo />
        <a className={cls.info_phone} href='tel:+79999999999'>
          <Image className={cls.phone} src={phoneImg} alt='Phone' />
          <span>+7999 99999 99</span>
        </a>
      </div>

      <div className={cls.social}>
        <p className={cls.social_text}>Подписывайтесь на наши соц. сети</p>
        <Network type='footer' />
      </div>
    </div>
  </div>
)
