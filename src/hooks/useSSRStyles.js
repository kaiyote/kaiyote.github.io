import { renderToString } from 'preact-render-to-string'
import { ServerStyleSheet } from 'styled-components/macro'

const useSSRStyles = (Root, props) => {
  if (typeof window === 'undefined') {
    const sheet = new ServerStyleSheet()
    renderToString(sheet.collectStyles(<Root {...props} />))
    return sheet.getStyleElement()
  }
}

export default useSSRStyles
