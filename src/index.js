import useSSRStyles from './hooks/useSSRStyles'
import App from './App'

const theme = {
  primary: '#263238',
  primaryLight: '#4f5b62',
  primaryDark: '#000a12',
  primaryText: '#fff',
  secondary: '#fff',
  secondaryLight: '#fff',
  secondaryDark: '#ccc',
  secondaryText: '#000'
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
