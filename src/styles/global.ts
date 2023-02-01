import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
            
        ::-webkit-scrollbar {
            width: 0.2rem;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
            background: #A9A9A9;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #c5c5c5;
        }
        ::selection {
            background: pink;
        }
    }
    button{
        cursor: pointer;
    }
    ul, ol, li{
        list-style: none;
    }
    body{
        background: #F6F7F9;
        width: 100vw;
        height: 100vh;
    }
`