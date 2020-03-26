import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Movies from "./components/Movies";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/page1" component={Movies} />
            <Route component={NotFound} />
          </Switch>
        <div className="clearfix" />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
