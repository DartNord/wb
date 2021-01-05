import React from 'react';
import Css from './App.module.css';
import Header from './components/Header/Header.jsx';
import Logo from './components/Logo/Logo.jsx';
import Slider from './components/mainPage/Slider/Slider.jsx';

function App(props) {
  return (
    <div className={Css.grid_container}>
      <Header className={Css.Header} />
      <Logo className={Css.Logo} />
      <Slider className={Css.Slider} />
      
    </div>
  );
}

export default App;
