import styled, { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.secondaryText};
    font: 14px/1.21 'Fira Sans', sans-serif;
    font-weight: 400;
    margin: 0;
  }

  h1 {
    text-align: center;
  }
`

export const Body = styled.div`
  display: ${({ menuMargin }) => menuMargin ? 'block' : 'none'};
  margin-left: ${({ shifted, menuMargin }) => shifted ? menuMargin : 0};
  transition: margin-left 0.3s ease-in-out;
`
