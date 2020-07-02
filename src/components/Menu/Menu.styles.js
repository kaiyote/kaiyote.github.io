import styled from 'styled-components/macro'

export const StyledMenu = styled.nav`
  background: ${({ theme }) => theme.primaryLight};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  left: 0;
  padding: 2rem;
  position: absolute;
  text-align: left;
  top: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    color: ${({ theme }) => theme.primaryDark};
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    padding: 2rem 0;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`
