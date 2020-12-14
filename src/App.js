import './App.css';
import Header from './components/Header/Header.jsx';
import Slider from './components/Slider/Slider.jsx';
import Logo from './components/Logo/Logo.jsx';

function App() {
  return (
    <div className="grid-container">
      <Header className="Header" />
      <Logo className="Logo" />
      <Slider className="Slider" />
      
    </div>
  );
}

export default App;
