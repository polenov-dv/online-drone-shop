import cls from './DescriptionSection.module.scss'

interface DescriptionSectionProps {
  title: string
  text: string
}

export const DescriptionSection = ({
  title,
  text,
}: DescriptionSectionProps) => (
  <div className={cls.desc}>
    <h2 className={cls.desc_title}>{title}</h2>
    <h4 className={cls.desc_text}>{text}</h4>
  </div>
)
