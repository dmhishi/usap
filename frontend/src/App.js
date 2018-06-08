import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './views/home';
import Profiles from './views/profiles';
import Login from './views/login';


class App extends Component {
  render() {
    return (
         <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>
          <Route exact={true} path='/profiles' render={() => (
            <div className="App">
              <Profiles />
            </div>
          )}/>
          <Route exact={true} path='/login' render={() => (
            <div className="App">
              <Login />
            </div>
          )}/>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
