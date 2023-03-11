import {createGlobalStyle} from 'styled-components'

export default  createGlobalStyle`

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