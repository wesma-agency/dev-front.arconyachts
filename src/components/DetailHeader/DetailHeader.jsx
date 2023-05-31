import { detailHeaderStatic } from 'config/static/detailHeader'
import { shipyardStatic } from 'config/static/shipyard'
import isEqual from 'lodash.isequal'
import React, { memo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrency } from 'redux/slices/currencySlice'
import { toggleFavorite as toggleFavoriteInit } from 'redux/slices/favoritesSlice'
import { setLength } from 'redux/slices/lengthSlice'
import styled from 'styled-components'
import Favorites from 'ui/Favorites'
import Paragraph from 'ui/Paragraph'
import { useBodyScrollLock } from 'utils/useBodyScrollLock'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useClickOutside } from 'utils/useClickOutside'
import { useTranslation } from 'utils/useTranslation'
import { breakpoints, media, getSizes } from 'utils/vars'
import {
  ParamsWrapper,
  StyledArrow,
  StyledButton,
  StyledCurrencies,
  StyledCurrenciesWrapper,
  StyledCurrency,
  StyledHeader,
  StyledLength,
  StyledLengthDrop,
  StyledPage,
  StyledParam,
  StyledParamsWrapper,
  StyledParamTitle,
  StyledParamWrapper,
  StyledPrice,
  StyledPriceWrapper,
  StyledShipyard,
  StyledShipyardLogo,
  StyledShipyardWrapper,
  StyledSlide,
  StyledSlider,
  StyledSliderWrapper,
  StyledSubtitle,
  StyledTitle,
  StyledTitleWrapper,
  StyledWrapper,
  Wrapper,
} from './DetailHeader.styled'
import Gallery from './Gallery/Gallery'
import { getNoun } from 'utils/getNoun'
import Image from 'next/image'

const StyledParagraph = styled(Paragraph)`
  width: 70%;
  margin-right: 20px;

  ${media.tablet} {
    width: 100%;
    margin-right: 0;
    margin-bottom: 30px;
  }
`

const StyledParagraphWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  ${media.tablet} {
    margin-top: 0;
    flex-direction: column;
  }
