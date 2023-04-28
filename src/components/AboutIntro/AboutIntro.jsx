import { saveAs } from 'file-saver'
import React, { useEffect, useState } from 'react'
import { getNoun } from 'utils/getNoun'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useSwiper } from 'utils/useSwiper'
import { useTranslation } from 'utils/useTranslation'
import { breakpoints } from 'utils/vars'
import Arrow from '../Slider/Arrow'
import {
  Arrows,
  Clarification,
  Description,
  Fact,
  FactItem,
  FactsList,
  Note,
  Section,
  Slide,
  SliderWrapper,
  StyledButton,
  StyledImage,
  StyledSlider,
  Text,
  Title,
} from './AboutIntro.styled'

const AboutIntro = ({ presentation: url, yachtsCount }) => {
  const aboutStatic = useTranslation('aboutStatic')
  const {
    note,
    title,
    facts,
    staff,
    description,
    buttonText,
  } = aboutStatic.intro
  const { notebook, tablet } = useBreakpoint()
  const { goNext, goPrev, swiperRef } = useSwiper()
  const [isGalleryOpened, setIsGalleryOpened] = useState(false)

  const ImageData = {
    width: 868,
    height: 580,
    alt: `Our staff`,
  }

  useEffect(() => {
    swiperRef.current.swiper.slideTo(0)
  }, [staff])
  const downloadPresentation = async () => {
    // saveAs
    const body = await fetch(url)
    const response = await body.blob()
    const ext = url.split('.')[url.split('.').length - 1]
    saveAs(response, `ArconYachts_about.${ext}`)
  }

  return (
    <Section>
      <Note>{note}</Note>
      <Title>{title}</Title>
      <FactsList isAbove={true}>
        {facts.map((item, index) => (
          <FactItem key={index}>
            <Fact>
              {item.noun
                ? `${yachtsCount} ${getNoun(yachtsCount, ...item.noun)}`
                : item.fact}
            </Fact>
            <Clarification>{item.clarification}</Clarification>
          </FactItem>
        ))}
      </FactsList>
      <SliderWrapper>
        {staff && staff.length > 0 && (
          <StyledSlider
            swiperRef={swiperRef}
            tablet={tablet}
            setIsGalleryOpened={setIsGalleryOpened}
            params={{
              spaceBetween: 0,
              freeMode: true,
              scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
                draggable: true,
              },
              preloadImages: false,
              lazy: true,
              breakpoints: {
                0: { spaceBetween: 0 },
                [breakpoints.tablet + 1]: {
                  spaceBetween: 12,
                },
                [breakpoints.fullhd + 1]: {
                  spaceBetween: 12,
                },
              },
            }}
            ref={swiperRef}
          >
            {staff.map((image, index) => (
              <Slide
                key={index + image.src}
                onClick={() => tablet && setIsGalleryOpened(true)}
              >
                <StyledImage
                  // visibleByDefault={true}
                  width={ImageData.width}
                  height={ImageData.height}
                  alt={ImageData.alt}
                  src={image.src}
                  // srcset={image.srcSet}
                  objectFit={'cover'}
                  objectPosition={'left top'}
                  afterLoad={() => {
                    if (swiperRef.current) {
                      swiperRef.current?.swiper?.update()
                    }
                  }}
                />
              </Slide>
            ))}
          </StyledSlider>
        )}
      </SliderWrapper>
      {/* {staff && staff.length > 0 && tablet && isGalleryOpened && (
       <Gallery
         images={staff}
         close={() => setIsGalleryOpened(false)}
         isGalleryOpened={isGalleryOpened}
       />
      )} */}
      {!notebook && (
        <Arrows>
          <Arrow direction="back" onClick={goPrev} big="big" />
          <Arrow onClick={goNext} big="big" />
        </Arrows>
      )}
      <FactsList isAbove={false}>
        {facts.map((item, index) => (
          <FactItem key={index}>
            <Fact>
              {item.noun
                ? `${yachtsCount} ${getNoun(yachtsCount, ...item.noun)}`
                : item.fact}
            </Fact>
            <Clarification>{item.clarification}</Clarification>
          </FactItem>
        ))}
      </FactsList>
      <Description>
        {description.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
        {url && (
          <StyledButton onClick={downloadPresentation}>
            {buttonText}
          </StyledButton>
        )}
      </Description>
    </Section>
  )
}

export default AboutIntro
