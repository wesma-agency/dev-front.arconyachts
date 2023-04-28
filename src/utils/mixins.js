import { css, keyframes } from 'styled-components'
import { color, trans, media } from './vars'

export const fullWidth = css`
  width: 100vw;
  transform: translate(-7vw);
  ${media.fullhd} {
    transform: translate(-6vw);
  }
  ${media.tablet} {
    transform: translate(-5vw);
  }
`

export const fonts = {
  montserrat: css`
    font-family: Montserrat, Arial, 'Helvetica CY', 'Nimbus Sans L',
      sans-serif;
  `,
  SangBleuSunrise: css`
    font-family: SangBleuSunrise;
  `,
}

export const typography = {
  h1: css`
    ${fonts.SangBleuSunrise}
    font-size: 80px;
    font-weight: normal;
    line-height: 0.85em;

    ${media.fullhd} {
      font-size: 60px;
    }
    ${media.notebook} {
      font-size: 49px;
    }
    ${media.tablet} {
      font-size: 40px;
      line-height: 53px;
    }
    ${media.phablet} {
      font-size: 36px;
    }
  `,
  h2: css`
    ${fonts.SangBleuSunrise}
    font-size: 80px;
    letter-spacing: -0.02em;
    font-weight: normal;
    ${media.fullhd} {
      font-size: 70px;
    }
    ${media.notebook} {
      font-size: 56px;
    }
    ${media.tablet} {
      font-size: 36px;
      letter-spacing: normal;
    }
    ${media.phablet} {
      font-size: 26px;
    }
  `,
  h3: css`
    font-weight: 500;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;

    ${media.fullhd} {
      font-size: 36px;
    }
    ${media.notebook} {
      font-size: 32px;
    }
    ${media.tablet} {
      font-size: 26px;
    }
  `,
  h4: css``,
  p: css`
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.02em;
    ${media.fullhd} {
      font-size: 15px;
    }
    ${media.tablet} {
      letter-spacing: normal;
      font-size: 14px;
    }
  `,
  label: css`
    font-size: 10px;
    line-height: 140%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  `,
}

export const aspectRatio = (width, height, maxWidth = '100%') => {
  const aspect = height / width
  return css`
    position: relative;
    &:before {
      content: '';
      display: block;
      width: ${maxWidth};
      padding-bottom: ${aspect * 100}%;
    }
  `
}

export const gap = (gap) => css`
  &:not(:last-child) {
    margin-right: ${gap}px;
  }
`

export const containerLeft = css`
  padding-left: 7vw;
  ${media.fullhd} {
    padding-left: 6vw;
  }

  ${media.tablet} {
    padding-left: 5vw;
  }
`
export const containerRight = css`
  padding-right: 7vw;
  ${media.fullhd} {
    padding-right: 6vw;
  }

  ${media.tablet} {
    padding-right: 5vw;
  }
`

export const container = css`
  ${containerLeft};
  ${containerRight}
`

export const boxShadow = {
  filterDrop: css`
    box-shadow: 0 4px 34px rgba(110, 123, 120, 0.15);
  `,
}

export const animations = {
  fadeIn: keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,
}

export const spoiler = css`
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: ${trans.base} height, ${trans.base} opacity;
  pointer-events: none;
  ${({ height }) =>
    height &&
    css`
      pointer-events: auto;
      height: ${height}px;
      opacity: 1;
    `};
`

// export const lineHeight = (fontSize = 14, lineHeight = 20) =>
//   parseInt(lineHeight) / parseInt(fontSize)

// export const flexWidth = (width = 100) => {
//   return {
//     width: width,
//     'max-width': width,
//     flex: `0 0 ${width}`
//   }
// }

// export const textOverflow = () => {
//   return {
//     overflow: 'hidden',
//     'max-width': '100%',
//     'white-space': 'nowrap',
//     'text-overflow': 'ellipsis'
//   }
// }

// export const lineClamp = (num) => {
//   return {
//     overflow: 'hidden',
//     display: '-webkit-box',
//     '-webkit-line-clamp': `${num}`,
//     '-webkit-box-orient': 'vertical'
//   }
// }
// export const betterFonts = () => {
//   return {
//     '-webkit-font-smoothing': 'antialiased',
//     '-moz-osx-font-smoothing': 'grayscale'
//   }
// }

// export const fontSmall = css`
//   font-size: ${vars.font.small};
//   line-height: ${lineHeight(vars.font.small, vars.font.smallHeight)};
// `
// export const fontBase = css`
//   font-size: ${vars.font.base};
//   line-height: ${lineHeight(vars.font.base, vars.font.baseHeight)};
// `
// export const fontMedium = css`
//   font-size: ${vars.font.medium};
//   line-height: ${lineHeight(vars.font.medium, vars.font.mediumHeight)};
// `
// export const fontLarge = css`
//   font-size: ${vars.font.large};
//   line-height: ${lineHeight(vars.font.large, vars.font.largeHeight)};
// `

// export const titleH1 = css`
//   font-size: ${vars.title.h1};
//   line-height: ${lineHeight(vars.title.h1, vars.title.h1height)};
//   font-weight: 700;
// `

export const customScroll = css`
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px ${color.textActive};
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: ${color.scrollBar};
    -webkit-box-shadow: inset 0 0 6px ${color.placeholder};
  }
`
