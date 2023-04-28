import { PATH } from 'config/path'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { transformNews } from 'utils/transformNews'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useTranslation } from 'utils/useTranslation'
import CatalogFilters from '../CatalogPage/CatalogFilters'
import NewsList from './NewsList'
import {
  Header,
  StyledFeedbackForm,
  StyledFiltersIcon,
} from './NewsMainPage.styled'
import { FormType } from 'utils/formType'

const NewsMainPage = ({ filterItems, news, pagination, yachtsList }) => {
  const { title, subscription } = useTranslation('newsStatic')
  const [isMenuOpened, setOpenMenu] = useState(false)
  const { query, locale } = useRouter()
  const { tablet } = useBreakpoint()
  const handleMenuClick = () => {
    setOpenMenu(!isMenuOpened)
  }

  const page = +query.page || 1

  const perPage = pagination?.news?.per_page ? pagination.news.per_page : 0

  let data = news?.news?.data ? news.news.data : []

  const [foundList, setFoundList] = useState(
    data.slice(perPage * page - perPage, perPage * page)
  )
  useEffect(() => {
    setFoundList(
      tablet ? data : data.slice(perPage * page - perPage, perPage * page)
    )
  }, [data, tablet])
  return (
    <>
      <Header>
        {title}
        <StyledFiltersIcon onClick={handleMenuClick} />
      </Header>

      <CatalogFilters
        isFiltersShown={isMenuOpened}
        closeFilters={handleMenuClick}
        filtersNumber={5}
        pathname={PATH.NEWS}
        filterItems={filterItems}
        filtersArray={['tag', 'shipyard']}
        arrayParams={['tag']}
      />
      <NewsList
        list={foundList.map((item) => transformNews(item, locale === 'ru'))}
        pagination={pagination.news}
        total={pagination.news.last_page}
      />
      {/* <YachtSlider
        data={yachtsList.map((item) => transformYacht(item))}
        showButton={false}
        isNews
      /> */}
      <StyledFeedbackForm
        {...subscription}
        wideText
        formType={FormType.newsSubscription}
      />
    </>
  )
}

export default NewsMainPage
