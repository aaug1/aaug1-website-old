import logo from './images/slime_cute.png';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Clock from './components/Clock';
import './styles.css';
import { Route, Routes } from "react-router";
import { Container, List } from "@material-ui/core";
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App() {
  return (
    
    <Container>
      <ResponsiveAppBar/>
        <div className="container" style={{height: 100}}>
        <video autoPlay muted loop id="bg-video">
          <source src={require("./images/abstract_line2.mp4")} type="video/mp4"/>
        </video>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </Container>
  );
}

export default App;
