import React from "react";
import "./assets/css/App.css";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Movies from "./components/Movies";

function App() {
  var titleSlider = 'A little Blog made with ReactJS';
  var titleBtn = 'See more';
  return (
    <div className="App">
      <Header />
      <Slider title={titleSlider} btnText={titleBtn} />
      <div className="center">

        <Movies />
        <Sidebar />
      </div>
      <div className="clearfix" />
      <Footer />
    </div>
  );
}

export default App;
