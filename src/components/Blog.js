import React from 'react';

import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Blog extends React.Component {
  render() {
    var titleSlider = 'Blog section';

    return(
      <div id="blog">
        <Slider title={titleSlider} size="slider-small" />
        <div className="center">
          <div id="content" >
            { /* Articles list from API */ }
            <Articles />
          </div>
          <Sidebar blog="true" />
        </div>
      </div>
    );
  }
}

export default Blog;