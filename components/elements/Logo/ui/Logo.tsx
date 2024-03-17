import cls from './Logo.module.scss'
import Link from 'next/link'
import logoImg from '@/public/icon/logo.svg'
import Image from 'next/image'

export const Logo = () => (
  <Link href='/'>
    <Image className={cls.logo} src={logoImg} alt='Логотип БПЛА' />
  </Link>
)
