import { createGlobalStyle } from 'styled-components'
import Montserrat from '../assets/fonts/Montserrat.ttf'

const FontStyle = createGlobalStyle`
  // Montserrat

  @font-face {
    font-display: swap;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url(${Montserrat}) format('truetype');
  }
`

export default FontStyle
