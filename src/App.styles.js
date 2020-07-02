import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${props => props.theme.secondaryDark};
    color: ${props => props.theme.secondaryText};
    font: 14px/1.21 'Fira Sans', sans-serif;
    font-weight: 400;
    height: 3000px;
    margin: 0;
  }

  h1 {
    text-align: center;
  }
`

export { GlobalStyle }
