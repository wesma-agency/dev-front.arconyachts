import FavoritesIcon from 'assets/icons/favorite.svg'
import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { color, trans, breakpoints } from 'utils/vars'

const StyledFavorites = styled.div`
  cursor: pointer;
  display: block;

  ${({ isActive }) =>
    isActive &&
    css`
      svg {
        fill: ${color.accentHover};
        path {
          stroke: ${color.accentHover};
        }
      }
    `}
  @media screen and (min-width: ${breakpoints.tablet + 1}px) {
    &:hover {
      svg {
        fill: ${color.accentHover};

        path {
          stroke: ${color.accentHover};
        }
      }
    }
  }
`
const StyledFavoritesIcon = styled(FavoritesIcon)`
  fill: transparent;
  transition: ${trans.base} all;
`

const Favorites = ({ isActive, isLink, ...props }, ref) => (
  <StyledFavorites
    ref={ref}
    as={isLink ? 'a' : 'div'}
    {...props}
    isActive={isActive}
  >
    <StyledFavoritesIcon />
  </StyledFavorites>
)

export default forwardRef(Favorites)
