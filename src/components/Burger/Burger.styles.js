import styled from 'styled-components/macro'

export const BurgerWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  left: 2em;
  padding: 0;
  position: absolute;
  top: 2em;
  width: 2rem;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    background: ${({ theme, open }) => open ? theme.secondary : theme.primaryDark};
    border-radius: 10px;
    height: 0.25rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;

    :first-child {
      transform: rotate(${({ open }) => open ? 45 : 0}deg);
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? 0 : 1};
      transform: translateX(${({ open }) => open ? 20 : 0}px);
    }

    :last-child {
      transform: rotate(${({ open }) => open ? -45 : 0}deg);
    }
  }
`
