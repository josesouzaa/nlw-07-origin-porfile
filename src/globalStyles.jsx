import { createGlobalStyle } from 'styled-components'

import Background from '../images/background.svg'

export const GlobalStyle = createGlobalStyle`
  html, body {
    --grey: hsl(240, 9%, 89%);
    --black: hsl(240, 6%, 13%);

    height: 100%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    display: grid;
    place-items: center;
    padding: 0;
    margin: 0;
  }

  main {
    background: url(${Background}) no-repeat center/cover;
    width: 100vw;
    min-height: 812px;
    height: 100vh;
  }

  h1 {
    font-size: 1.5rem;
  }

  a {
    color: black;
    text-decoration: none;
  }
`
