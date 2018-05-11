import React, { Component } from 'react';
import logo from './usap_logo_web.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logos" alt="logo" />
          <h1 className="App-title">USAP Website</h1>
        </header>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