`

// добавлено 28.05.2023 для того, чтоб картинка бралась не из кэша
const customLoader = ({ src }) => {
  return src
}

const Slider = memo(({ images, swiperRef, tablet, setIsGalleryOpened }) => {
  return (
    <StyledSlider
      params={{
        spaceBetween: 0,
        freeMode: true,
        preloadImages: false,
        lazy: true,
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false,
          draggable: true,
        },
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
      {images.map((image, i) => (
        <StyledSlide
          key={image.id || i}
          onClick={() => tablet && setIsGalleryOpened(true)}
        >
          {/*1060px такое значение было в getSizes*/}
          <Image
            layout={'fill'}
            loading={'lazy'}
            src={
              typeof image === 'string'
                ? image
                : !tablet
                ? image.fullpath
                : image.previewpath
                ? image.previewpath
                : image.fullpath
            }
            onLoad={(e) => {
              if (swiperRef.current) {
                swiperRef.current?.swiper?.update()
              }
            }}
            sizes={getSizes('1920px')}
            alt={image.fullpath || image}
            // loader={customLoader} // добавлено 28.05.2023 для того, чтоб картинка бралась не из кэша
            loader={({src}) => src} // для загрузки без кэша (30.05.2023)
          />
        </StyledSlide>
      ))}
    </StyledSlider>
  )
})

const DetailHeader = ({
  page,
  shipyard,
  title,
  subtitle,
  price,
  length,
  buildDate,
  number_cabins,
  number_guests,
  speed,
  body_material,
  swiperRef,
  badges,
  location,
  foundationDate,
  builtCount,
  shipyardLogo,
  images,
  partners,
  navigationRef,
  showPrice,
  description,
  onButtonClick = () => {},
  buildDateTitle = useTranslation('detailHeaderStatic').params.bulidDate,

  type,
  slug,
  isPrint = false,
  detailImages,
  ...props
}) => {
  const { currencies } = useTranslation('sortsStatic')
  const detailHeaderStatic = useTranslation('detailHeaderStatic')
  const shipyardStatic = useTranslation('shipyardStatic')
  const dispatch = useDispatch()

  if(images && images.length > 0 && detailImages && detailImages.length > 0) {
    images = [...images, ...detailImages];
  }
  const {
    length: activeLength,
    currency: activeCurrency,
    favorites,
  } = useSelector((state) => state)

  const { tablet } = useBreakpoint()
  const [isLengthOpened, setIsLengthOpened] = useState(false)
  const [isGalleryOpened, setIsGalleryOpened] = useState(false)
  const lengthRef = useRef(null)
  const arrowRef = useRef(null)
  const lengthDropRef = useRef(null)
  useClickOutside([lengthDropRef, lengthRef, arrowRef], () =>
    setIsLengthOpened(false)
  )
  useBodyScrollLock(isGalleryOpened)
  const isShipyard = page === 'shipyard-page'
  const isBuilding = page === 'building'
  const isProject = page === 'project'

  const toggleFavorite = () => dispatch(toggleFavoriteInit({ type, slug }))

  return (
    <Wrapper {...props}>
      <StyledHeader isBuilding={isBuilding}>
        <StyledWrapper>
          <StyledShipyardWrapper ref={navigationRef}>
            {!isBuilding && (
              <StyledPage>
                {detailHeaderStatic.pageToText[page].title}
              </StyledPage>
            )}
            <StyledShipyard>{shipyard}</StyledShipyard>
          </StyledShipyardWrapper>
          {!isPrint && !isShipyard && !isBuilding && (
            <Favorites
              isActive={favorites[type].includes(slug) && 'favorite'}
              onClick={toggleFavorite}
            />
          )}
        </StyledWrapper>
        <StyledCurrenciesWrapper>
          <StyledTitleWrapper>
            {title && (
              <StyledTitle isBuilding={isBuilding}>{title}</StyledTitle>
            )}
            {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
          </StyledTitleWrapper>

          {!isShipyard &&
            !isBuilding &&
            (showPrice
              ? price && (
                  <StyledPriceWrapper
                    currenciesOrder={page === 'charter-page' ? 'order' : ''}
                  >
                    {<StyledPrice>{price}</StyledPrice>}
                    {!isPrint && currencies && currencies.length > 0 && (
                      <StyledCurrencies
                        currenciesOrder={page === 'charter-page' ? 'order' : ''}
                      >
                        {currencies.map((currency, i) => (
                          <StyledCurrency
                            isActive={
                              currency.type === activeCurrency && 'active'
                            }
                            key={currency.type}
                            onClick={() => dispatch(setCurrency(currency.type))}
                          >
                            {currency.title}
                          </StyledCurrency>
                        ))}
                      </StyledCurrencies>
                    )}
                  </StyledPriceWrapper>
                )
              : !isPrint &&
                !isProject && (
                  <StyledPriceWrapper
                    currenciesOrder={page === 'charter-page' ? 'order' : ''}
                  >
                    <StyledPrice>{detailHeaderStatic.requestPrice}</StyledPrice>
                  </StyledPriceWrapper>
                ))}
        </StyledCurrenciesWrapper>
        {isBuilding && (
          <StyledParagraphWrapper>
            <StyledParagraph>{description}</StyledParagraph>
            <StyledButton onClick={onButtonClick}>
              {detailHeaderStatic.pageToText[page].button}
            </StyledButton>
          </StyledParagraphWrapper>
        )}
        <ParamsWrapper
          shipyardPage={(isShipyard || isProject) && 'shipyard'}
          isBuilding={isBuilding}
        >
          <StyledParamsWrapper
            shipyardPage={isShipyard && 'shipyard'}
            isBuilding={isBuilding}
          >
            {length && (
              <StyledParamWrapper>
                <StyledParamTitle>
                  {detailHeaderStatic.params.length}
                </StyledParamTitle>
                <StyledParam>
                  {length}{' '}
                  {!tablet ? (
                    <>
                      <StyledLength
                        isActive={activeLength === 'm' && 'active'}
                        onClick={() => dispatch(setLength('m'))}
                      >
                        {detailHeaderStatic.params.meters}
                      </StyledLength>{' '}
                      <StyledLength
                        isActive={activeLength === 'ft' && 'active'}
                        onClick={() => dispatch(setLength('ft'))}
                      >
                        {detailHeaderStatic.params.feets}
                      </StyledLength>
                    </>
                  ) : (
                    <StyledLength
                      isActive={'active'}
                      ref={lengthRef}
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsLengthOpened(!isLengthOpened)
                      }}
                    >
                      {activeLength === 'ft' ? 'ft' : 'm'}
                    </StyledLength>
                  )}
                  {tablet && (
                    <>
                      <StyledArrow
                        isActive={isLengthOpened}
                        ref={arrowRef}
                        onClick={(e) => {
                          e.stopPropagation()
                          setIsLengthOpened(!isLengthOpened)
                        }}
                      />
                      {isLengthOpened && (
                        <StyledLengthDrop ref={lengthDropRef}>
                          <div
                            onClick={() => {
                              dispatch(
                                setLength(activeLength === 'ft' ? 'm' : 'ft')
                              )
                              setIsLengthOpened(false)
                            }}
                          >
                            {activeLength === 'm'
                              ? detailHeaderStatic.params.feets
                              : detailHeaderStatic.params.meters}
                          </div>
                        </StyledLengthDrop>
                      )}
                    </>
                  )}
                </StyledParam>
              </StyledParamWrapper>
            )}
            {buildDate && buildDate.trim() !== 'null' && (
              <StyledParamWrapper>
                <StyledParamTitle>{buildDateTitle}</StyledParamTitle>
                <StyledParam>{buildDate}</StyledParam>
              </StyledParamWrapper>
            )}
            {number_cabins && number_guests && (
              <StyledParamWrapper>
                <StyledParamTitle>
                  {detailHeaderStatic.params.cabins}
                </StyledParamTitle>
                <StyledParam>{`${number_cabins} / ${number_guests} ${getNoun(
                  number_guests,
                  ...detailHeaderStatic.params.guests
                )}`}</StyledParam>
              </StyledParamWrapper>
            )}
            {speed ? (
              <StyledParamWrapper>
                <StyledParamTitle>
                  {detailHeaderStatic.params.speed}
                </StyledParamTitle>
                <StyledParam>{`${speed} ${detailHeaderStatic.params.speedUnit}`}</StyledParam>
              </StyledParamWrapper>
            ) : null}
            {body_material && (
              <StyledParamWrapper>
                <StyledParamTitle>
                  {detailHeaderStatic.params.material}
                </StyledParamTitle>
                <StyledParam>{body_material}</StyledParam>
              </StyledParamWrapper>
            )}
            {location && (
              <StyledParamWrapper>
                <StyledParamTitle>
                  {shipyardStatic.params.location}
                </StyledParamTitle>
                <StyledParam>{location}</StyledParam>
              </StyledParamWrapper>
            )}
            {partners && (
              <StyledParamWrapper>
                <StyledParamTitle>
                  {detailHeaderStatic.params.partners}
                </StyledParamTitle>
                <StyledParam>{partners}</StyledParam>
              </StyledParamWrapper>
            )}
            {builtCount && (
              <StyledParamWrapper>
                <StyledParamTitle>
                  {shipyardStatic.params.built}
                </StyledParamTitle>
                <StyledParam>{builtCount}</StyledParam>
              </StyledParamWrapper>
            )}
            {foundationDate && (
              <StyledParamWrapper>
                <StyledParamTitle>
                  {shipyardStatic.params.foundationDate}
                </StyledParamTitle>
                <StyledParam>{foundationDate}</StyledParam>
              </StyledParamWrapper>
            )}
            {!tablet && (
              <>
                <StyledParamWrapper></StyledParamWrapper>
                <StyledParamWrapper></StyledParamWrapper>
              </>
            )}
          </StyledParamsWrapper>
          {!isPrint &&
          !isShipyard &&
          !isBuilding &&
          detailHeaderStatic.pageToText[page].button ? (
            <StyledButton onClick={onButtonClick}>
              {detailHeaderStatic.pageToText[page].button}
            </StyledButton>
          ) : (
            shipyardLogo && (
              <StyledShipyardLogo src={shipyardLogo} srcset={shipyardLogo} />
            )
          )}
        </ParamsWrapper>
        {/* <StyledBadges>
          {badges.map((badge, i) => (
            <StyledBadge key={i}> {badge}</StyledBadge>
          ))}
        </StyledBadges> */}
      </StyledHeader>
      {!isPrint && (
        <>
          <StyledSliderWrapper>
            {images && images.length > 0 && (
              <Slider
                images={images}
                swiperRef={swiperRef}
                tablet={tablet}
                setIsGalleryOpened={setIsGalleryOpened}
              />
            )}
          </StyledSliderWrapper>
          {images && images.length > 0 && tablet && isGalleryOpened && (
            <Gallery
              images={images}
              close={() => setIsGalleryOpened(false)}
              isGalleryOpened={isGalleryOpened}
            />
          )}
        </>
      )}
    </Wrapper>
  )
}

export default memo(DetailHeader, (prev, next) => isEqual(prev, next))
