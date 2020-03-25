import React from "react";
import MyComponent from "./MyComponent";
import Movies from "./Movies";

class TestsComponent extends React.Component {
/*
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
*/

  state = {
    counter: 0
  };

  add = () => {
    //this.counter += 1;
    //this.state.counter += 1;
    this.setState({
      counter: (this.state.counter + 1)
    });
  }

  subtrac = () => {
    this.setState({
      counter: (this.state.counter - 1)
    });
  }

  render(e) {
    return (
      <section id="content">
        <h2 className="subheader">Latest articles</h2>
        <section className="components">
          <MyComponent />
          <Movies />
        </section>

        <h2 className="subheader">React States</h2>
        <p>
          {'Counter: ' + this.state.counter }
        </p>
        <p>
          <input type="button" value="add" onClick={ this.add } />
          <input type="button" value="subtrac" onClick={ this.subtrac } />
        </p>
      </section>
    );
  }
}

export default TestsComponent;
