import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  html, body {
    font: 14px/1.21 'Fira Sans', sans-serif;
    font-weight: 400;
    background-color: ${props => props.theme.secondaryDark};
    color: ${props => props.theme.secondaryText};
    height: 3000px;
    margin: 0;
  }

  h1 {
    text-align: center;
  }
`

export { GlobalStyle }
