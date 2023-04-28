import React from 'react'
import DetailHeader from 'components/DetailHeader'
import { detailHeaderStatic } from 'config/static/detailHeader'
import { useSwiper } from 'utils/useSwiper'
import { useSelector } from 'react-redux'
import Arrow from 'components/Slider/Arrow'
import styled from 'styled-components'
import { media } from 'utils/vars'
import ShipyardAbout from 'components/ShipyardPage/ShipyardAbout'
import YachtSpecifications from 'components/Yacht/YachtSpecifications'
import YachtDetail from 'components/Yacht/YachtDetail'
import VideoBlock from 'components/VideoBlock'
import { fullWidth } from 'utils/mixins'
import YachtPlan from 'components/Yacht/YachtPlan'
import FeedbackForm from 'components/FeedbackForm'
import { useTranslation } from 'utils/useTranslation'
import { FormType } from 'utils/formType'

const StyledArrows = styled.div`
  display: flex;
  margin-top: 40px;
  & > button {
    margin-right: 12px;
  }

  ${media.tablet} {
    display: none;
  }
`

const AboutWrapper = styled.section``

const StyledVideoBlock = styled(VideoBlock)`
  ${fullWidth}
`

const StyledFeedbackForm = styled(FeedbackForm)`
  margin-top: 120px;
  ${media.fullhd} {
    margin-top: 100px;
  }
  ${media.notebook} {
    margin-top: 80px;
  }
  ${media.tablet} {
    margin-top: 60px;
  }
`

const ProjectPage = ({ yacht }) => {
  const { goNext, goPrev, swiperRef } = useSwiper()
  const { length } = useSelector((state) => state)
  let {
    main_name,
    shipyard,
    ex_name,
    lengths,
    buildDate,
    isRestored,
    about_project_text,
    body_material,
    specifications,
    specification_text,
    equipment_text,
    project_completed_work,
    detail_images,
    images,
    video_review,
    deck_plan_images,
    slug,
  } = yacht
  if(main_name && shipyard && shipyard.name) {
    let reg = new RegExp(shipyard.name, 'gi');
    main_name = main_name.replace(reg, '');
  }
  const detailHeaderStatic = useTranslation('detailHeaderStatic')
  const detailYachtStatic = useTranslation('detailYachtStatic')
  const yachtCatalogStatic = useTranslation('yachtCatalogStatic')

  return (
    <>
      <DetailHeader
        {...yacht}
        title={main_name}
        shipyard={shipyard?.name}
        subtitle={ex_name && `(${ex_name})`}
        length={lengths[length]}
        buildDate={buildDate}
        buildDateTitle={
          isRestored
            ? detailHeaderStatic.params.restored
            : detailHeaderStatic.params.bulidDate
        }
        page={'project'}
        body_material={body_material?.name}
        swiperRef={swiperRef}
        showPrice={false}
        images={images}
        detailImages={detail_images}
      />
      <StyledArrows>
        <Arrow direction="back" onClick={goPrev} big="big" />
        <Arrow onClick={goNext} big="big" />
      </StyledArrows>
      <AboutWrapper>
        <ShipyardAbout
          content={about_project_text}
          title={detailYachtStatic.projectDetail.aboutTitle}
        />
        <YachtSpecifications
          specifications={specifications}
          specification_text={specification_text}
          equipment_text={equipment_text}
          project_completed_work={project_completed_work}
          yachtName={slug}
          type="project"
        />
      </AboutWrapper>
      {detail_images && detail_images.length > 0 && (
        <YachtDetail images={detail_images} />
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
      <StyledFeedbackForm
        {...yachtCatalogStatic.projects.offer}
        formType={FormType.yachtBuilding}
      />
    </>
  )
}

export default ProjectPage
