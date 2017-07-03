import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import ConnectedMenuList from './containers/connectedMenuList';
import ConnectedCartList from './containers/connectedCartList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>getFat</h2>
        </div>
        <div className="container">
          <div className="content">
            <ConnectedMenuList />
            <ConnectedCartList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
