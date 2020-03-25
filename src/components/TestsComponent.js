import React from "react";
import MyComponent from "./MyComponent";
import Movies from "./Movies";

class TestsComponent extends React.Component {
  render() {
    return (
      <section id="content">
        <h2 class="subheader">Latest articles</h2>
        <section className="components">
          <MyComponent />
          <Movies />
        </section>
      </section>
    );
  }
}

export default TestsComponent;
