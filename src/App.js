import React from "react";
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

import TestsComponent from "./components/TestsComponent";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <div className="center">

        <TestsComponent />
        <Sidebar />
      </div>
      <div className="clearfix" />
      <Footer />
    </div>
  );
}

export default App;
