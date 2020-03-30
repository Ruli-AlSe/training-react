import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Movies from "./components/Movies";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import MyComponent from "./components/MyComponent";
import Form from "./components/Form";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/tests" component={MyComponent} />
            <Route exact path="/blog/article/:id" render={() => (
              <h1>Blog Article</h1>
            )} />
            <Route component={NotFound} />
          </Switch>
        <div className="clearfix" />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
