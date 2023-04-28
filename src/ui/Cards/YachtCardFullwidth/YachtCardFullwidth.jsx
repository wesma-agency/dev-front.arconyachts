import { PATH } from 'config/path'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'utils/useTranslation'
import {
  ContentWrapper,
  ImageWrapper,
  StyledBrand,
  StyledButton,
  StyledInfo,
  StyledLabel,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from './YachtCardFullwidth.styled'

const YachtCardFullwidth = ({
  name,
  image,
  type,
  yacht,
  text,
  id,
  ...props
}) => {
  const homeStatic = useTranslation('homeStatic')
  let query = {}
  if (type === 'rent' && yacht?.is_rent_day) {
    query.type = 'day'
  }
  return (
    <StyledWrapper {...props}>
      <ImageWrapper>
        <Image
          src={image.fullpath}
          layout={'fill'}
          objectFit={'cover'}
          loading="eager"
          alt={name}
        />
      </ImageWrapper>
      <StyledInfo>
        <ContentWrapper>
          <StyledLabel>{homeStatic[type]}</StyledLabel>
          <StyledBrand>{yacht?.shipyard?.name}</StyledBrand>
          <StyledTitle>{name}</StyledTitle>
          <StyledText>{text}</StyledText>
        </ContentWrapper>
        <Link prefetch={false} 
          href={{
            pathname: `${
              type === 'sale'
                ? PATH.SALE_YACHT
                : type === 'rent'
                ? PATH.CHARTER_YACHT
                : ''
            }${yacht?.slug}`,
            query,
          }}
          passHref
        >
          <StyledButton isLink>{homeStatic.more}</StyledButton>
        </Link>
      </StyledInfo>
    </StyledWrapper>
  )
}

export default YachtCardFullwidth
