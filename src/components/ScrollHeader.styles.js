import styled from 'styled-components/macro'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.primaryText};

  padding: 5px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 50vw;
    min-width: 800px;
  }
`

const Logo = styled.img`
  height: 4rem;
  width: 4rem;
`

export { Header, Logo }
