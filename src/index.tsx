import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firestore } from './utils/firebase';
console.log(firestore);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
