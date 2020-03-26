import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Movies from './components/Movies';
import NotFound from './components/NotFound';

class Router extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
