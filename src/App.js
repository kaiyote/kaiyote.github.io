import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components/macro'
import { GlobalStyle } from './App.styles'
import { Burger, Menu } from './components'

const App = ({ theme }) =>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Burger />
    <Menu />
    <div>
      <h1>Hello, World!</h1>
    </div>
  </ThemeProvider>

App.propTypes = {
  theme: PropTypes.object
}

export default App
