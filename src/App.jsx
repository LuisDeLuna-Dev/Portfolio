import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Apresent from "./Components/Apresent.jsx";
import Footer from "./Components/Footer.jsx";
import SobreMim from "./Components/SobreMim.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Apresent />
        <SobreMim />
        <Footer />  
      </BrowserRouter>
    </div>
  );
}

export default App;
