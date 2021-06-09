import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        //primary's colors:
        --white: #ffffff;
        --gray: #F4F5F6;
        --black: #010B14;
        --purple: #7A5AED;
        --purple-hover: #4318DC;
        --yellow: #FBD437;
        --pink: #C45FD3;

        //category's colors:
        --colorSpirit: #36A7F9;
        --colorSpirit-hover: #2b98e5;
        --colorMoney: #FBC037;
        --colorMoney-hover: #e8ae33;
        --colorHouse: #E85AED;
        --colorHouse-hover: #ca4bd1;
        --colorNight: #6C5FD3;
        --colorNight-hover: #5d53b5;
        --colorFit: #5FD3D2;
        --colorFit-hover: #5cc9c7;
        --colorFocus: #F93676;
        --colorFocus-hover: #e23169;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        color: var(--black);
        font-family: 'Raleway', sans-serif;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        border: none;
    }


    body {
        background-color: var(--gray);
        padding-top: 90px;
    }
`;
