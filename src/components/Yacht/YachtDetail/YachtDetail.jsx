import Slider from 'components/Slider'
import Arrow from 'components/Slider/Arrow'
import React, { useEffect, useRef, useState } from 'react'
import FeedbackModal from 'ui/Modals/FeedbackModal'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useClickOutside } from 'utils/useClickOutside'
import { useModal } from 'utils/useModal'
import { useSwiper } from 'utils/useSwiper'
import { useTranslation } from 'utils/useTranslation'
import { breakpoints, getSizes } from 'utils/vars'
import {
  ImageWrapper,
  StyledArrows,
  StyledBlock,
  StyledHeader,
  StyledImageWrapper,
  StyledSection,
  StyledSliderWrapper,
  StyledText,
  StyledTour,
  StyledTourButton,
  StyledTourHeader,
  StyledTourText,
} from './YachtDetail.styled'
import Image from 'next/image'
import { FormType } from 'utils/formType'

const MobileSlide = ({
  image,
  description,
  openModal,
  slideChange,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false)
  const ref = useRef(null)
  useClickOutside([ref], () => setIsActive(false))
  useEffect(() => {
    setIsActive(false)
  }, [slideChange])
  const detailYachtStatic = useTranslation('detailYachtStatic')
  return (
    <StyledBlock
      key={image.id}
      {...props}
      ref={ref}
      isActive={isActive && 'active'}
    >
      <StyledImageWrapper>
        <ImageWrapper isActive={isActive && 'active'}>
          <Image
            layout="fill"
            src={image.previewpath ? image.previewpath : image.fullpath}
            objectFit={'cover'}
            loading={'lazy'}
            onClick={() => setIsActive(!isActive)}
            alt={description}
          />
        </ImageWrapper>
        <StyledTour
          isActive={isActive && 'active'}
          onClick={() => setIsActive(!isActive)}
        >
          <StyledTourHeader>{detailYachtStatic.tour.title}</StyledTourHeader>
          <StyledTourText>{detailYachtStatic.tour.text}</StyledTourText>
          <StyledTourButton
            onClick={(e) => {
              e.stopPropagation()
              openModal()
            }}
          >
            {detailYachtStatic.tour.button}
          </StyledTourButton>
        </StyledTour>
      </StyledImageWrapper>
      <StyledText isActive={isActive && 'active'}>{description}</StyledText>
    </StyledBlock>
  )
}

const YachtDetail = ({ detailRef, images, customData }) => {
  const { goNext, goPrev, swiperRef } = useSwiper()
  const { tablet } = useBreakpoint()
  const { openModal, closeModal, modalRef, isOpened } = useModal()
  const [slideChange, setSlideChange] = useState(false)
  const detailYachtStatic = useTranslation('detailYachtStatic')
  const enableStyledTourCount = 3;
  const slidesElements = () =>
    images.map((image, index) => {
      // const description =
      //   JSON.parse(image.properties)?.description || image.fullpath
      const description =
          JSON.parse(image.properties)?.description || detailYachtStatic.tour.description
      return !tablet ? (
        <StyledBlock key={image.id}>
          <StyledImageWrapper>
            <ImageWrapper>
              <Image
                className={index > enableStyledTourCount ? 'enable-hover' : ''}
                layout="fill"
                src={image.previewpath ? image.previewpath : image.fullpath}
                objectFit={'cover'}
                loading={'lazy'}
                alt={description}
                sizes={getSizes('1050px')}
              />
            </ImageWrapper>
            {index > enableStyledTourCount &&
              <StyledTour>
                <StyledTourHeader>
                  {detailYachtStatic.tour.title}
                </StyledTourHeader>
                <StyledTourText>
                  {customData?.text
                    ? customData.text
                    : detailYachtStatic.tour.text}
                </StyledTourText>
                <StyledTourButton
                  onClick={(e) => {
                    e.stopPropagation()
                    openModal()
                  }}
                >
                  {detailYachtStatic.tour.button}
                </StyledTourButton>
              </StyledTour>
            }
          </StyledImageWrapper>
          <StyledText>
            {/*{customData?.description*/}
            {/*  ? customData.description*/}
            {/*  : detailYachtStatic.tour.description}*/}
            { description }
          </StyledText>
        </StyledBlock>
      ) : (
        <MobileSlide
          description={description}
          image={image}
          key={image.id}
          openModal={openModal}
          slideChange={slideChange}
        />
      )
    })

  return (
    <StyledSection>
      {isOpened && (
        <FeedbackModal
          {...detailYachtStatic.tour.modal}
          ref={modalRef}
          closeModal={closeModal}
          formType={FormType.interestedInExcursion}
        />
      )}
      <StyledHeader ref={detailRef && detailRef}>
        {detailYachtStatic.detail.title}
      </StyledHeader>
      <StyledSliderWrapper>
        {!tablet && (
          <Slider
            ref={swiperRef}
            params={{
              slidesPerView: 'auto',
              grabCursor: true,
              centeredSlides: true,
              initialSlide: 2,
              // loop: true,
              effect: 'coverflow',
              coverflowEffect: {
                rotate: 0,
                depth: 400,
                modifier: 1,
                slideShadows: false,
              },
              breakpoints: {
                [breakpoints.tablet + 1]: {
                  spaceBetween: 200,
                },
                [breakpoints.fullhd + 1]: {
                  spaceBetween: 240,
                },
              },
              on: {
                transitionEnd: (e) => {
                  if (e.activeIndex === images.length * 2) {
                    e.slideTo(images.length, 0)
                  }
                  if (e.activeIndex === images.length - 1) {
                    e.slideTo(images.length * 2 - 1, 0)
                  }
                },
              },
            }}
          >
            {slidesElements()}
          </Slider>
        )}
        {tablet && (
          <Slider
            ref={swiperRef}
            params={{
              slidesPerView: 'auto',
              centeredSlides: true,
              loop: true,
              effect: 'none',
              on: {
                slideChange: () => {
                  setSlideChange((prev) => !prev)
                },
              },
              pagination: {
                el: '.swiper-pagination-detail',
                clickable: true,
                renderBullet: (index, className) => {
                  return `<div class=${className}><div></div></div>`
                },
              },
            }}
          >
            {slidesElements()}
          </Slider>
        )}
        <StyledArrows>
          <Arrow direction="back" onClick={goPrev} big="big" />
          <Arrow onClick={goNext} big="big" />
        </StyledArrows>
      </StyledSliderWrapper>
    </StyledSection>
  )
}

export default YachtDetail
