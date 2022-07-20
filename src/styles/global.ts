import { maxWidth } from 'styles/mixin';
import { createGlobalStyle } from 'styled-components';
import 'reset-css';

export default createGlobalStyle`
  * {
      box-sizing: border-box;
      font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
      'Malgun Gothic', sans-serif;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    html,body {
      font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
      'Malgun Gothic', sans-serif;
      color:#202325;
      background-color: white;
      letter-spacing: 0.5px;
      touch-action: pan-y;
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;

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

    a:focus,
      button:focus,
      input:focus,
      :focus {
        outline: none;
      }
      
      a::-moz-focus-inner,
      button::-moz-focus-inner,
      input::-moz-focus-inner,
      ::-moz-focus-inner {
        border: 0;
    }

    .inner {
      ${maxWidth};
      padding: 0 16px;
    }

    .ir_wa {
    overflow: hidden;
    position: absolute;
    width: 0;
    height: 0;
    line-height: 0;
    text-indent: -9999px; 
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
