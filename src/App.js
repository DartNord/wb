import React from 'react';
import Css from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.jsx';
import Logo from './components/Logo/Logo.jsx';
import Slider from './components/mainPage/Slider/Slider.jsx';
import TellAbout from "./components/mainPage/tellAbout/tellAbout";
import CallUsForm from "./components/mainPage/callUs/callUsForm";
import TabSort from "./components/mainPage/TabSort/TabSort";

import state from "./components/Redux/state.js";

function App(props) {
  return (
    <div className={Css.grid_container}>
      <Header className={Css.Header} />
      <Logo className={Css.Logo} />
      <Slider className={Css.Slider} images={state.sliderImg}/>
      <TellAbout className={Css.TellAbout} />
      <TabSort className={Css.TabSort} imagesIcons={state.tabImg.iconostasy} imagesRastSt={state.tabImg.rastStul}
               imagesHandMade={state.tabImg.handMade} metrics_etc={state.tabImg.metrics_etc}
               photo={state.tabImg.photo} table={state.tabImg.table} decor={state.tabImg.decor}
               tbGames={state.tabImg.table_games} />
      <CallUsForm className={Css.Callus} />
    </div>
  );
}

export default App;
