import Slider from 'components/Slider'
import { PATH } from 'config/path'
import isEqual from 'lodash.isequal'
import Image from 'next/image'
import React, { Fragment, memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite as toggleFavoriteInit } from 'redux/slices/favoritesSlice'
import { getNoun } from 'utils/getNoun'
import { useSwiper } from 'utils/useSwiper'
import { useTranslation } from 'utils/useTranslation'
import { getSizes } from 'utils/vars'
import {
  StyledBadge,
  StyledFavorites,
  StyledHeader,
  StyledImages,
  StyledImagesWrapper,
  StyledOverlay,
  StyledParams,
  StyledParamsDivider,
  StyledPrice,
  StyledTitle,
  StyledWrapper,
} from './YachtCard.styled'
import { useRouter } from 'next/router'
const YachtCard = ({
  width = 373,
  height = 272,
  withoutSpacing,
  alt = '',
  isProject = false,

  prices,
  type,
  showPrice = true,
  number_cabins,
  number_guests,
  name,
  buildDate,
  condition,
  lengths,
  teaser,
  slug,

  price,
  images,
  id,
  ...props
}) => {
  const yachtCardStatic = useTranslation('yachtCardStatic')
  const { swiperRef } = useSwiper()
  const router = useRouter()
  const { favorites } = useSelector((state) => state)
  const { length: selectedLength, currency } = useSelector((state) => state)
  const onEnter = useCallback(
    (i) => () => {
      swiperRef.current.swiper.slideTo(i)
    },
    []
  )

  const dispatch = useDispatch()
  const toggleFavorite = () => dispatch(toggleFavoriteInit({ type, slug }))

  useEffect(() => {
    if (swiperRef.current) {
      const { bullets } = swiperRef.current.swiper.pagination
      bullets.forEach((bullet, i) => {
        const enter = onEnter(i)
        bullet.addEventListener('mouseenter', enter)
        bullet.addEventListener('click', enter)
      })
    }
  }, [onEnter])

  const params = []

  if (buildDate && buildDate.trim() !== 'null') {
    params.push(buildDate)
  }
  if (
    lengths &&
    Object.values(lengths).filter((length) => length !== null).length > 0
  ) {
    params.push(
      selectedLength === 'm'
        ? `${lengths[selectedLength].toFixed(2)} ${yachtCardStatic.lengths.m}`
        : selectedLength === 'ft'
        ? `${lengths[selectedLength].toFixed(3)} ${yachtCardStatic.lengths.ft}`
        : ''
    )
  }
  if ((type === 'sale' || type === 'project') && number_cabins) {
    params.push(
      `${number_cabins} ${getNoun(number_cabins, ...yachtCardStatic.cabins)}`
    )
  }
  if ((type === 'charter-week' || type === 'charter-day') && number_guests) {
    params.push(
      `${number_guests} ${getNoun(number_guests, ...yachtCardStatic.guests)}`
    )
  }
  if (!isProject && type !== 'project' && condition) {
    params.push(
      condition === 'new'
        ? yachtCardStatic.conditions.new
        : condition === 'past-usage' && yachtCardStatic.conditions.pastUsage
    )
  }

  const href =
    type === 'sale'
      ? `${PATH.SALE_YACHT}${slug}`
      : type === 'charter-week' || type === 'charter-day'
      ? `${PATH.CHARTER_YACHT}${slug}`
      : type === 'project'
      ? `${PATH.PROJECTS}/${slug}`
      : '/'

  const hrefType =
    type === 'sale'
      ? ''
      : type === 'charter-week'
      ? ''
      : type === 'charter-day'
      ? 'day'
      : ''

  const hrefOptions = { pathname: href }
  if (hrefType) {
    hrefOptions.query = { type: hrefType }
  }

  return (
    <StyledWrapper {...props}>
      <StyledImagesWrapper
        cardWidth={width}
        cardHeight={height}
        onClick={(e) => {
          e.stopPropagation()
          router.push(hrefOptions)
        }}
      >
        {images &&
          images.length > 0 &&
          (images?.length > 1 ? (
            <Slider
              ref={swiperRef}
              shouldSwiperUpdate={false}
              params={{
                lazy: true,
                preloadImages: false,
                pagination: {
                  el: '.product-swiper-pagination',
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<div class=${className}><div></div></div>`
                  },
                },
              }}
            >
              {images.slice(0, 5).map((img, i) => (
                <StyledImages key={img.id}>
                  <Image
                    src={img.previewpath ? img.previewpath : img.fullpath}
                    alt={name}
                    layout="responsive"
                    objectFit="cover"
                    height={height}
                    width={width}
                    sizes={getSizes('480px')}
                    quality={75}
                    loading={'lazy'}
                  />
                  {teaser && <StyledBadge>{teaser}</StyledBadge>}
                  {i === 4 && images.length > 5 && (
                    <StyledOverlay>
                      {`${yachtCardStatic.more.text} ${images.length - 5} ${
                        yachtCardStatic.more.photo
                      }`}
                    </StyledOverlay>
                  )}
                </StyledImages>
              ))}
            </Slider>
          ) : (
            images.slice(0, 5).length === 1 && (
              <StyledImages>
                <Image
                  src={images[0].fullpath}
                  alt={name}
                  layout="responsive"
                  objectFit="cover"
                  height={height}
                  width={width}
                  sizes={getSizes('480px')}
                  quality={75}
                  loading={'lazy'}
                />
                {teaser && <StyledBadge>{teaser}</StyledBadge>}
              </StyledImages>
            )
          ))}
      </StyledImagesWrapper>
      <StyledHeader>
        {name && (
          <StyledTitle
            href={hrefOptions}
            withoutSpacing={withoutSpacing && 'withoutPadding'}
            passHref
            prefetch={false}
          >
            {name}
          </StyledTitle>
        )}
        <StyledFavorites
          isActive={favorites[type].includes(slug) && 'active'}
          onClick={(e) => {
            e.stopPropagation()
            toggleFavorite()
          }}
        />
      </StyledHeader>
      <StyledParams>
        {params.map((param, i) => (
          <Fragment key={i}>
            {param}
            {i !== params.length - 1 && (
              <StyledParamsDivider>|</StyledParamsDivider>
            )}
          </Fragment>
        ))}
      </StyledParams>
      {type !== 'project' &&
        (showPrice && !!prices[currency] && prices[currency] !== 'null' ? (
          <StyledPrice>
            {type === 'charter-week' && yachtCardStatic.prices.week.pretext}
            {type === 'charter-day' && yachtCardStatic.prices.day.pretext}
            {prices && prices[currency] ? prices[currency] : price && `price`}
            {type === 'charter-day' && yachtCardStatic.prices.day.label}
            {type === 'charter-week' && yachtCardStatic.prices.week.label}
          </StyledPrice>
        ) : (
          <StyledPrice>{yachtCardStatic.requestPrice}</StyledPrice>
        ))}
    </StyledWrapper>
  )
}
export default memo(YachtCard, (prev, next) => {
  return isEqual(prev, next)
})
