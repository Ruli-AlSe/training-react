import React from 'react';

class MyComponent extends React.Component {
  render() {
    let recipe = {
      name: 'Pizza',
      ingredients: ['Paste', 'Tomato sauce', 'Jam', 'Pepperoni'],
      calories: 400
    }

    return (
      <div>
        <h1>{ 'Recipe' + recipe.name }</h1>
        <h2>{ 'Calories' + recipe.name }</h2>
        <ol>
          {
            recipe.ingredients.map((ingredient, i) => {
              return(
                <li key={i} >{ ingredient }</li>
              );
            })
          }
        </ol>
      </div>
    );
  }
}

export default MyComponent;
