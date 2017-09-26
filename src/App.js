import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { path } from './electron-remote-api';

class App extends Component {
  render() {
    const homePath = path.resolve('~/..');

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Electron</h2>
        </div>
        <h3>Home path is: {homePath}</h3>
        <p className="App-intro">
          Hello Electron!
        </p>
      </div>
    );
  }
}

export default App;
