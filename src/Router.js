import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Movies from "./components/Movies";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

class Router extends React.Component {
  render() {
    var titleSlider = 'A little Blog made with ReactJS';
    var titleBtn = 'See more';

    return (
      <BrowserRouter>
        <Header />
        <Slider title={titleSlider} btnText={titleBtn} />
        <div className="center">
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route exact path="/home" component={Movies} />
            <Route component={NotFound} />
          </Switch>
          <Sidebar />
        </div>
        <div className="clearfix" />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
