import styled from 'styled-components/macro'

export const MarkdownWrapper = styled.div``

export const StyledMenu = styled.nav`
  background: ${({ theme }) => theme.primaryLight};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  left: 0;
  padding: 5rem 2rem 2rem;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateX(${({ isOpen }) => isOpen ? 0 : -100}%);
  transition: transform 0.3s ease-in-out;
  width: ${({ isMobile }) => isMobile ? '100vw' : 'auto'};

  * {
    color: ${({ theme }) => theme.primaryText};
  }

  div,
  a {
    font-size: ${({ isMobile }) => isMobile ? 1.5 : 2}rem;
  }

  a {
    font-weight: bold;
    letter-spacing: 0.5rem;
    margin: 1rem 0 0;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  ${MarkdownWrapper} {
    font-size: initial;
    max-width: ${({ isMobile }) => isMobile ? null : '250px'};
    text-align: initial;

    a {
      font-size: initial;
      letter-spacing: initial;
      text-transform: initial;
    }
  }
`

export const Separator = styled.hr`
  margin: 1rem 0;
  width: 100%;
`
