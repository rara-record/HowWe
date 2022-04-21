import React from 'react';
import ReactDOM from 'react-dom';
import { AuthStoreProvider } from 'stores/AuthStore';
import App from './App';

ReactDOM.render(
  <AuthStoreProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthStoreProvider>,
  document.getElementById('root')
);
