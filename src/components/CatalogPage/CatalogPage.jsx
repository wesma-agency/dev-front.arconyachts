import dynamic from 'next/dynamic'

import YachtSlider from 'components/Slider/YachtSlider'
// import { PATH } from 'config/path'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import styled from 'styled-components'
// import FeedbackModal from 'ui/Modals/FeedbackModal'
import { saleValues } from 'utils/paramsHelpers'
import { transformYacht } from 'utils/transformYacht'
import { useBodyScrollLock } from 'utils/useBodyScrollLock'
// import { useBreakpoint } from 'utils/useBreakpoint'
import { useClickOutside } from 'utils/useClickOutside'
import { useTranslation } from 'utils/useTranslation'
// import CatalogSelection from './CatalogSelection'
import CatalogFilters from './CatalogFilters'
import CatalogList from './CatalogList'
// import { StyledNotFound } from './CatalogList/CatalogList.styled'
import CatalogSearch from './CatalogSearch'
import CatalogSort from './CatalogSort'
import { lengthMap } from 'utils/lengthMap'
import {useQuery} from "@apollo/client";
import {YACHT_META_ITEMS} from "graphql/query/Yacht_Meta";

// Dynamic
const StyledNotFound = dynamic(() =>
  import('./CatalogList/CatalogList.styled').then(
    ({ StyledNotFound }) => StyledNotFound
  )
)
const FeedbackModal = dynamic(() => import('ui/Modals/FeedbackModal'))

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const StyledSlider = styled(YachtSlider)`
  margin: 120px 0;
`

const CatalogPage = ({
  meta,
  list,
  defaultList,
  pagination,
  content,
  filterItems,
  total,
}) => {
  const router = useRouter()
  const { query, pathname } = router

  // meta возвращает постоянно одно и то же значение, поэтому мы поиском определяем заголовок страницы, сопоставляя его со слагом
  let metaTitle = content.page_yachts.filter.tags.find( item => { if(item.slug === query.slug){ return true}})
  let mataTitleTag
  if(metaTitle) {
    mataTitleTag = metaTitle.name
  }

  // console.log(query.slug)
  // const page = +query.page || 1
  const [isFiltersShown, setIsFiltersShown] = useState(false)
  const [modalOpened, setModalOpened] = useState(false)
  const modal = useRef(null)
  // const { tablet } = useBreakpoint()

  const closeModal = () => setModalOpened(false)
  useClickOutside([modal], closeModal)
  useBodyScrollLock(modalOpened)
  // const perPage = pagination.yachts.per_page
  const foundList = list?.yachts?.data || []

  const yachtCatalogStatic = useTranslation('yachtCatalogStatic')

  const currentCompilation = filterItems.find(
    (item) =>
      (item.slug === query.slug || item.slug === lengthMap[query.slug]) &&
      item.slug !== undefined
  )

  return (
    <>
      <CatalogSearch
        showFilters={() => setIsFiltersShown(true)}
        total={total}
        headerTitle={
          mataTitleTag ||
          meta?.pageTitle ||
           content.page_yachts.title ||
           currentCompilation?.compilationText ||
           yachtCatalogStatic.search.saleTitle
        }
        subTitle={yachtCatalogStatic.search.saleSubtitle}
        pathname={pathname}
        filtersArray={saleValues}
        filterItems={filterItems}
      />
      <CatalogFilters
        isFiltersShown={isFiltersShown}
        closeFilters={() => setIsFiltersShown(false)}
        filtersNumber={6}
        filterItems={filterItems}
        isExtraShown
        pathname={pathname}
        filtersArray={saleValues}
        currentCompilation={currentCompilation}
      />
      {list?.yachts?.total < 1 && (
        <StyledNotFound>{yachtCatalogStatic.notFound}</StyledNotFound>
      )}
      <CatalogSort pathname={pathname} />
      {list?.yachts?.total > 0 ? (
        <CatalogList
          yachtsList={foundList.map((item) => transformYacht(item, 'sale'))}
          total={pagination.yachts.last_page}
          openModal={() => setModalOpened(true)}
          pathname={pathname}
        />
      ) : (
        <CatalogList
          yachtsList={defaultList?.yachts?.data.map((item) =>
            transformYacht(item, 'sale')
          )}
          total={defaultList?.yachts?.last_page}
          openModal={() => setModalOpened(true)}
          pathname={pathname}
          pagination={false}
        />
      )}

      <StyledSlider
        title={yachtCatalogStatic.specialTitle}
        data={content.page_yachts.specials.map((item) =>
          transformYacht(item, 'sale')
        )}
        showButton={false}
      />
      {modalOpened && <FeedbackModal ref={modal} closeModal={closeModal} />}
    </>
  )
}

export default CatalogPage
