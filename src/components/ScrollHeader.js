import { useState } from 'preact/hooks'
import useDocumentScroll from '~/hooks/useDocumentScroll'
import { Header, Logo } from './ScrollHeader.styles'

const MIN_SCROLL = 80
const TIMEOUT_DELAY = 400

const ScrollHeader = () => {
  const [hideHeader, setHideHeader] = useState(false)
  const [showShadow, setShowShadow] = useState(false)

  useDocumentScroll(({ previousScrollTop, scrollTop }) => {
    const isScrolledDown = previousScrollTop < scrollTop
    const isMinScrolled = scrollTop > MIN_SCROLL

    setShowShadow(scrollTop > 2)

    setTimeout(() => setHideHeader(isScrolledDown && isMinScrolled), TIMEOUT_DELAY)
  })

  return (
    <Header {...{ hideHeader, showShadow }}>
      <Logo src='icon.png' />
      <ul>
        <li>home</li>
        <li>about</li>
        <li>github</li>
      </ul>
    </Header>
  )
}

export default ScrollHeader
