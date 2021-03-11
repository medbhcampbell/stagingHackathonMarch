import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Addition';
import Addition from './Addition';
import Timer from './timer';

function App() {
  return (
    <div className="dark-bg-grad ">
      <body className="App dark-bg-grad spacing-around">
      <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Addition></Addition>
    </div>
    </body>
    <Timer></Timer>
    </div>
  );
}

export default App;
