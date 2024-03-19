import cls from './SectionClients.module.scss'
import Image from 'next/image'
import clientOneImg from '@/public/img/client-1.png'
import clientTwoImg from '@/public/img/client-2.png'
import clientThreeImg from '@/public/img/client-3.png'
import clientFourImg from '@/public/img/client-4.png'
import { DescriptionSection } from '@/components/elements/DescriptionSection'

export const SectionClients = () => (
  <div className={cls.sectionClients}>
    <div className={`${cls.inner} container`}>
      <DescriptionSection title='Наши клиенты' text='Партнеры' />

      <ul className={cls.clients}>
        <li className={cls.client}>
          <Image className={cls.client_img_one} src={clientOneImg} alt='' />
        </li>
        <li className={cls.client}>
          <Image className={cls.client_img_two} src={clientTwoImg} alt='' />
        </li>
        <li className={cls.client}>
          <Image className={cls.client_img_three} src={clientThreeImg} alt='' />
        </li>
        <li className={cls.client}>
          <Image className={cls.client_img_four} src={clientFourImg} alt='' />
        </li>
      </ul>
    </div>
  </div>
)
