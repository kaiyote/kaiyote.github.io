import { FunctionalComponent, h } from 'preact'
import { DefaultTheme } from 'styled-components/macro'
import App from './App'

const theme: DefaultTheme = {
  primary: '#263238',
  primaryLight: '#4f5b62',
  primaryDark: '#000a12',
  primaryText: '#fff',
  secondary: '#eceff1',
  secondaryLight: '#fff',
  secondaryDark: '#babdbe',
  secondaryText: '#000',
  primaryHover: '#ef9a9a',
  secondaryHover: '#ec407a'
}

const Root: FunctionalComponent = () => <App theme={theme} />

export default Root
