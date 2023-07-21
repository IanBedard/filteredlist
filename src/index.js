import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// info about StrictMode
    /*
    it renders the element twice to make it easier to detect error if the render fails
    */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>
);

