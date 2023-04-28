import React from 'react'
import styled from 'styled-components'
import ServiceCard from 'ui/Cards/ServiceCard'
import { useTranslation } from 'utils/useTranslation'
import { media } from 'utils/vars'
import YachtSliderContent from '../YachtSliderContent'
import { StyledAboutText } from '../YachtSliderContent/YachtSliderContent.styled'

export const StyledCardWrapper = styled.div`
  width: max-content;
  padding-right: 60px;
  box-sizing: content-box;
  ${media.fullhd} {
    padding-right: 50px;
  }
  ${media.notebook} {
    padding-right: 40px;
  }
  ${media.tablet} {
    padding-right: 30px;
  }
  ${media.phablet} {
    padding-right: 20px;
  }
`

export const StyledSection = styled.section`
  margin-top: 200px;
  ${media.notebook} {
    margin-top: 150px;
  }
  ${media.tablet} {
    margin-top: 95px;
  }
`

const StyledSliderContent = styled(YachtSliderContent)`
  ${media.tablet} {
    padding: 0 !important;
    width: 100%;
    transform: none;
  }
  & + ${StyledAboutText} {
    ${media.tablet} {
      font-size: 14px;
      line-height: 22px;
    }
  }
`

const service = [
  {
    number: '01',
    title: 'Менеджмент яхт',
    text: 'Управление экипажем яхты, операционное и финансовое управление',
    link: '/service/management',
  },
  {
    number: '02',
    title: 'Регистрация яхт',
    text: 'Перегоним яхту в нужный пункт, текущее местоположения',
    link: '/service/registration',
  },
  {
    number: '03',
    title: 'Стоянка яхт',
    text: 'Перегоним яхту в нужный пункт, текущее местоположения',
    link: '/service/dock',
  },
  {
    number: '04',
    title: 'Доставка яхт',
    text: 'Зарегистрируем яхту, учтем все ньюансы',
    link: '/service/transportation',
  },
  {
    number: '05',
    title: 'Обслуживание и ремонт',
    text: 'Перегоним яхту в нужный пункт, текущее местоположения',
    link: '/service/management',
  },
]

const StyledServiceCard = styled(ServiceCard)`
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

const YachtService = ({
  managementRef,
  description,
  isPrint,
}) => {
  const servicesStatic = useTranslation('servicesStatic')

  const getCards = servicesStatic.maintenances.map((service, i) => (
    <StyledServiceCard
      key={service.id}
      title={service.name}
      text={service.description}
      link={service.slug}
    >
      {`0${i + 1}`}
    </StyledServiceCard>
  ))

  const detailYachtStatic = useTranslation('detailYachtStatic')

  if (isPrint) {
    return getCards
  }

  return (
    <StyledSection>
      <StyledSliderContent
        title={detailYachtStatic.maintenances.title}
        description={description}
        tabletView={false}
        managementRef={managementRef}
        service={true}
      >
        {getCards}
      </StyledSliderContent>
    </StyledSection>
  )
}

export default YachtService
