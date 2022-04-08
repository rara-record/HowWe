import { maxWidth } from 'styles/mixin';
import { createGlobalStyle } from 'styled-components';
import 'reset-css';

export default createGlobalStyle`
    * {
      box-sizing: border-box;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
    body {
      font-family: 'Noto Sans KR', sans-serif;
      background-color: white;
      letter-spacing: -0.5px;
      touch-action: pan-y;
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
    }
    img{
      width:100%;
      object-fit: cover;
    }
    button {
      background: inherit; 
      border:none; 
      box-shadow:none; 
      border-radius:0; 
      padding:0; 
      overflow:visible; 
      cursor:pointer
    } 
    .inner {
      ${maxWidth};
      padding: 0 16px;
    }
    .wrap {
      width: 67%;
    }

    .click-active {
      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      transform: rotate(180deg);
    }

    .click-none {
      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      transform: rotate(0deg);
    }
`;
