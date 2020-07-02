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
  top: 5%;
  width: 2rem;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    background: ${({ theme }) => theme.primaryLight};
    border-radius: 10px;
    height: 0.25rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;
  }
`
