import DetailHeader from 'components/DetailHeader'
import FeedbackForm from 'components/FeedbackForm'
import Navigation from 'components/Navigation'
import VideoBlock from 'components/VideoBlock'
import { transformBenefits } from 'components/Yacht/Yacht'
import YachtAbout from 'components/Yacht/YachtAbout'
import YachtConsult from 'components/Yacht/YachtConsult'
import YachtDetail from 'components/Yacht/YachtDetail'
import YachtPlan from 'components/Yacht/YachtPlan'
import YachtSpecifications from 'components/Yacht/YachtSpecifications'
import {
  StyledSlider,
  StyledSliders,
} from 'components/YachtPage/YachtPage.styled'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import FeedbackModal from 'ui/Modals/FeedbackModal'
import { fullWidth } from 'utils/mixins'
import { transformYacht } from 'utils/transformYacht'
import { useModal } from 'utils/useModal'
import { useSwiper } from 'utils/useSwiper'
import { media } from 'utils/vars'
import CharterConditions from './CharterConditions'
import CharterDate from './CharterDate'
import CharterLocation from './CharterLocation'
import CharterRoutes from './CharterRoutes'
import { useTranslation } from 'utils/useTranslation'
import { FormType } from 'utils/formType'

const StyledAboutSection = styled.section`
  margin-top: 100px;
  ${media.notebook} {
    margin-top: 90px;
  }
  ${media.tablet} {
    margin-top: 80px;
  }
`

const StyledVideoBlock = styled(VideoBlock)`
  ${fullWidth}
`

