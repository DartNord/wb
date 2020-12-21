import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import menuCss from "./components/Menu/Menu.module.css";

let openMenu = () => {
    menuCss.sidebar.classList.toggle('active');
    menuCss.mContainer.classList.toggle('active');
};

ReactDOM.render(
  <React.StrictMode>
    <App openMenu={openMenu} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
