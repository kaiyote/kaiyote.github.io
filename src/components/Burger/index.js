import PropTypes from 'prop-types'
import { BurgerWrapper } from './Burger.styles'

const Burger = ({ open, onClick }) =>
  <BurgerWrapper {...{ open, onClick }}>
    {new Array(3).fill(0).map((_, i) => <div key={i} />)}
  </BurgerWrapper>

Burger.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func
}

export default Burger
