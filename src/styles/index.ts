import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  code {
    background: rgba(0,0,0,0.1);
  }

  ul, ol {
    font-size: 20px;
    line-height: 1.6em;
    margin-bottom: 30px;
  }

  li {
    margin-bottom: 12px;
  }
`;

export default GlobalStyle;
