import NavBarHeader from "./app/NavBarHeader"
import "./App.css";
import Home from "./app/Home";
import gsap from "gsap"


function App() {
  let timeline = gsap.timeline();
  return(
    <div className="App">
    <NavBarHeader timeline={timeline}/>
    <Home timeline={timeline} />
  </div>

  );
}

export default App;
