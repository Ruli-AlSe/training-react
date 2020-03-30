import React from 'react';

import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Home extends React.Component {
  render() {
    var titleSlider = 'A little Blog made with ReactJS';
    var titleBtn = 'See more';

    return(
      <div id="home">
        <Slider title={titleSlider} btnText={titleBtn} size="slider-big" />
        <div className="center">
          <div id="content" >
            <h2 className="subheader">Latest articles</h2>
            <Articles home="true" />
          </div>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Home;