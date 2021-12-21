import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthProvider} from './context/AuthProvider';
import MateriaProvider from './context/MateriasProvider';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <MateriaProvider>
        <App />
      </MateriaProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
