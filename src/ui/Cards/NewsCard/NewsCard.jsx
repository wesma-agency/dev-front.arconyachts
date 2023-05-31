import { PATH } from 'config/path'
import Link from 'next/link'
import React from 'react'
import { Date, ImagesWrapper, Text, Title, Wrapper } from './NewsCard.styled'
import Image from 'next/image'
import { getSizes } from 'utils/vars'

const MAX_TEXT_LENGTH = 245

const NewsCard = ({
  title,
  date,
  text,
  src,
  onClick = () => {},
  hoverTimeout = 1500,
  width = 490,
  height = 272,
  withoutSpacing = false,
  withIndent = false,
  slug,
  ...props
}) => {
  const trimText = (text) => text.slice(0, MAX_TEXT_LENGTH).concat(`...</p>`)

  return (
    <Link prefetch={false} href={`${PATH.NEW}${slug}`} passHref>
      <Wrapper {...props} as="a">
        <ImagesWrapper cardWidth={width} cardHeight={height}>
          <Image
            src={src}
            layout="fill"
            alt={title}
            objectFit="cover"
            sizes={getSizes('490px')}
            loader={({src}) => src} // для загрузки без кэша (30.05.2023)
          />
        </ImagesWrapper>
        <Date withIndent={withIndent && 'withIndent'}>{date}</Date>
        <Title>{title}</Title>
        <Text
          dangerouslySetInnerHTML={{
            __html: `${text.length > MAX_TEXT_LENGTH ? trimText(text) : text}`,
          }}
        />
      </Wrapper>
    </Link>
  )
}

export default NewsCard
