import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;

    }
    a:visited {
        color: #fff;
    }
    button {
        cursor: pointer;
    }
`