import CatalogSearch from 'components/CatalogPage/CatalogSearch'
import { PATH } from 'config/path'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import FeedbackModal from 'ui/Modals/FeedbackModal'
import { saleValues } from 'utils/paramsHelpers'
import { transformYacht } from 'utils/transformYacht'
import { useBodyScrollLock } from 'utils/useBodyScrollLock'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useClickOutside } from 'utils/useClickOutside'
import { useTranslation } from 'utils/useTranslation'
import CatalogFilters from '../CatalogPage/CatalogFilters'
import CatalogList from '../CatalogPage/CatalogList'
import CatalogSort from '../CatalogPage/CatalogSort'
import YachtSlider from '../Slider/YachtSlider'
import { StyledFeedbackForm } from './ProjectsPage.styled'
import { StyledNotFound } from 'components/CatalogPage/CatalogList/CatalogList.styled'
import { FormType } from 'utils/formType'

const StyledSlider = styled(YachtSlider)`
  margin: 120px 0;
`

const ProjectsPage = ({
  list,
  defaultList,
  pagination,
  content,
  filterItems,
  total,
}) => {
  const router = useRouter()
  const { query } = router
  const page = +query.page || 1
  const [isFiltersShown, setIsFiltersShown] = useState(false)
  const [modalOpened, setModalOpened] = useState(false)
  const modal = useRef(null)
  const { tablet } = useBreakpoint()

  const closeModal = () => setModalOpened(false)
  useClickOutside([modal], closeModal)
  useBodyScrollLock(modalOpened)
  const perPage = pagination.yachts.per_page
  let data = list.yachts.data
  const [foundList, setFoundList] = useState(
    data.slice(perPage * page - perPage, perPage * page)
  )
  useEffect(() => {
    setFoundList(
      tablet ? data : data.slice(perPage * page - perPage, perPage * page)
    )
  }, [data, tablet])
  const yachtCatalogStatic = useTranslation('yachtCatalogStatic')
  return (
    <>
      <CatalogSearch
        showFilters={() => setIsFiltersShown(true)}
        total={total}
        headerTitle={content.page_yachts.title || yachtCatalogStatic.title.projects}
        subTitle={yachtCatalogStatic.search.projectsSubtitle}
        pathname={PATH.PROJECTS}
        filtersArray={saleValues}
        filterItems={filterItems}
      />

      <CatalogFilters
        isFiltersShown={isFiltersShown}
        closeFilters={() => setIsFiltersShown(false)}
        filtersNumber={5}
        filterItems={filterItems}
        isExtraShown
        pathname={PATH.PROJECTS}
        filtersArray={saleValues}
      />
      {list.yachts.total < 1 && (
        <StyledNotFound>{yachtCatalogStatic.notFound}</StyledNotFound>
      )}
      <CatalogSort
        pathname={PATH.PROJECTS}
        isProject={true}
        withCurrencies={false}
      />

      {list.yachts.total > 0 ? (
        <CatalogList
          yachtsList={foundList.map((item) => transformYacht(item, 'project'))}
          total={pagination.yachts.last_page}
          openModal={() => setModalOpened(true)}
          pathname={PATH.PROJECTS}
        />
      ) : (
        <CatalogList
          yachtsList={defaultList?.yachts?.data.map((item) =>
            transformYacht(item, 'project')
          )}
          total={defaultList.yachts.last_page}
          openModal={() => setModalOpened(true)}
          pathname={PATH.PROJECTS}
          pagination={false}
        />
      )}

      <StyledFeedbackForm
        {...yachtCatalogStatic.projects.offer}
        formType={FormType.yachtBuilding}
      />

      <StyledSlider
        title={yachtCatalogStatic.specialTitle}
        data={content.page_yachts.specials.map((item) =>
          transformYacht(item, 'project')
        )}
        showButton={false}
      />
      {modalOpened && <FeedbackModal ref={modal} closeModal={closeModal} />}
    </>
  )
}

export default ProjectsPage
