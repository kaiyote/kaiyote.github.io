import { StyledMenu } from './Menu.styles'
import { links } from '~/data'

const Menu = () =>
  <StyledMenu>
    {Object.entries(links).map(([k, v]) => <a key={k} href={v} target='_blank' rel='noreferrer'>{k}</a>)}
  </StyledMenu>

export default Menu
