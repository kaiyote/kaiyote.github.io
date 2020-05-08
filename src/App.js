import { ThemeProvider, createGlobalStyle } from 'styled-components/macro'
import PropTypes from 'prop-types'
import ScrollHeader from './components/ScrollHeader'

const GlobalStyle = createGlobalStyle`
  html, body {
    font: 14px/1.21 'Fira Sans', sans-serif;
    font-weight: 400;
    background-color: ${props => props.theme.secondaryDark};
    color: ${props => props.theme.secondaryText};
    height: 3000px;
  }

  h1 {
    text-align: center;
  }
`

const App = ({ theme }) =>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ScrollHeader />
    <div>
      <h1>Hello, World!</h1>
    </div>
  </ThemeProvider>

App.propTypes = {
  theme: PropTypes.object
}

export default App
