import React, { useState, useEffect, useRef } from 'react'
import Image from 'ui/Image'
import Logo from 'ui/Logo'
import {
  GalleryContent,
  GalleryContentItem,
  GalleryHeader,
  GalleryWrapper,
  GalleryDetailHeader,
  GalleryDetailWrapper,
  StyledDropdownIcon,
  StyledDetailSlide,
} from './Gallery.styled'
import Slider from 'components/Slider'
import { useSwiper } from 'utils/useSwiper'
import Portal from 'components/Portal'

const GalleryDetail = ({
  activeIndex,
  setActiveIndex,
  isDetailClosing,
  images,
  close,
}) => {
  const { swiperRef } = useSwiper()
  const [firstRender, setFirstRender] = useState(true)
  useEffect(() => {
    if (firstRender && swiperRef.current) {
      swiperRef.current.swiper.slideTo(activeIndex + 1, 0)
      setFirstRender(false)
    }
  }, [firstRender])
  return (
    <>
      <GalleryDetailHeader isClosing={isDetailClosing && 'closing'}>
        <StyledDropdownIcon onClick={close} />
        {activeIndex + 1}/{images.length}
      </GalleryDetailHeader>
      <GalleryDetailWrapper isClosing={isDetailClosing && 'closing'}>
        <Slider
          ref={swiperRef}
          params={{
            slidesPerView: 1,
            loop: true,
            on: {
              slideChange: (e) => {
                setActiveIndex(e.realIndex)
              },
            },
          }}
        >
          {images.map((image, i) => (
            <StyledDetailSlide key={image.id || i}>
              <Image
                cover="cover"
                src={image.fullpath || image}
                srcset={image.fullpath || image}
                lazy={false}
              />
            </StyledDetailSlide>
          ))}
        </Slider>
      </GalleryDetailWrapper>
    </>
  )
}

const ImageItem = ({ open, ...props }) => {
  const [isVertical, setIsVertical] = useState(false)
  return (
    <GalleryContentItem isVertical={isVertical && 'vertical'} onClick={open}>
      <Image
        {...props}
        lazy={false}
        onLoad={(e) => {
          setIsVertical(e.target.offsetHeight > e.target.offsetWidth)
        }}
      />
    </GalleryContentItem>
  )
}

const Gallery = ({ isGalleryOpened, images, close }) => {
  const [isDetailOpened, setIsDetailOpened] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isClosing, setIsClosing] = useState(false)
  const [isDetailClosing, setIsDetailClosing] = useState(false)
  useEffect(() => {
    if (isClosing) {
      setTimeout(() => close(), 300)
    }
  }, [isClosing])
  useEffect(() => {
    if (isDetailClosing) {
      setTimeout(() => {
        setIsDetailOpened(false)
      }, 300)
    }
  }, [isDetailClosing])
  return (
    <Portal>
      <GalleryHeader isClosing={isClosing && 'isClosing'}>
        <Logo />
        <StyledDropdownIcon onClick={() => setIsClosing(true)} />
      </GalleryHeader>
      <GalleryWrapper isClosing={isClosing && 'closing'}>
        <GalleryContent>
          {images.map((image, i) => (
            <ImageItem
              key={image.id || i}
              cover="cover"
              src={image.fullpath || image}
              srcset={image.fullpath || image}
              open={() => {
                setActiveIndex(i)
                setIsDetailOpened(true)
                setIsDetailClosing(false)
              }}
            />
          ))}
        </GalleryContent>
      </GalleryWrapper>
      {isDetailOpened && (
        <GalleryDetail
          images={images}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isDetailClosing={isDetailClosing}
          close={() => {
            setIsDetailClosing(true)
          }}
        />
      )}
    </Portal>
  )
}

export default Gallery
