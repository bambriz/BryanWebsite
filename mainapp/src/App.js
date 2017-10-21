import React, { Component } from 'react';
import './App.css';
import {navStyle, profStyle, nameStyle, ewStyle, edStyle, projectStyle, skillStyle} from './styles';
//import { Document, Page } from 'react-pdf';
//import from react-bootstrap
import {Button,Jumbotron, Fade, Well, ButtonToolbar, DropdownButton, MenuItem, Carousel, ButtonGroup, Image, Grid, Col, Row} from 'react-bootstrap';
//import from local components
import {NavBar} from "./components/navbar";
import {Resume} from "./components/resume";

export const name = "Bryan Erick Ambriz";
export const profPicURL = "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/14670810_1112984392104752_7307663425845533822_n.jpg?oh=797bfc608e298a30022b38872c374be4&oe=5A770341";
export const phoneLink = "tel:+18058242642";
export const phoneNumber = "(805)-824-2642";
export const email = "beambriz2017@gmail.com";


class ProfilePage extends React.Component {
  render() {
    return (
      <div style={profStyle}>

        <Grid><Row><Col xs={4} md={6}><Image src={profPicURL} circle></Image></Col></Row></Grid>

        <Resume />
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={navStyle}>
          <NavBar />
          <p>Welcome</p>
        </div>
        <ProfilePage />
      </div>
    );
  }
}

export default App;
