import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import MyComponent from './components/MyComponent';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <section className="components">
        <MyComponent />
        <Movies />
      </section>
    </div>
  );
}

export default App;
