import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #222B38;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    color: #E5E5E5;
    font: 16px Roboto, sans-serif;
  }

  #root {
    width: 100%;
    margin: 0 auto;
    padding: 50px 20px;
  }

  button {
    cursor: pointer;
  }
`;