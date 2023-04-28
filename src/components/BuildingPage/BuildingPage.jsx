import DetailGrid from 'components/DetailGrid/DetailGrid'
import DetailHeader from 'components/DetailHeader'
import Navigation from 'components/Navigation'
import RelatedShipyards from 'components/RelatedShipyards'
import YachtAbout from 'components/Yacht/YachtAbout'
import { PATH } from 'config/path'
import { buildingStatic } from 'config/static/building'
import React, { useRef } from 'react'
import styled from 'styled-components'
import FeedbackModal from 'ui/Modals/FeedbackModal'
import { getNoun } from 'utils/getNoun'
import { transformYacht } from 'utils/transformYacht'
import { useModal } from 'utils/useModal'
import { useSwiper } from 'utils/useSwiper'
import { media } from 'utils/vars'
import { useTranslation } from 'utils/useTranslation'
import FeedbackForm from 'components/FeedbackForm'
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

const images = [
  '/img/build/slides/building_slide-1.webp',
  '/img/build/slides/building_slide-2.webp',
  '/img/build/slides/building_slide-3.webp',
]

const BuildingPage = ({ content }) => {
  const buildingStatic = useTranslation('buildingStatic')
  const {
    pageTitle,
    servicesContent,
    projectsContent,
    partnersContent,
    pageIntro,
    partnersCount,
    builtCount,
    modal,
    navigation,
  } = buildingStatic
  const { swiperRef, goNext, goPrev } = useSwiper()
  const buildingAboutRef = useRef(null)
  const servicesRef = useRef(null)
  const projectsRef = useRef(null)
  const partnersRef = useRef(null)

  const { openModal, closeModal, modalRef, isOpened } = useModal()
  return (
    <>
      <DetailHeader
        page="building"
        title={pageTitle.toUpperCase()}
        images={images}
        swiperRef={swiperRef}
        partners={partnersCount}
        builtCount={builtCount}
        foundationDate={1999}
        navigationRef={buildingAboutRef}
        onButtonClick={openModal}
        description={pageIntro}
      />
      {isOpened && (
        <FeedbackModal
          title={modal.title}
          subtitle={modal.subtitle}
          submitText={modal.button}
          ref={modalRef}
          closeModal={closeModal}
          formType={FormType.yachtSelection}
        />
      )}
      <Navigation
        tabs={[
          { ref: buildingAboutRef, title: navigation.about },
          { ref: servicesRef, title: navigation.services },
          { ref: projectsRef, title: navigation.projects },
          { ref: partnersRef, title: navigation.partners },
        ]}
        goNext={goNext}
        goPrev={goPrev}
        title={pageTitle}
        isBuilding={true}
        isArrowsShown={images.length > 0}
      />

      <StyledAboutSection>
        <YachtAbout
          description={servicesContent.intro}
          features={servicesContent.list}
          aboutRef={servicesRef}
          title={servicesContent.title}
          tabletView={false}
          isBuilding={true}
        />
      </StyledAboutSection>
      <DetailGrid
        navigationRef={projectsRef}
        isBuilding={true}
        title={`${content.count_projects} ${getNoun(
          content.count_projects,
          ...projectsContent.title
        )}`}
        buttonTitle={projectsContent.buttonTitle}
        description={projectsContent.intro}
        isProject={true}
        shownQuantity={projectsContent.shownQuantity}
        yachts={content.projects.map((yacht) =>
          transformYacht(yacht, 'project')
        )}
        buttonHref={PATH.PROJECTS}
      />
      <RelatedShipyards
        navigationRef={partnersRef}
        title={partnersContent.activeTitle}
        shipyards={content.shipyards}
        count={content.count_shipyards}
        isBuilding={true}
      />
      <FeedbackForm
        title={modal.title}
        subtitle={modal.subtitle}
        submitText={modal.button}
        formType={FormType.yachtSelection}
      />
    </>
  )
}

export default BuildingPage
