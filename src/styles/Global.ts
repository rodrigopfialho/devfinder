import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root {
        --blue: #1f2a48;
        --blueLight: #0079fe;
        --blueDark: #141c2f;
        --white: #ffffff;
    }

    html, body {
        max-width: 1440px;
        width: 100vw;
        height: 100vh;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;