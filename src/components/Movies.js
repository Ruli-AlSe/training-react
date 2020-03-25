import React, {Component} from 'react';
import StaticMessage from './StaticMessage';


class Movies extends Component {
  render() {
    return(
      <div>
        <h1>This is a movies component</h1>
        <StaticMessage />
      </div>
    );
  }
}

export default Movies;
