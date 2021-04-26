import './App.css';
import React, { Component } from 'react';
import { MyAppbar } from './components/AppBar';
import { Typography, Grid, Paper } from '@material-ui/core';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <MyAppbar />
        <header className="App-header">
          <Grid container spacing={2} style={{ marginTop: "10vh" }}>
            <Grid item xs={4} style={{ marginLeft: "1em" }}>
              <Paper style={{ backgroundColor: "#5b1c93" }}>
                <Typography style={{ color: "#ffffff" }}>Links To Tools Used:</Typography>
                <Grid>
                  <img></img>
                  <a href="https://github.com/" style={{ color: "#61dafb" }}>Github</a>
                </Grid>
                <Grid>
                  <img></img>
                  <a href="https://github.com/" style={{ color: "#61dafb" }}>React JS</a>
                </Grid>
                <Grid>
                  <img></img>
                  <a href="https://github.com/" style={{ color: "#61dafb" }}>Material-UI</a>
                </Grid>
                <Grid>
                  <img></img>
                  <a href="https://github.com/" style={{ color: "#61dafb" }}>React Router Dom</a>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style={{ backgroundColor: "#5b1c93" }}>
                <Typography style={{ color: "#ffffff" }}>
                  Hello newcomer, you have found my portfolio website! Welcome and please enjoy your 
                  stay here as you get to know me more. This website is designed act as a portfolio
                  to show some of the work that I have done as a software developer. This website is 
                  also a personal challenge to try and develop my own React JS project and reinforce 
                  my skills on the front-end part of development. This website is a React JS project
                  that is also hosted via github pages (Thank you github!). This website uses the
                  material-ui library to give it a cleaner look. React-router-dom is used in order
                  to link to other pages on the website. The tabs on the appbar at the top will 
                  guide you to other pages in order to learn more about me. I will also provide 
                  links to tools that I used in order to develop this website on another page.
                  Also, this projetc is a public repo if you want to check out the activity/code - Zach
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </header>
      </div>
    );
  } 
}

export default App;
