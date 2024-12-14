import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div 
      style={{background:'white',
      width:'100vw',
        
      }}>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
