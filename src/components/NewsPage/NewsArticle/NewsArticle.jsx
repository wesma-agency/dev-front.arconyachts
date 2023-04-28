import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { useRouter } from 'next/router'
import React from 'react'
import locale from 'utils/dataLocale'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useTranslation } from 'utils/useTranslation'
import {
  Article,
  Date as DateWrapper,
  Header,
  ImageWrapper,
  Img,
  TextWrapper,
} from './NewsArticle.styled'

const getDate = (start_at, isRussian) => {
  return format(
    new Date(
      +start_at.slice(0, 10).split('-')[0],
      +start_at.slice(0, 10).split('-')[1] - 1,
      +start_at.slice(0, 10).split('-')[2]
    ),
    isRussian ? 'dd MMM yyyy' : 'dd MMMM yyyy',
    { locale: isRussian ? locale : enUS }
  )
}
const NewsArticle = ({ article }) => {
  const { content, detail, start_at, end_at, title } = article
  const { tablet } = useBreakpoint()
  const { locale } = useRouter()
  const newsStatic = useTranslation('newsStatic')
  return (
    <Article>
      <DateWrapper>
        {!tablet && newsStatic.date}
        {getDate(start_at, locale === 'ru')}
      </DateWrapper>
      <Header>{title}</Header>
      {detail && (
        <ImageWrapper>
          <Img
            src={detail.fullpath}
            alt={title}
            width={1024}
            height={600}
            cover="cover"
          />
        </ImageWrapper>
      )}
      <TextWrapper dangerouslySetInnerHTML={{ __html: content }} />
    </Article>
  )
}

export default NewsArticle
