import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    a:link {
        color: #fff;

        
    }

    a:visited {
        color: #fff;
        text-decoration: none;
    }

    button {
        cursor: pointer;
        border: none;
    }


`