import "./App.css";
import About from "./About";
import Service from "./Service";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
