import React from "react";

class Slider extends React.Component {
  render() {
    return (
      <div id="slider" className={this.props.size}>
        <h1>
          { this.props.title }
        </h1>
        {this.props.btnText &&
          <a href="#" className="btn-white">
            { this.props.btnText }
          </a>
        }
      </div>
    );
  }
}

export default Slider;
