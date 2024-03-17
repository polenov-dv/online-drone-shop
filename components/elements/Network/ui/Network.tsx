import cls from './Network.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import vkImg from '@/public/icon/vk.svg'
import instagramImg from '@/public/icon/instagram.svg'
import tickTokImg from '@/public/icon/tickTok.svg'

export const Network = () => (
  <ul className={cls.network}>
    <li className={cls.network_item}>
      <Link className={cls.network_link} href='/'>
        <Image className={cls.network_img} src={vkImg} alt='VK' />
      </Link>
    </li>
    <li className={cls.network_item}>
      <Link className={cls.network_link} href='/'>
        <Image className={cls.network_img} src={instagramImg} alt='Instagram' />
      </Link>
    </li>
    <li className={cls.network_item}>
      <Link className={cls.network_link} href='/'>
        <Image className={cls.network_img} src={tickTokImg} alt='TickTok' />
      </Link>
    </li>
  </ul>
)
