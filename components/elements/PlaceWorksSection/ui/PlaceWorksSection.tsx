import cls from './PlaceWorksSection.module.scss'
import Image from 'next/image'
import mapImg from '@/public/img/map.png'

export const PlaceWorksSection = () => (
  <div className={cls.placeWorksSection}>
    <div className={`${cls.desc} container`}>
      <h2 className={cls.desc_title}>Где мы работаем</h2>
      <h4 className={cls.desc_text}>Регионы присутствия</h4>
    </div>

    <div className={`${cls.inner} container`}>
      <div className={cls.region}>
        <ol className={cls.region_content}>
          <li>Московская область</li>
          <li>Ростовская область</li>
          <li>Краснодарский край</li>
          <li>Ставропольский край</li>
          <li>Северная Осетия</li>
          <li>Кабардино-Балкария</li>
          <li>Пензеская область</li>
          <li>Белгородская область</li>
          <li>Саратовская область</li>
          <li>Воронежская область</li>
          <li>Волгоградская область</li>
          <li>Астраханская область</li>
        </ol>

        <ol className={cls.region_content}>
          <li>Самарская область</li>
          <li>Липецкая область</li>
          <li>Орловская область</li>
          <li>Курская область</li>
          <li>Ульяновская область</li>
          <li>Карачаево-Черкессия</li>
          <li>Брянская область</li>
          <li>Республика Татарстан</li>
          <li>Тамбовская область</li>
          <li>Тульская область</li>
          <li>Калужская область</li>
          <li>Республика Крым</li>
        </ol>
      </div>

      <div className={cls.map}>
        <Image className={cls.map_img} src={mapImg} alt='Lne' />
      </div>
    </div>
  </div>
)
