/* Packages import */
import React from 'react';
import ReactDOM from 'react-dom/client';
/* Locals import */

//Styles
import './styles/reset.scss';
import './styles/index.scss';

//Components
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
