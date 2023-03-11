import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
       title: string,
       
       colors: {
        primaryButton: string;
           secundary: string;

           background: string;
           text: string;
       }
    }
}