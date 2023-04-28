import FeedbackForm from 'components/FeedbackForm'
import VideoBlock from 'components/VideoBlock'
import Yacht from 'components/Yacht'
import YachtDetail from 'components/Yacht/YachtDetail'
import YachtPlan from 'components/Yacht/YachtPlan'
import YachtService from 'components/Yacht/YachtService'
import { PATH } from 'config/path'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import FeedbackModal from 'ui/Modals/FeedbackModal'
import { fullWidth } from 'utils/mixins'
import { transformYacht } from 'utils/transformYacht'
import { useModal } from 'utils/useModal'
import { useTranslation } from 'utils/useTranslation'
import {
  StyledFeedbackForm,
  StyledSlider,
  StyledSliders,
  StyledTestDriveForm,
} from './YachtPage.styled'
import { FormType } from 'utils/formType'

const StyledVideoBlock = styled(VideoBlock)`
  ${fullWidth}
`

const YachtPage = ({ yacht }) => {
  const aboutRef = useRef(null)
  const detailRef = useRef(null)
  const planRef = useRef(null)
  const managementRef = useRef(null)
  const router = useRouter()

  const { openModal, closeModal, modalRef, isOpened } = useModal()
  const { currency } = useSelector((state) => state)
  const {
    video_review,
    is_rent,
    is_rent_day,
    is_rent_week,
    is_hide_rent_week_cost,
    is_hide_rent_day_cost,
    detail_images,
    maintenance_text,
    maintenances,
    shipyard,
    collection_popular,
    collection_shipyard,
    about_text,
    deck_plan_images,
  } = yacht
  const navigationTabs = []
  const detailYachtStatic = useTranslation('detailYachtStatic')
  navigationTabs.push({
    ref: null,
    title: detailYachtStatic.photoNavTitle.title,
  })
  if (about_text) {
    navigationTabs.push({
      ref: aboutRef,
      title: detailYachtStatic.aboutTitle,
    })
  }
  if (detail_images && detail_images.length > 0) {
    navigationTabs.push({
      ref: detailRef,
      title: detailYachtStatic.detail.title,
    })
  }
  if (deck_plan_images && deck_plan_images.length > 0) {
    navigationTabs.push({
      ref: planRef,
      title: detailYachtStatic.plan.title,
    })
  }

  navigationTabs.push({
    ref: managementRef,
    title: detailYachtStatic.maintenances.title,
  })

  const currentTypePopularYachts = collection_popular
    .map((yacht) => transformYacht(yacht))
    .filter(item => item.type === 'sale')

  return (
    <>
      <Yacht
        yacht={yacht}
        aboutRef={aboutRef}
        page="yacht-page"
        navigationTabs={navigationTabs}
        detailImages={detail_images}
      />
      {detail_images && detail_images.length > 0 && (
        <YachtDetail detailRef={detailRef} images={detail_images} />
      )}
      {video_review && video_review.link && (
        <StyledVideoBlock
          poster={video_review?.preview?.fullpath}
          link={video_review.link}
        />
      )}

      {((is_rent_day && !is_hide_rent_day_cost) ||
        (is_rent_week && !is_hide_rent_week_cost)) && (
        <>
          <StyledTestDriveForm
            title={detailYachtStatic.testDrive.title}
            subtitle={`${detailYachtStatic.testDrive.subtitle} `}
            submitText={detailYachtStatic.testDrive.button}
            onSubmit={openModal}
            showInputs={false}
            showAgreement={false}
          />
          {isOpened && (
            <FeedbackModal
              title={detailYachtStatic.testDrive.title}
              subtitle={`${detailYachtStatic.testDrive.subtitle}`}
              // ${
              //   is_rent_week
              //     ? getPrices({ ...yacht, type: 'charter-week' })[currency]
              //     : getPrices({ ...yacht, type: 'charter-day' })[currency]
              // }.
              submitText={detailYachtStatic.testDrive.button}
              ref={modalRef}
              closeModal={closeModal}
              formType={FormType.needRent}
            />
          )}
        </>
      )}
      {deck_plan_images && deck_plan_images.length > 0 && (
        <YachtPlan planRef={planRef} images={deck_plan_images} />
      )}
      <YachtService
        managementRef={managementRef}
        description={maintenance_text}
      />
      <StyledFeedbackForm
        {...detailYachtStatic.feedbackForm}
        formType={FormType.specialConditions}
      />

      {((collection_shipyard && collection_shipyard.length > 0) ||
        (currentTypePopularYachts && currentTypePopularYachts.length > 0)) && (
        <StyledSliders>
          {collection_shipyard && collection_shipyard.length > 0 && (
            <StyledSlider
              title={`${detailYachtStatic.sliders.others} ${shipyard?.name}`}
              data={collection_shipyard.map((yacht) => transformYacht(yacht))}
              onClick={() =>
                router.push({
                  pathname: PATH.SALE_CATALOG,
                  query: { shipyard: shipyard.slug },
                })
              }
            />
          )}
          {currentTypePopularYachts && currentTypePopularYachts.length > 0 && (
            <StyledSlider
              title={detailYachtStatic.sliders.special}
              data={currentTypePopularYachts}
              onClick={() => router.push(PATH.SALE_CATALOG)}
              showButton={false}
            />
          )}
        </StyledSliders>
      )}
      <FeedbackForm
        subtitle={detailYachtStatic.feedbackTitle}
        formType={FormType.yachtSelection}
      />
    </>
  )
}

export default YachtPage
