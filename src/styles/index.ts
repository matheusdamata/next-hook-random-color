import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      gray900: '#121214',
      gray800: '#212428',
      gray700: '#202024',
      gray300: '#c4c4cc',
      gray200: '#e1e1e6',
      gray100: '#f1f1f1',

      pink900: '#ff014f',

      purpleLight: '#DA00FE',
      purpleDark: '#A100ED',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
