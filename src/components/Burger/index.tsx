import { FunctionalComponent, h } from 'preact'
import { BurgerProps, BurgerWrapper } from './Burger.styles'

const Burger: FunctionalComponent<BurgerProps> = ({ isOpen, onClick }) =>
  <BurgerWrapper {...{ isOpen, onClick }}>
    {new Array(3).fill(0).map((_, i) => <div key={i} />)}
  </BurgerWrapper>

export default Burger
