import Pagination from 'components/Pagination'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useTranslation } from 'utils/useTranslation'
import {
  StyledButton,
  StyledCard,
  StyledLink,
  StyledListWrapper,
  StyledMore,
  StyledPlaceholder,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from './CatalogList.styled'

const initYachtsList = [
  {
    isFavorite: true,
  },
  {
    badge: 'Эксклюзив',
    title: 'Heesen TRITON 50m',
  },
  {
    isFavorite: true,
    badge: 'Эксклюзив',
    title: 'Heesen 55M FDHF Pollux',
  },
  {
    images: ['/img/yachts-list/slide7.png'],
    title: 'Heesen Explorer Xventure 57m',
  },
  {
    images: ['/img/yachts-list/slide7.png'],
    title: 'Heesen 50m Aquamarine',
  },
  { title: 'Heesen Altea 50M', badge: 'Новинка' },
  {},
  {
    images: ['https://via.placeholder.com/350x150'],
  },
  {
    images: [
      'https://via.placeholder.com/350x150',
      'https://via.placeholder.com/250x100',
      'https://via.placeholder.com/320x215',
      'https://via.placeholder.com/220x320',
    ],
  },
]

const CatalogList = ({
  openModal,
  yachtsList = [],
  type,
  catalogPage = true,
  withoutLettersSpacing = false,
  withIndent = false,
  pagination = true,
  total,
  pathname,
  limit = 12,
  className,
}) => {
  const { tablet: isTablet } = useBreakpoint()
  const router = useRouter()
  const { query } = router
  const currentPage = +query.page || 1
  const setCurrentPage = (page) => {
    let newQuery = { ...query }
    if (page > 1) {
      newQuery.page = page
    } else {
      delete newQuery.page
    }
    router.push({ pathname, query: newQuery }, undefined, { shallow: true })
  }

  const yachtCatalogStatic = useTranslation('yachtCatalogStatic')

  return (
    <StyledWrapper
      withIndent={withIndent && 'withIndent'}
      className={className}
    >
      <StyledListWrapper>
        {yachtsList.map((yacht, i) => (
          <Fragment key={yacht.id}>
            <StyledCard
              withoutSpacing={withoutLettersSpacing && 'withoutLettersSpacing'}
              {...yacht}
            />
            {catalogPage && isTablet && i > 0 && i % 5 === 0 && (
              <StyledMore>
                <StyledTitle>{yachtCatalogStatic.mobileForm.title}</StyledTitle>
                <StyledText>{yachtCatalogStatic.mobileForm.text}</StyledText>
                <StyledLink onClick={() => openModal(true)}>
                  {yachtCatalogStatic.mobileForm.link}
                </StyledLink>
              </StyledMore>
            )}
          </Fragment>
        ))}
        <StyledPlaceholder />
        <StyledPlaceholder />
        <StyledPlaceholder />
      </StyledListWrapper>
      {isTablet && pagination && total > 1 && currentPage !== total && (
        <StyledButton onClick={() => setCurrentPage(currentPage + 1)}>
          {`${yachtCatalogStatic.moreMobile.pre} ${limit} ${yachtCatalogStatic.moreMobile.past}`}
        </StyledButton>
      )}
      {!isTablet && pagination && total > 1 && (
        <Pagination totalPages={total} pathname={pathname} />
      )}
    </StyledWrapper>
  )
}

export default CatalogList
