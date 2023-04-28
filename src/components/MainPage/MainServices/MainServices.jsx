import styled from 'styled-components'
import ServiceCard from 'ui/Cards/ServiceCard'
import { typography } from 'utils/mixins'
import { color, media } from 'utils/vars'
import MainSliderContent from '../MainSliderContent'
import { useTranslation } from 'utils/useTranslation'

const StyledCard = styled(ServiceCard)`
  height: auto;
  width: 400px;
  &:last-child {
    margin-right: 0 !important;
  }

  ${media.tablet} {
    width: 100%;
    &:first-child {
      padding-top: 36px;
    }

    & > div:last-child > div:last-child {
      max-width: none;
    }
  }
`

const StyledLabel = styled.span`
  ${typography.h1};
  color: ${color.accentHover};
`

const MainServices = ({ description, ...props }) => {
  const servicesStatic = useTranslation('servicesStatic')
  const getCards = () =>
    servicesStatic.maintenances.map((service, i) => (
      <StyledCard
        key={service.id}
        title={service.name}
        text={service.description}
        link={service.slug}
        isMain={true}
      >
        <StyledLabel>{(i + 1).toString().padStart(2, '0')}</StyledLabel>
      </StyledCard>
    ))
  return (
    <MainSliderContent description={description} {...props}>
      {getCards()}
    </MainSliderContent>
  )
}

export default MainServices
