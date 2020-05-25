import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components/macro'
import { GlobalStyle } from './App.styles'
import ScrollHeader from './components/ScrollHeader'

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