const YachtCharter = ({ yacht, page, news }) => {
  const { goNext, goPrev, swiperRef } = useSwiper()
  const aboutRef = useRef(null)
  const conditionsRef = useRef(null)
  const routesRef = useRef(null)
  const chooseDateRef = useRef(null)
  const { currency, length } = useSelector((state) => state)

  const { openModal, closeModal, modalRef, isOpened } = useModal()
  const detailHeaderStatic = useTranslation('detailHeaderStatic')
  const detailYachtStatic = useTranslation('detailYachtStatic')
  const yachtCardStatic = useTranslation('yachtCardStatic')
  const yachtCatalogStatic = useTranslation('yachtCatalogStatic')

  let {
    main_name,
    shipyard,
    ex_name,
    prices,
    lengths,
    buildDate,
    isRestored,
    body_material,
    about_text,
    benefits,
    specification_text,
    specifications,
    equipment_text,
    type,
    video_review,
    detail_images,
    collection_popular,
    deck_plan_images,
    employee,
    rent_vat,
    rent_apa,
    rent_terms_text,
    rent_terms,
    location_text,
    locations,
    is_hide_rent_day_cost,
    is_hide_rent_week_cost,
    showPrice,
    slug,
  } = yacht
  if(main_name && shipyard && shipyard.name) {
    let reg = new RegExp(shipyard.name, 'gi');
    main_name = main_name.replace(reg, '');
  }
  const navigationTabs = []

  navigationTabs.push({
    ref: swiperRef,
    title: detailYachtStatic.photoNavTitle.title
  });

  navigationTabs.push({
    ref: aboutRef,
    title: detailYachtStatic.aboutTitle,
  })

  navigationTabs.push({
    ref: conditionsRef,
    title: detailYachtStatic.conditions.title,
  })

  if (news && news.length > 0) {
    navigationTabs.push({
      ref: routesRef,
      title: detailYachtStatic.travel_news.navigationTitle,
    })
  }

  navigationTabs.push({
    ref: chooseDateRef,
    title: detailYachtStatic.datepicker.navigation,
  })

  const currentTypePopularYachts = collection_popular
    .map((yacht) => transformYacht(yacht))
    .filter((item) => item.type === 'charter')

  return (
    <>
      <DetailHeader
        page={page}
        {...yacht}
        title={main_name}
        subtitle={ex_name && `(${ex_name})`}
        shipyard={shipyard?.name}
        price={
          showPrice &&
          prices &&
          !!prices[currency] &&
          (type === 'charter-week'
            ? !is_hide_rent_week_cost
            : !is_hide_rent_day_cost)
            ? `${
                type === 'charter-week'
                  ? yachtCardStatic.prices.week.pretext
                  : type === 'charter-day'
                  ? yachtCardStatic.prices.day.pretext
                  : ''
              } ${prices[currency]} ${
                type === 'charter-day'
                  ? yachtCardStatic.prices.day.label
                  : type === 'charter-week'
                  ? yachtCardStatic.prices.week.label
                  : ''
              }`
            : detailHeaderStatic.requestPrice
        }
        length={lengths && lengths[length]}
        buildDate={buildDate}
        buildDateTitle={
          isRestored
            ? detailHeaderStatic.params.restored
            : detailHeaderStatic.params.bulidDate
        }
        body_material={body_material?.name}
        swiperRef={swiperRef}
        onButtonClick={openModal}
        detailImages={detail_images}
      />
      <Navigation
        tabs={navigationTabs}
        goNext={goNext}
        goPrev={goPrev}
        title={`${shipyard ? shipyard.name + ' ' : ''}${main_name}`}
        subtitle={`${ex_name ? ` (${ex_name})` : ''}`}
        isArrowsShown={yacht.images.length > 0}
      />
      {isOpened && (
        <FeedbackModal
          title={detailYachtStatic.charterForm.title}
          submitText={detailYachtStatic.charterForm.submitText}
          subtitle={`${detailYachtStatic.charterForm.subtitle} ${
            showPrice &&
            prices &&
            !!prices[currency] &&
            (type === 'charter-week'
              ? !is_hide_rent_week_cost
              : !is_hide_rent_day_cost)
              ? `${
                  type === 'charter-week'
                    ? yachtCardStatic.prices.week.pretext
                    : type === 'charter-day'
                    ? yachtCardStatic.prices.day.pretext
                    : ''
                } ${prices[currency]} ${
                  type === 'charter-day'
                    ? yachtCardStatic.prices.day.label
                    : type === 'charter-week'
                    ? yachtCardStatic.prices.week.label
                    : ''
                }`
              : detailHeaderStatic.requestPrice.toLowerCase()
          }`}
          ref={modalRef}
          closeModal={closeModal}
          formType={FormType.yachtBooking}
        />
      )}
      <StyledAboutSection>
        <YachtAbout
          description={about_text}
          aboutRef={aboutRef}
          features={benefits.map(transformBenefits)}
        />
        <YachtSpecifications
          yachtName={slug}
          type={type}
          specifications={specifications}
          specification_text={specification_text}
          equipment_text={equipment_text}
        />
      </StyledAboutSection>
      {employee && (
        <YachtConsult
          {...employee}
          image={employee.photo.fullpath}
          tagline={
            employee.quote
              ? employee.quote
              : detailYachtStatic.consult_charter.title
          }
          title={detailYachtStatic.consult_charter.title}
          subtitle={detailYachtStatic.consult_charter.subtitle}
          submitText={detailYachtStatic.consult_charter.button}
        />
      )}
      {detail_images && detail_images.length > 0 && (
        <YachtDetail
          images={detail_images}
          customData={detailYachtStatic.tour.charter_tour}
        />
      )}
      {video_review && video_review.link && (
        <StyledVideoBlock
          poster={video_review?.preview?.fullpath}
          link={video_review.link}
        />
      )}

      {deck_plan_images && deck_plan_images.length > 0 && (
        <YachtPlan images={deck_plan_images} />
      )}
      <CharterConditions
        conditionsRef={conditionsRef}
        rent_vat={rent_vat}
        rent_apa={rent_apa}
        rent_terms_text={rent_terms_text}
        rent_terms={rent_terms}
      />
      {locations && locations.length > 0 && (
        <CharterLocation
          location_text={
            location_text || detailYachtStatic.charterLocation.modal.subtitle
          }
          locations={locations}
        />
      )}
      {news?.length > 0 && <CharterRoutes routesRef={routesRef} news={news} />}
      <CharterDate chooseDateRef={chooseDateRef} />
      <StyledSliders>
        {currentTypePopularYachts && currentTypePopularYachts.length > 0 && (
          <StyledSlider
            title={detailYachtStatic.sliders.special}
            data={currentTypePopularYachts}
            showButton={false}
            buttonLink={false}
          />
        )}
      </StyledSliders>
      <FeedbackForm
        subtitle={detailYachtStatic.feedbackTitleCharter}
        {...yachtCatalogStatic.feedbackFormCharter}
        formType={FormType.yachtSelection}
      />
    </>
  )
}

export default YachtCharter
