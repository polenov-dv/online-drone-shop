import cls from './MenuLang.module.scss'
import { AllowedLangs } from '@/constans/lang'
import { setLang } from '@/context/lang'
import { useLang } from '@/hooks/useLang'

export const MenuLang = () => {
  const { lang } = useLang()

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs)
    localStorage.setItem('lang', JSON.stringify(lang))
  }

  const handleSwitchLangToRu = () => handleSwitchLang('ru')
  const handleSwitchLangToEn = () => handleSwitchLang('en')

  return (
    <div className={cls.menu_lang}>
      <button
        className={
          lang === 'en' ? ` ${cls.lang} ${cls.lang_active}` : `${cls.lang}`
        }
        onClick={handleSwitchLangToEn}
      >
        EN
      </button>
      <button
        className={
          lang === 'ru' ? `${cls.lang} ${cls.lang_active}` : `${cls.lang}`
        }
        onClick={handleSwitchLangToRu}
      >
        RU
      </button>
    </div>
  )
}
