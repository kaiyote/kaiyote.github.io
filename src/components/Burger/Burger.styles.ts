import styled from 'styled-components/macro'

export interface BurgerProps {
  isOpen: boolean
  onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) & ((e: Event) => void)
}

export const BurgerWrapper = styled.button<BurgerProps>`
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
    background: ${({ theme, isOpen }) => isOpen ? theme.secondary : theme.primaryDark};
    border-radius: 10px;
    height: 0.25rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;

    :first-child {
      transform: rotate(${({ isOpen }) => isOpen ? 45 : 0}deg);
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? 0 : 1};
      transform: translateX(${({ isOpen }) => isOpen ? 20 : 0}px);
    }

    :last-child {
      transform: rotate(${({ isOpen }) => isOpen ? -45 : 0}deg);
    }
  }
`
