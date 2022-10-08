import logo from './images/slime_cute.png';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Clock from './components/Clock';
import './styles.css';

function App() {
  return (

    <div className="App">
      <div class="container-full">
        <video autoPlay muted loop id="bg-video">
          <source src={require("./images/abstract_line2.mp4")} type="video/mp4"/>
        </video>
      </div>
      <ResponsiveAppBar/>

      <div class="container-fluid homepage-content">
        <div class="row justify-content-center">
        <img src={require("./images/slime_animated.gif")} class="slime" alt="logo" />          
        </div>
        <div class="row justify-content-center">
          <Clock/>
        </div>
  

      </div>

      <header className="App-header">
        
        <a
          className="primary-link"
          href="https://www.linkedin.com/in/aidan-aug/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
