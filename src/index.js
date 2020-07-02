import { useSSRStyles } from '~/hooks'
import App from '~/App'

const theme = {
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

const Root = () => {
  const ssrNode = useSSRStyles(App, { theme })

  return (
    <>
      {ssrNode}
      <App theme={theme} />
    </>
  )
}

export default Root
