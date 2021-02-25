import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { AppBar } from './components/AppBar';

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Portfolio</h1>
	      <h2>Author: Zachary Garceau</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
