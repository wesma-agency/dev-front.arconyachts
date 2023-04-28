import DetailGrid from 'components/DetailGrid/DetailGrid'
import DetailHeader from 'components/DetailHeader'
import FeedbackForm from 'components/FeedbackForm'
import Navigation from 'components/Navigation'
import RelatedShipyards from 'components/RelatedShipyards'
import { PATH } from 'config/path'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import FeedbackModal from 'ui/Modals/FeedbackModal'
import { getNoun } from 'utils/getNoun'
import { transformYacht } from 'utils/transformYacht'
import { useModal } from 'utils/useModal'
import { useSwiper } from 'utils/useSwiper'
import { useTranslation } from 'utils/useTranslation'
import { media } from 'utils/vars'
import ShipyardAbout from './ShipyardAbout'
import { FormType } from 'utils/formType'

const StyledDetailGrid = styled(DetailGrid)`
  margin-bottom: 0;

  ${media.fullhd} {
    margin-bottom: 0;
  }
  ${media.notebook} {
    margin-bottom: 0;
  }
  ${media.tablet} {
    margin-bottom: 0;
  }
  ${media.phablet} {
    margin-bottom: 0;
  }
`
const marginTop = css`
  margin-top: 180px;

  ${media.fullhd} {
    margin-top: 140px;
  }
  ${media.notebook} {
    margin-top: 120px;
  }
  ${media.tablet} {
    margin-top: 100px;
  }
  ${media.phablet} {
    margin-top: 80px;
  }
`

const SellForm = styled(FeedbackForm)`
  ${marginTop}
`

const StyledRelatedShipyards = styled(RelatedShipyards)`
  ${marginTop}

  .swiper-container {
    width: 100%;
    overflow: visible;
  }
`
const SimilarForm = styled(FeedbackForm)`
  margin-top: 140px;
  ${media.notebook} {
    margin-top: 100px;
  }
`

const ShipyardPage = ({ data }) => {
  const { swiperRef, goNext, goPrev } = useSwiper()
  const router = useRouter()
  const aboutRef = useRef(null)
  const sellRef = useRef(null)
  const charterRef = useRef(null)
  const buildingRef = useRef(null)
  const {
    name,
    images,
    location,
    year_of_foundation,
    logo,
    count_yachts,
    about_text,
    slug,
    others,
    sale: { text, count: sale_count, list: saleList },
    rent: { text: charterText, count: charter_count, list: charterList },
    building: { text: buildingText, count: building_count, list: buildingList },
  } = data
  const { openModal, closeModal, modalRef, isOpened } = useModal()
  const saleYachts =
    saleList &&
    saleList.length &&
    saleList.map((yacht) => transformYacht(yacht))
  const charterYachts =
    charterList &&
    charterList.length &&
    charterList.map((yacht) => transformYacht(yacht, 'charter'))
  const buildingYachts =
    buildingList &&
    buildingList.length &&
    buildingList.map((yacht) => transformYacht(yacht, 'project'))
  const shipyardStatic = useTranslation('shipyardStatic')

  const navigationTabs = []
  if (about_text) {
    navigationTabs.push({
      ref: aboutRef,
      title: shipyardStatic.navigation.about,
    })
  }
  if (sale_count > 0) {
    navigationTabs.push({ ref: sellRef, title: shipyardStatic.navigation.sell })
  }
  if (charter_count > 0) {
    navigationTabs.push({
      ref: charterRef,
      title: shipyardStatic.navigation.charter,
    })
  }
  if (building_count > 0) {
    navigationTabs.push({
      ref: buildingRef,
      title: shipyardStatic.navigation.building,
    })
  }
  return (
    <>
      <DetailHeader
        page="shipyard-page"
        title={name.toUpperCase()}
        images={images}
        swiperRef={swiperRef}
        location={location && location.name}
        foundationDate={year_of_foundation}
        builtCount={`${count_yachts} ${getNoun(
          count_yachts,
          ...shipyardStatic.builtCount
        )}`}
        shipyardLogo={logo.fullpath}
      />
      <Navigation
        tabs={navigationTabs}
        goNext={goNext}
        goPrev={goPrev}
        title={name}
        isArrowsShown={images.length > 0}
      />
      <section>
        <ShipyardAbout
          aboutRef={aboutRef}
          content={about_text}
          title={shipyardStatic.navigation.about}
        />
      </section>
      {sale_count > 0 && (
        <>
          <StyledDetailGrid
            navigationRef={sellRef}
            title={shipyardStatic.sale.title}
            buttonTitle={shipyardStatic.sale.button}
            description={text}
            caption={`${sale_count} ${getNoun(
              sale_count,
              ...shipyardStatic.sale.caption
            )}`}
            yachts={saleYachts}
            showButton={sale_count > 6}
            buttonHref={{
              query: { shipyard: slug },
              pathname: PATH.SALE_CATALOG,
            }}
          />
          <SellForm
            {...shipyardStatic.sellFeedbackForm}
            formType={FormType.yachtSell}
          />
        </>
      )}

      {charter_count > 0 && (
        <StyledDetailGrid
          navigationRef={charterRef}
          title={shipyardStatic.charter.title}
          buttonTitle={shipyardStatic.charter.button}
          description={charterText}
          caption={`${charter_count} ${getNoun(
            charter_count,
            ...shipyardStatic.charter.caption
          )}`}
          yachts={charterYachts}
          showButton={charter_count > 6}
          buttonHref={{
            query: { shipyard: slug },
            pathname: PATH.CHARTER_CATALOG,
          }}
        />
      )}

      {building_count > 0 && (
        <StyledDetailGrid
          navigationRef={buildingRef}
          title={shipyardStatic.building.title}
          caption={`${building_count} ${getNoun(
            building_count,
            ...shipyardStatic.building.caption
          )}`}
          description={buildingText}
          yachts={buildingYachts}
          buttonTitle={shipyardStatic.building.button}
          descriptionCaption={shipyardStatic.building.descriptionCaption}
          onClick={openModal}
        />
      )}

      {others && others.length > 0 && (
        <StyledRelatedShipyards
          title={`${shipyardStatic.related.title} ${
            location ? location.name_genitive || location.name : ''
          }`}
          style={{ marginBottom: 0 }}
          shipyards={others}
        />
      )}

      <SimilarForm
        {...shipyardStatic.suitableForm}
        formType={FormType.yachtSelection}
      />

      {isOpened && (
        <FeedbackModal
          {...shipyardStatic.projectForm}
          ref={modalRef}
          closeModal={closeModal}
          formType={FormType.yachtBuilding}
        />
      )}
    </>
  )
}

export default ShipyardPage
