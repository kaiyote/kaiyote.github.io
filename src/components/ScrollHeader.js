import Headroom from 'react-headroom'
import { Header, Logo } from './ScrollHeader.styles'

const ScrollHeader = () =>
  <Headroom>
    <Header>
      <div>
        <Logo src='icon.png' />
        <ul>
          <li>about</li>
          <li>github</li>
          <li>top</li>
        </ul>
      </div>
    </Header>
  </Headroom>

export default ScrollHeader
