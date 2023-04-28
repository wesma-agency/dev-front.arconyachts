import { detailHeaderStatic } from 'config/static/detailHeader'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import FeedbackModal from 'ui/Modals/FeedbackModal'
import { useModal } from 'utils/useModal'
import { useSwiper } from 'utils/useSwiper'
import { media } from 'utils/vars'
import DetailHeader from '../DetailHeader'
import YachtAbout from './YachtAbout'
import YachtConsult from './YachtConsult'
import YachtSpecifications from './YachtSpecifications'
import Navigation from 'components/Navigation'
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

export const transformBenefits = (item) => ({
  text: item.description,
  title: item.name,
  src: item?.image?.fullpath,
  id: item.id,
})

const Yacht = ({ yacht, description, aboutRef, navigationTabs, ...props }) => {
  const { goNext, goPrev, swiperRef } = useSwiper()
  const { openModal, closeModal, modalRef, isOpened } = useModal()
  const { length, currency } = useSelector((state) => state)
  navigationTabs[0].ref = swiperRef;
  let {
    main_name,
    shipyard,
    ex_name,
    prices,
    lengths,
    buildDate,
    isRestored,
    body_material,
    benefits,
    about_text,
    specification_text,
    specifications,
    equipment_text,
    employee,
    slug,
  } = yacht
  const detailHeaderStatic = useTranslation('detailHeaderStatic')
  const detailYachtStatic = useTranslation('detailYachtStatic')
  if(main_name && shipyard && shipyard.name) {
    let reg = new RegExp(shipyard.name, 'gi');
    main_name = main_name.replace(reg, '');
  }
  return (
    <>
      <DetailHeader
        {...yacht}
        title={main_name}
        shipyard={shipyard?.name}
        subtitle={ex_name && `(${ex_name})`}
        price={prices?.[currency] !== 'null' ? prices?.[currency] : ''}
        length={lengths[length]}
        buildDate={buildDate}
        buildDateTitle={
          isRestored
            ? detailHeaderStatic.params.restored
            : detailHeaderStatic.params.bulidDate
        }
        body_material={body_material?.name}
        swiperRef={swiperRef}
        onButtonClick={openModal}
        {...props}
      />
      <Navigation
        tabs={navigationTabs}
        goNext={goNext}
        goPrev={goPrev}
        title={`${shipyard?.name} ${main_name}`}
        subtitle={`${ex_name ? ` (${ex_name})` : ''}`}
        isArrowsShown={yacht.images.length > 0}
      />
      <StyledAboutSection>
        <YachtAbout
          description={about_text}
          aboutRef={aboutRef}
          features={benefits.map(transformBenefits)}
        />
        <YachtSpecifications
          specifications={specifications}
          specification_text={specification_text}
          equipment_text={equipment_text}
          yachtName={slug}
          type={yacht.type}
        />
      </StyledAboutSection>
      {employee && (
        <YachtConsult
          {...employee}
          image={employee.photo.fullpath}
          tagline={
            employee.quote
              ? employee.quote
              : detailYachtStatic.consult_sale.title
          }
          title={detailYachtStatic.consult_sale.title}
          subtitle={detailYachtStatic.consult_sale.subtitle}
          submitText={detailYachtStatic.consult_sale.button}
        />
      )}
      {isOpened && (
        <FeedbackModal
          {...detailYachtStatic.saleForm}
          ref={modalRef}
          closeModal={closeModal}
          formType={FormType.interestedInCost}
        />
      )}
    </>
  )
}

export default Yacht
