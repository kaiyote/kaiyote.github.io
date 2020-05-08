import { throttle } from 'lodash'
import { useEffect, useState } from 'preact/hooks'

const useDocumentScroll = onScroll => {
  const [, setScrollPosition] = useState(0)
  let previousScrollTop = 0

  const handleDocumentScroll = () => {
    const { scrollTop } = document.documentElement || document.body

    setScrollPosition(prevPos => {
      previousScrollTop = prevPos
      return scrollTop
    })

    onScroll({ previousScrollTop, scrollTop })
  }

  const throttledHandleDocumentScroll = throttle(handleDocumentScroll, 250)

  useEffect(() => {
    window.addEventListener('scroll', throttledHandleDocumentScroll)

    return () => window.removeEventListener('scroll', throttledHandleDocumentScroll)
  }, [throttledHandleDocumentScroll])
}

export default useDocumentScroll
