import styled from 'styled-components/macro'

export const StyledMenu = styled.nav`
  background: ${({ theme }) => theme.primaryLight};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  left: 0;
  padding: 4rem 2rem 2rem;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateX(${({ isOpen }) => isOpen ? 0 : -100}%);
  transition: transform 0.3s ease-in-out;
  width: ${({ isMobile }) => isMobile ? '100vw' : 'auto'};

  a {
    color: ${({ theme }) => theme.primaryText};
    font-size: ${({ isMobile }) => isMobile ? 1.5 : 2}rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    margin: 2rem 0;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`
