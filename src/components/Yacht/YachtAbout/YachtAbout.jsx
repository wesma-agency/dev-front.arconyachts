import styled from 'styled-components'
import FeatureCard from 'ui/Cards/FeatureCard'
import { media } from 'utils/vars'
import YachtSliderContent from './../YachtSliderContent'
import { detailYachtStatic } from 'config/static/detailYacht'
import { useTranslation } from 'utils/useTranslation'
import Image from 'next/image'

const StyledCard = styled(FeatureCard)`
  &:last-child {
    margin-right: 0;
  }

  ${media.tablet} {
    &:first-child {
      padding-top: 36px;
    }

    & > div:last-child > div:last-child {
      max-width: none;
    }
  }
`

const YachtAbout = ({
  description,
  aboutRef,
  features,
  isBuilding = false,
  isPrint = false,
  ...props
}) => {
  const getCards = () =>
    features &&
    features.length > 0 &&
    features.map((feature) => (
      <StyledCard
        key={feature.id}
        title={feature.title}
        text={feature.text}
        isBuilding={isBuilding}
      >
        {!!feature.src && (
          <Image src={feature.src} alt={feature.title} width={80} height={80} />
        )}
      </StyledCard>
    ))
  const detailYachtStatic = useTranslation('detailYachtStatic')
  if (isPrint) {
    return getCards()
  }
  return (
    <YachtSliderContent
      description={description}
      aboutRef={aboutRef}
      isBuilding={isBuilding}
      title={detailYachtStatic.aboutTitle}
      {...props}
    >
      {getCards()}
    </YachtSliderContent>
  )
}

export default YachtAbout
