import { useEffect, useRef, useState } from 'preact/hooks'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components/macro'
import { Body, GlobalStyle } from '~/App.styles'
import { Burger, Menu } from '~/components'
import { useOutsideClick, usePhoneSized } from '~/hooks'

const App = ({ theme }) => {
  const isPhoneSized = usePhoneSized()
  const [menuOpen, setMenuOpen] = useState(!isPhoneSized)
  const menuRef = useRef(null)
  const menuWrapperRef = useRef(null)
  const [menuMargin, setMenuMargin] = useState(null)
  useOutsideClick(menuWrapperRef, () => setMenuOpen(false))

  useEffect(() => { if (menuRef.current) setMenuMargin(getComputedStyle(menuRef.current).width) }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div ref={menuWrapperRef}>
        <Burger open={menuOpen} onClick={() => setMenuOpen(s => !s)} />
        <Menu open={menuOpen} mobile={isPhoneSized} ref={menuRef} />
      </div>
      <Body shifted={menuOpen && !isPhoneSized} menuMargin={menuMargin}>
        <h1>Hello, World!</h1>
      </Body>
    </ThemeProvider>
  )
}

App.propTypes = {
  theme: PropTypes.object
}

export default App
