import { createGlobalStyle } from 'styled-components';
import 'reset-css';

export default createGlobalStyle`
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
    }
    img{
      width:100%;
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
`;
