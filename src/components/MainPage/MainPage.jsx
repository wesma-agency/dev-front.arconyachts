import RelatedShipyards from 'components/RelatedShipyards'
import React from 'react'
import styled from 'styled-components'
import { typography } from 'utils/mixins'
import { useTranslation } from 'utils/useTranslation'
import { color, media } from 'utils/vars'
import MainBuilding from './MainBuilding'
import MainCatalog from './MainCatalog'
import MainServices from './MainServices'
import MainSlider from './MainSlider'

const StyledAboutSection = styled.section`
  margin-top: 175px;
  margin-bottom: 140px;
  ${media.fullhd} {
    margin-top: 120px;
  }
  ${media.notebook} {
    margin-top: 90px;
  }
  ${media.tablet} {
    margin-top: 77px;
    margin-bottom: 80px;
  }
`

export const StyledHeader = styled.div`
  margin-top: 120px;

  ${media.tablet} {
    margin-top: 50px;
    width: 100%;
  }
`

export const StyledLabel = styled.b`
  ${typography.label};
  opacity: 0.4;
`

export const StyledTitle = styled.h1`
  ${typography.h1}
  font-size: 80px;
  line-height: 130%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 50px;

  max-width: 1104px;

  ${media.tablet} {
    margin-bottom: 35px;
    font-weight: normal;
    font-size: 20px;
    line-height: 150%;

    text-transform: uppercase;
  }
`

const StyledRelatedShipyards = styled(RelatedShipyards)`
  margin-bottom: 85px;

  ${media.tablet} {
    margin-bottom: 40px;
  }
`

const MainPage = ({ banners, shipyards }) => {
  const homeStatic = useTranslation('homeStatic')
  let shipyardsForSort = [...shipyards];
  let sortedShipyards = shipyardsForSort.sort((first, second) => {
      if(first.sort > second.sort) {
          return 1;
      } else if(first.sort === second.sort) {
          return first.name > second.name ? 1 : -1;
      } else {
          return -1;
      }
  })
  return (
    <>
      <StyledHeader>
        <StyledLabel>{homeStatic.label}</StyledLabel>
        <StyledTitle>{homeStatic.title}</StyledTitle>
      </StyledHeader>
      <MainSlider banners={banners} />
      <StyledRelatedShipyards shipyards={sortedShipyards} isMain={true} />
      <MainCatalog />
      <MainBuilding />
      <StyledAboutSection>
        <MainServices
          description={homeStatic.service.description}
          title={homeStatic.service.title}
          tabletView={false}
          service={true}
        />
      </StyledAboutSection>
    </>
  )
}

export default MainPage
