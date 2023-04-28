import styled, { css } from 'styled-components'
import { forwardRef, memo } from 'react'
import { LazyLoadImage } from 'lib/LazyLoadImage'
const StyledImg = styled.img`
  user-select: none;
  max-width: 100%;
  ${({ cover }) =>
    cover &&
    css`
      object-fit: cover;
      width: 100%;
      height: 100%;
    `}
`

export const StyledImageWrapper = styled.div`
  user-select: none;
  max-width: 100%;
  ${({ cover }) =>
    cover &&
    css`
      object-fit: cover;
      width: 100%;
      height: 100%;

      img,
      span {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    `}
`

const Image = forwardRef(
  (
    {
      src,
      srcset,
      cover,
      alt,
      className,
      lazy = true,
      flexGrow,
      shipyardDetailPage,
      isPlaying,
      isMain,
      ...props
    },
    ref
  ) => {
    if (!src) return false

    if (lazy) {
      return (
        <StyledImageWrapper ref={ref} className={className} cover={cover}>
          <LazyLoadImage
            src={src}
            srcSet={srcset}
            alt={alt || ''}
            {...props}
            threshold={300}
            effect="opacity"
          />
        </StyledImageWrapper>
      )
    }

    return (
      <StyledImg
        src={src}
        ref={ref}
        srcSet={srcset}
        alt={alt || ''}
        className={className}
        cover={cover}
        {...props}
      />
    )
  }
)

export default memo(Image)
