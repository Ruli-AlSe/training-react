import React from "react";
import "./assets/css/App.css";

import TestsComponent from "./components/TestsComponent";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  var titleSlider = 'A little Blog made with ReactJS';
  var titleBtn = 'See more';
  return (
    <div className="App">
      <Header />
      <Slider title={titleSlider} btnText={titleBtn} />
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
