import { useRouter } from 'next/router'
import React from 'react'
import { transformNews } from 'utils/transformNews'
import { useTranslation } from 'utils/useTranslation'
import Invitation from '../Invitation'
import YachtSlider from '../Slider/YachtSlider'
import NewsArticle from './NewsArticle'
import { SliderWrapper } from './NewsPage.styled'

const NewsPage = ({ content }) => {
  const { locale } = useRouter()
  const newsStatic = useTranslation('newsStatic')
  return (
    <>
      <NewsArticle article={content} />
      {content.type === 'travel' && content.is_invite && <Invitation />}
      <SliderWrapper>
        <YachtSlider
          title={newsStatic.related.title}
          withoutPadding
          data={content.related.map((item) =>
            transformNews(item, locale === 'ru')
          )}
          showButton={false}
          isNews
          withNewsCards={true}
        />
      </SliderWrapper>
    </>
  )
}

export default NewsPage
