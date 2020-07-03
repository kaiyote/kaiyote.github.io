import { forwardRef } from 'preact/compat'
import PropTypes from 'prop-types'
import { links } from '~/data'
import { StyledMenu } from './Menu.styles'

const Menu = forwardRef(({ isOpen, isMobile }, ref) =>
  <StyledMenu {...{ isOpen, isMobile }} ref={ref}>
    {Object.entries(links).map(([k, v]) => <a key={k} href={v} target='_blank' rel='noreferrer'>{k}</a>)}
  </StyledMenu>
)

Menu.propTypes = {
  isOpen: PropTypes.bool,
  isMobile: PropTypes.bool
}
export default Menu
