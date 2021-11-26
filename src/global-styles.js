import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333333;
        font-size: 16px;
        margin: 0;        
    }
    
    body {
        @media (max-width: 800px) {
            font-size: 13px;
        }
    }
`
