import cls from './SectionProducts.module.scss'
import Image from 'next/image'
import droneOneImg from '@/public/img/drone-product-1.png'
import droneTwoImg from '@/public/img/drone-product-2.png'
import droneThreeImg from '@/public/img/drone-product-3.png'
import { DescriptionSection } from '@/components/elements/DescriptionSection'

export const SectionProducts = () => (
  <section className={cls.sectionProducts}>
    <div className={`${cls.inner} container`}>
      <DescriptionSection title='Наши предложения' text='Наша продукция' />

      <div className={cls.content}>
        <div className={cls.content_item}>
          <Image className={cls.item_img} src={droneOneImg} alt='' />
          <div className={cls.item_desc}>
            <p className={cls.item_title}>Агродрон AGR A22</p>
            <p className={cls.item_brend}>Бренд: AGR</p>
            <p className={cls.item_model}>Модель: 101-0101</p>
            <p className={cls.item_price}>$15001.27</p>
            <button className={cls.item_btn}>Добавить в корзину</button>
          </div>
        </div>

        <div className={cls.content_item}>
          <Image className={cls.item_img} src={droneTwoImg} alt='' />
          <div className={cls.item_desc}>
            <p className={cls.item_title}>Дрон- Картограф STS M8</p>
            <p className={cls.item_brend}>Бренд: STS</p>
            <p className={cls.item_model}>Модель: 101-11</p>
            <p className={cls.item_price}>$18206.30</p>
            <button className={cls.item_btn}>Добавить в корзину</button>
          </div>
        </div>

        <div className={cls.content_item}>
          <Image className={cls.item_img} src={droneThreeImg} alt='' />
          <div className={cls.item_desc}>
            <p className={cls.item_title}>Дрон - Картограф STS M1550</p>
            <p className={cls.item_brend}>Бренд: STS</p>
            <p className={cls.item_model}>Модель: 100-10</p>
            <p className={cls.item_price}>$13802.86</p>
            <button className={cls.item_btn}>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  </section>
)
