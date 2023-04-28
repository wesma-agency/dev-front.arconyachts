import { createGlobalStyle } from 'styled-components'
import { fonts } from 'utils/mixins'
import { color } from 'utils/vars'

const style = `
  html {
    box-sizing: border-box;
    ${fonts.montserrat}
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    color: ${color.black}
  }

  *,
  *::before,
  *::after {
    box-shadow: none;
    box-sizing: inherit;
    outline: none;
  }

  button:focus {
    outline: none !important;
  }

  ::-ms-clear,
  ::-ms-reveal,
  input::-ms-clear,
  input::-ms-reveal {
    display: none !important;
  }
  
  table {
    border: 1px solid #ccc;
    overflow-x:auto;
  }
  thead {
    font-weight: bold;
  }
  th, td {
    padding: 10px;
    border: 1px solid #ccc;
  }
`

export const GlobalStyle = createGlobalStyle`
  ${style}
`
