export const color = {
  white: '#fff',
  black: 'rgba(0, 0, 0, 1)',
  hover: 'rgba(244, 244, 241, 0.5);',
  active: '#f4f4f1',
  accent: '#EAF2F0',
  accentHover: '#B6CBC6',
  accentHoverTransparent: '#F5F9F8',
  accentLink: '#A3BAB4',
  textActive: 'rgba(0, 0, 0, 0.3)',
  placeholder: 'rgba(0, 0, 0, 0.5)',
  borderActive: '#6A6F75',
  border: 'rgba(106, 111, 117, 0.3)',
  borderSocials: 'rgba(255, 255, 255, 0.3)',
  secondaryColor: 'rgba(37, 40, 41, 0.8)',
  backgroundDark: '#1B1C1D',
  contactsTitle: 'rgba(255, 255, 255, 0.5)',
  footerLinks: 'rgba(255, 255, 255, 0.4)',
  footerLinksMob: 'rgba(255, 255, 255, 0.6)',
  footerTitle: 'rgba(255, 255, 255, 0.78)',
  icon: '#E5E5E5',
  headquatersBackground: '#303030',
  error: '#FF0101',
  info: 'rgba(0, 0, 0, 0.8)',
  more: 'rgba(0, 0, 0, 0.4)',
  shipyardTitle: '#292827',
  shipyardHeader: '#0F0E0E',
  scrollBar: 'rgba(255, 255, 255, 0.3)',
  featureText: '#232727',
  featureBackground: '#D7E5E2',
  spoilerTitle: '#94B0AA',
  subacive: '#EDEEE9',
  borderDivider: '#C4C4C4',
  borderGray: 'rgba(0, 0, 0, 0.2)',
  gray: '#DADADA',
  personCardName: '#2d2626',
  invitationText: '#696d6d',
  planBorder: '#EDEEE9',
  mapBorder: 'rgba(196, 196, 196, 0.6)',
  sublink: '#636F6F',
}

export const font = {
  mini: '10px',
  small: '12px',
  smallHeight: '14px',
  semibase: '13px',
  base: '14px',
  baseHeight: '20px',
  middle: '15px',
  medium: '16px',
  mediumHeight: '20px',
  large: '18px',
  largeHeight: '20px',
}

// transition
export const trans = {
  fast: '0.1s ease',
  base: '0.2s ease',
  medium: '0.3s ease',
  long: '0.5s ease',
}

// media
export const breakpoints = {
  mobile: 374,
  mobileLarge: 480,
  phablet: 640,
  tablet: 768,
  notebook: 980,
  fullhd: 1280,
  ultraWide: 1440,
}

export const size = {
  mobile: `max-width: ${breakpoints.mobile}px`,
  mobileLarge: `max-width: ${breakpoints.mobileLarge}px`,
  phablet: `max-width:${breakpoints.phablet}px`,
  tablet: `max-width: ${breakpoints.tablet}px`,
  notebook: `max-width:${breakpoints.notebook}px`,
  fullhd: `max-width: ${breakpoints.fullhd}px`,
  ultraWide: `max-width: ${breakpoints.ultraWide}px`,
}

export const getSizes = (
  defaultSize,
  params = ['mobileLarge', 'phablet', 'tablet']
) => {
  let sizes = ''
  for (const param of params) {
    sizes += `(${size[param]}) ${breakpoints[param]}w, `
  }
  sizes += defaultSize
  return sizes
}

export const media = {
  mobile: `@media screen and (${size.mobile})`,
  mobileLarge: `@media screen and (${size.mobileLarge})`,
  phablet: `@media screen and (${size.phablet})`,
  tablet: `@media screen and (${size.tablet})`,
  notebook: `@media screen and (${size.notebook})`,
  fullhd: `@media screen and (${size.fullhd})`,
  ultraWide: `@media screen and (${size.ultraWide})`,
}

export const REVALIDATE_INTERVAL = 60
