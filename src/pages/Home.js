import logo from '../images/slime_cute.png';
import '../App.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Clock from '../components/Clock';
import '../styles.css';


function Home () {
  return (   
  <>
  <div className="container-fluid homepage-content">
    <div className="row justify-content-center">
      <img src={require("../images/slime_animated.gif")} className="slime" alt="logo" />          
    </div>
    <div className="row justify-content-center">
      <Clock/>
    </div>
  </div>

</>
);
}

export default Home;