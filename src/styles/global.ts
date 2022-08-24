import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
  }
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #161B1E;
  }
`

export default GlobalStyle
