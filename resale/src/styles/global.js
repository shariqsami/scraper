import {createGlobalStyle} from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-weight: lighter;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        min-height: 100%;
        background: linear-gradient(-90deg, #FF265A, #E21B3F);
    }

    :root {
        --primary: #F61A41;
        --secondary: #3E3E3E;
        --tertiary: #FEFEFE;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    html, body, #root, input, button {
        font-family: 'Bree serif', serif;
        font-weight: lighter !important;
        font-size: 14px;
    }

    a {
        text-decoration: none;        
        transition: filter 0.3s;
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(90%);
        }
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
        color: var(--primary);
        background-color: var(--tertiary);
        padding: 10px 30px;
        border-radius: 8px;
        border: none;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(90%);
        }
    }

`;