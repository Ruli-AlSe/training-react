import React from "react";

import Slider from './Slider';
import Sidebar from './Sidebar';

class MyComponent extends React.Component {
  render() {
    let recipe = {
      name: "Pizza",
      ingredients: ["Paste", "Tomato sauce", "Jam", "Pepperoni"],
      calories: 400
    };
    var titleSlider = 'Tests section';

    return (
      <div id="tests-component">
        <Slider title={titleSlider} size="slider-small" />
        <div className="center">
          <div id="content">
            <h1>{"Recipe" + recipe.name}</h1>
            <h2>{"Calories" + recipe.name}</h2>
            <ol>
              {recipe.ingredients.map((ingredient, i) => {
                return <li key={i}>{ingredient}</li>;
              })}
            </ol>
          </div>
          <Sidebar blog="false" />
        </div>
      </div>
    );
  }
}

export default MyComponent;
