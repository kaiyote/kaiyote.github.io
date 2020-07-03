import { useEffect, useRef, useState } from 'preact/hooks'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components/macro'
import { Body, GlobalStyle } from '~/App.styles'
import { Burger, Menu } from '~/components'
import { usePhoneSized } from '~/hooks'

const App = ({ theme }) => {
  const isPhoneSized = usePhoneSized()
  const [menuOpen, setMenuOpen] = useState(!isPhoneSized)
  const menuRef = useRef(null)
  const [menuMargin, setMenuMargin] = useState(null)

  useEffect(() => { setMenuMargin(getComputedStyle(menuRef.current).width) }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {typeof window !== 'undefined' &&
        <>
          <Menu isOpen={menuOpen} isMobile={isPhoneSized} ref={menuRef} />
          <Burger isOpen={menuOpen} onClick={() => setMenuOpen(s => !s)} />
        </>
      }
      <Body isShifted={menuOpen && !isPhoneSized} menuMargin={menuMargin}>
        <h1>Hello, World!</h1>
      </Body>
    </ThemeProvider>
  )
}

App.propTypes = {
  theme: PropTypes.object
}

export default App
