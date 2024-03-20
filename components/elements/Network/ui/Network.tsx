import cls from './Network.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import vkImg from '@/public/icon/vk.svg'
import instagramImg from '@/public/icon/instagram.svg'
import tickTokImg from '@/public/icon/tickTok.svg'

interface NetworkProps {
  type: 'header' | 'footer'
}

export const Network = ({ type }: NetworkProps) => (
  <ul
    className={
      type === 'header' ? `${cls.network} ${cls.network_header}` : cls.network
    }
  >
    <li
      className={
        type === 'header'
          ? `${cls.network_item} ${cls.network_item_header}`
          : cls.network_item
      }
    >
      <Link className={cls.network_link} href='/'>
        <Image
          className={
            type === 'header' ? cls.network_img_header : cls.network_img_footer
          }
          src={vkImg}
          alt='VK'
        />
      </Link>
    </li>

    <li
      className={
        type === 'header'
          ? `${cls.network_item} ${cls.network_item_header}`
          : cls.network_item
      }
    >
      <Link className={cls.network_link} href='/'>
        <Image
          className={
            type === 'header' ? cls.network_img_header : cls.network_img_footer
          }
          src={instagramImg}
          alt='Instagram'
        />
      </Link>
    </li>
    <li
      className={
        type === 'header'
          ? `${cls.network_item} ${cls.network_item_header}`
          : cls.network_item
      }
    >
      <Link className={cls.network_link} href='/'>
        <Image
          className={
            type === 'header' ? cls.network_img_header : cls.network_img_footer
          }
          src={tickTokImg}
          alt='TickTok'
        />
      </Link>
    </li>
  </ul>
)
