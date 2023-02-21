import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body{
        margin: 0;
        padding: 0;
        background: black;
        font-family: 'Open Sans', sans-serif;
    }

    h1{
        color:white;
    }

   
`;

export default GlobalStyle;
