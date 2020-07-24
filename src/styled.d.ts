import 'styled-components/macro'

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string
    primaryLight: string
    primaryDark: string
    primaryText: string
    secondary: string
    secondaryLight: string
    secondaryDark: string
    secondaryText: string
    primaryHover: string
    secondaryHover: string
  }
}
