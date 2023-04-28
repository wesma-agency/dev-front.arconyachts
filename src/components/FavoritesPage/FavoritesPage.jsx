import React, { memo } from 'react'
import styled from 'styled-components'
import { typography, fullWidth } from 'utils/mixins'
import { media } from 'utils/vars'
import { FavoritesData } from './FavoritesPageMock'
import CatalogSort from '../CatalogPage/CatalogSort'
import CatalogList from '../CatalogPage/CatalogList'
import { favoritesStatic } from 'config/static/favorites'
import {
  StyledToggle,
  StyledToggleBlock,
} from 'components/MainPage/MainCatalog/MainCatalog.styled'
import { useHorizontalScroll } from 'utils/useHorizontalScroll'

import ArrowIcon from 'assets/icons/arrow.svg'
import {
  ScrollOverlayRight,
  ScrollOverlay,
} from 'components/Yacht/YachtPlan/YachtPlan.styled'
import { PATH } from 'config/path'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useTranslation } from 'utils/useTranslation'
import { transformYacht } from 'utils/transformYacht'
import { StyledNotFound } from 'components/CatalogPage/CatalogList/CatalogList.styled'
import { useSelector } from 'react-redux'

const Header = styled.h1`
  ${typography.h1};
  line-height: 130%;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 38px;

  ${media.tablet} {
    margin-top: 60px;
  }
`

const Scroll = styled.div`
  width: 100%;
  position: relative;
  overflow-x: auto;
`

const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
`

const Toggle = styled(StyledToggle)`
  padding: 20px;
  white-space: nowrap;
  display: inline-block;
`

const ToggleWrapper = styled(StyledToggleBlock)`
  width: 100%;
  position: relative;
  display: block;
  white-space: nowrap;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background: transparent;
  }

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
`

const StyledCatalogList = styled(CatalogList)`
  margin-bottom: 40px;
`

const FavoritesPage = ({ foundList, paginationData }) => {
  const favoritesStatic = useTranslation('favoritesStatic')
  const { header } = favoritesStatic
  const { query } = useRouter()

  const {
    project,
    ['charter-week']: charterWeek,
    ['charter-day']: charterDay,
    sale,
  } = useSelector((state) => state.favorites)

  const {
    leftClick,
    rightClick,
    tabsWrapper,
    wrapperRef,
    showScrollFade,
    onScroll,
  } = useHorizontalScroll()

  const tabs = [
    { title: favoritesStatic.sale, type: 'sale' },
    { title: favoritesStatic.charterWeek, type: 'charter-week' },
    { title: favoritesStatic.charterDay, type: 'charter-day' },
    { title: favoritesStatic.projects, type: 'project' },
  ]
  const transformType =
    query.type === 'charter-week'
      ? 'charter-week'
      : query.type === 'charter-day'
      ? 'charter-day'
      : query.type === 'project'
      ? 'project'
      : 'sale'

  const yachtCatalogStatic = useTranslation('yachtCatalogStatic')

  return (
    <>
      <Header>{header}</Header>
      <CatalogSort
        pathname={PATH.FAVORITES}
        isProject={query.type === 'project'}
      />
      <Wrapper ref={wrapperRef}>
        <ScrollOverlay
          show={showScrollFade?.left && 'show'}
          onClick={leftClick}
        >
          <ArrowIcon />
        </ScrollOverlay>
        <ScrollOverlayRight
          show={showScrollFade?.right && 'show'}
          onClick={rightClick}
        >
          <ArrowIcon />
        </ScrollOverlayRight>
        <Scroll ref={tabsWrapper} onScroll={onScroll}>
          <ToggleWrapper>
            {tabs.map(({ type, title }) => (
              <Link prefetch={false} 
                passHref
                key={type}
                href={{ pathname: PATH.FAVORITES, query: { type } }}
              >
                <Toggle as="a" isActive={query.type === type && 'active'}>
                  {title}
                </Toggle>
              </Link>
            ))}
          </ToggleWrapper>
        </Scroll>
      </Wrapper>
      {transformType === 'charter-week' && charterWeek.length < 1 && (
        <StyledNotFound>{yachtCatalogStatic.notFound}</StyledNotFound>
      )}
      {transformType === 'charter-day' && charterDay.length < 1 && (
        <StyledNotFound>{yachtCatalogStatic.notFound}</StyledNotFound>
      )}
      {transformType === 'sale' && sale.length < 1 && (
        <StyledNotFound>{yachtCatalogStatic.notFound}</StyledNotFound>
      )}
      {transformType === 'project' && project.length < 1 && (
        <StyledNotFound>{yachtCatalogStatic.notFound}</StyledNotFound>
      )}
      <StyledCatalogList
        yachtsList={foundList.map((item) =>
          transformYacht(item, transformType)
        )}
        total={paginationData.yachts.last_page}
        pathname={PATH.FAVORITES}
        catalogPage={false}
      />
    </>
  )
}

export default FavoritesPage
