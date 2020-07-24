import styled, { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.secondaryText};
    font-family: 'Fira Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.21;
    margin: 0;
  }

  h1 {
    text-align: center;
  }
`

interface BodyProps {
  menuMargin: string
  isShifted: boolean
}

export const Body = styled.div<BodyProps>`
  display: ${({ menuMargin }) => menuMargin != null ? 'block' : 'none'};
  margin-left: ${({ isShifted, menuMargin }) => isShifted ? menuMargin : 0};
  transition: margin-left 0.3s ease-in-out;
`
