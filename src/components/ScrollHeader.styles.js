import styled from 'styled-components/macro'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.primaryText};
  transform: translateY(${props => props.hideHeader ? -110 : 0}%);
  transition: transform 0.3s ease;

  box-shadow: ${props => props.showShadow && '0 9px 9px -9px rgba(0, 0, 0, 0.13)'};
  padding: 5px;
`

const Logo = styled.img`
  height: 4rem;
  width: 4rem;
`

export { Header, Logo }
