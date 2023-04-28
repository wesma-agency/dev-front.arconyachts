import YachtSlider from 'components/Slider/YachtSlider'
import { PATH } from 'config/path'
import styled from 'styled-components'
import { transformNews } from 'utils/transformNews'
import { media } from 'utils/vars'
import { useTranslation } from 'utils/useTranslation'
import { useRouter } from 'next/router'

export const SliderWrapper = styled.div`
  width: 100%;
  margin-bottom: 70px;
  margin-top: 167px;

  ${media.fullhd} {
    margin-top: 100px;
  }
  ${media.notebook} {
    margin-top: 80px;
    margin-bottom: 120px;
  }

  ${media.notebook} {
    margin-top: 60px;
    margin-bottom: 20px;
  }
`

const MainNews = ({ news, title, isMain = true }) => {
  const homeStatic = useTranslation('homeStatic')
  const { locale } = useRouter()
  return (
    <SliderWrapper>
      <YachtSlider
        title={title}
        withoutPadding
        data={news.map((item) => transformNews(item, locale === 'ru'))}
        showButton={true}
        isNews
        withNewsCards={true}
        buttonText={homeStatic.news.button}
        isMain={isMain}
        buttonLink={PATH.NEWS}
      />
    </SliderWrapper>
  )
}

export default MainNews
