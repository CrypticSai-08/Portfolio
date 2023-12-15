import Home from "./components/Home";
import NavBaar from "./components/NavBaar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";

function App() {
  return (
    <div> 
      <NavBaar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <SocialLinks/>
      <Skills/>
    </div>
  );
}

export default App;
