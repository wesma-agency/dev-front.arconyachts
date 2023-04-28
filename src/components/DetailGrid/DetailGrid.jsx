import React from 'react'
import { useBreakpoint } from 'utils/useBreakpoint'
import { v4 } from 'uuid'
import {
  ContentWrapper,
  StyledButton,
  StyledButtonWrapper,
  StyledCaption,
  StyledCard,
  StyledDescription,
  StyledDescriptionCaption,
  StyledDescriptionWrapper,
  StyledHeader,
  StyledHeaderWrapper,
  StyledWrapper,
} from './DetailGrid.styled'
import Link from 'next/link'

const initYachtsList = [
  {
    isFavorite: true,
  },
  {
    images: ['/img/yachts-list/slide7.png'],
    title: 'Heesen Explorer Xventure 57m',
  },
  {
    badge: 'Эксклюзив',
    title: 'Heesen TRITON 50m',
  },
  {
    isFavorite: true,
  },
  {
    images: ['/img/yachts-list/slide7.png'],
    title: 'Heesen Explorer Xventure 57m',
  },
  {
    badge: 'Эксклюзив',
    title: 'Heesen TRITON 50m',
  },
]

const DetailGrid = ({
  title = 'Продажа яхт',
  caption = '25 доступно',
  description = `
    В нашем каталоге вы можете найти доступную для покупки модель Tatiana
    длиной 25,97 м, на борту которой расположено 4 каюты с 11 спальными
    местами. У нас вы также можете взять яхту в аренду. Среди предложений
    чартера вы найдете модель Ionian Princess длиной 45 метров с 6
    элегантными каютами. Это судно содержит полный набор оборудования для
    развлечения и отдыха, а также идеально сочетает мореходные
    характеристики и роскошь, что делает его идеальным выбором для
    незабываемого опыта морской прогулки.`,
  buttonTitle = 'Посмотреть все яхты',
  descriptionCaption = false,
  onClick = () => {},
  yachts = initYachtsList,
  isProject = false,
  shownQuantity = 6,
  navigationRef,
  className,
  isBuilding = false,
  showButton = true,
  buttonHref,
  ...props
}) => {
  const { notebook } = useBreakpoint()
  return (
    <StyledWrapper ref={navigationRef} className={className} {...props}>
      <StyledHeaderWrapper>
        <StyledHeader>{title}</StyledHeader>
        {!isProject ? <StyledCaption>{caption}</StyledCaption> : ''}
      </StyledHeaderWrapper>
      <StyledDescription dangerouslySetInnerHTML={{ __html: description }} />
      {descriptionCaption && (
        <StyledDescriptionCaption>
          {descriptionCaption}
        </StyledDescriptionCaption>
      )}
      <ContentWrapper>
        {yachts.slice(0, shownQuantity).map((yacht) => (
          <StyledCard
            {...yacht}
            key={yacht.id || yacht.slug}
            width={notebook ? 335 : 488}
            height={notebook ? 241 : 272}
            isProject={isProject}
          />
        ))}
        {showButton && buttonTitle && (
          <StyledButtonWrapper>
            {buttonHref ? (
              <Link prefetch={false}  href={buttonHref} passHref>
                <StyledButton
                  onClick={onClick}
                  isBuilding={isBuilding}
                  isLink
                >
                  {buttonTitle}
                </StyledButton>
              </Link>
            ) : (
              <StyledButton onClick={onClick} isBuilding={isBuilding}>
                {buttonTitle}
              </StyledButton>
            )}
          </StyledButtonWrapper>
        )}
      </ContentWrapper>
    </StyledWrapper>
  )
}

export default DetailGrid
