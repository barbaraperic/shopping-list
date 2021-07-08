export const COLORS = {
  primary: 'hsla(38, 95%, 51%, 1)',
  primary100: 'hsla(38, 95%, 80%, 1)',
  lightPrimary: 'hsla(33, 100%, 94%, 1)',
  brown: 'hsla(340, 28%, 39%, 1)',
  grayTransparent: 'hsla(0, 0%, 0%, 0.1)',
  gray500: 'hsla(0, 0%, 51%, 1)',
  gray700: 'hsla(240, 2%, 76%, 1)',
  gray800: 'hsla(0, 0%, 88%, 1)',
  blue: 'hsla(195, 86%, 64%, 1)',
  red: 'hsla(0, 79%, 63%, 1)'
};


const BREAKPOINTS = {
  phoneMax: 37.5,
  tabletMax: 59.375,
  laptopMax: 81.25
}

export const QUERIES = {
  'phoneAndDown': `(max-width: ${BREAKPOINTS.phoneMax}rem)`,
  'tabletAndDown': `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  'laptopAndDown': `(max-width: ${BREAKPOINTS.laptopMax}rem)`,
}