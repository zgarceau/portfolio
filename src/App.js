import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { MyAppbar } from './components/AppBar';
import { Typography } from '@material-ui/core';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <MyAppbar />
        <header className="App-header">
          <Typography>
            Hello newcomer, you have discovered my portfolio website!
          </Typography>
        </header>
      </div>
    );
  } 
}

export default App;
