import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const BaseTheme = createGlobalStyle`
  ${reset}

  *, ::after, ::before {
    box-sizing: border-box;
  }
  
  body {
    font-family: Inter, sans-serif;
  }
`;
