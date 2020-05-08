import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  html, body {
    font: 14px/1.21 'Helvetica Neue', arial, sans-serif;
    font-weight: 400;
  }

  h1 {
    text-align: center;
  }
`

const App = () =>
  <>
    <GlobalStyle />
    <div>
      <h1>Hello, World!</h1>
    </div>
  </>

export default App
