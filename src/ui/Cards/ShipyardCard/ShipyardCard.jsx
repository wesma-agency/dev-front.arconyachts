import { PATH } from 'config/path'
import Link from 'next/link'
import React from 'react'
import { getNoun } from 'utils/getNoun'
import { useTranslation } from 'utils/useTranslation'
import {
  StyledContainer,
  StyledCount,
  StyledCountry,
  StyledDetailInfo,
  StyledImage,
  StyledTitle,
  StyledWrapper,
} from './ShipyardCard.styled'

const ShipyardCard = ({
  preview,
  name = '',
  logo,
  count_yachts,
  withoutPadding = false,
  isBuilding = false,
  size,
  isMain = false,
  slug,
  id,
  ...props
}) => {
  const flagSize = {
    width: 19,
    height: 13,
  }

  const shipyardStatic = useTranslation('shipyardStatic')
  return (
    <Link prefetch={false} href={`${PATH.SHIPYARD}${slug}`} passHref>
      <StyledContainer
        withoutPadding={withoutPadding && 'withoutPadding'}
        isBuilding={isBuilding}
        {...props}
      >
        <StyledWrapper>
          <StyledImage
            src={logo?.fullpath}
            srcSet={logo?.fullpath}
            layout={'intrinsic'}
            objectFit={'contain'}
            alt={name}
            width={200}
            height={100}
            loading={'lazy'}
            // isMain={isMain && 'main'}
          />
        </StyledWrapper>
        <StyledDetailInfo>
          <StyledCountry
            src={preview?.fullpath}
            srcSet={preview?.fullpath}
            alt={name}
            width={flagSize.width}
            height={flagSize.height}
            loading={'lazy'}
            layout={'intrinsic'}
            objectFit={'contain'}
          />
          <StyledTitle>{name}</StyledTitle>
          <StyledCount>
            {count_yachts} {getNoun(count_yachts, ...shipyardStatic.builtCount)}
          </StyledCount>
        </StyledDetailInfo>
      </StyledContainer>
    </Link>
  )
}

export default ShipyardCard
