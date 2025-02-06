import "./App.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio-react" element={<Home />}></Route>
        <Route path="/Skills" element={<Skills />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
