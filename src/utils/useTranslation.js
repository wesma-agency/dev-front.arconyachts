import { useRouter } from 'next/router'
import { TranslationContext } from './context/TranslationContext'
import { useContext } from 'react'

export const useTranslation = (textName) => {
  const { locale } = useRouter()
  const translation = useContext(TranslationContext)
  return translation[locale === 'default' ? 'ru' : locale][textName]
}
