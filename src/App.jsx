import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Apresent from "./Components/Apresent.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Apresent/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
