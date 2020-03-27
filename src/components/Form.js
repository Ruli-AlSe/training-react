import React from 'react';

import Slider from './Slider';
import Sidebar from './Sidebar';

class Form extends React.Component {
  render() {
    var titleSlider = 'Form section';

    return(
      <div id="form">
        <Slider title={titleSlider} size="slider-small" />
        <div className="center">
          <div id="content" >
            { /* Articles list from API */ }
          </div>
          <Sidebar blog="false" />
        </div>
      </div>
    );
  }
}

export default Form;