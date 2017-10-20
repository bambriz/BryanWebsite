import React from 'react';
//import styles and from react-bootstrap
import {navStyle, profStyle, nameStyle, ewStyle, edStyle, projectStyle, skillStyle} from './styles';
//import { Document, Page } from 'react-pdf';
//import from react-bootstrap
import {Button,Jumbotron, Fade, Well, ButtonToolbar, DropdownButton, MenuItem, Carousel, ButtonGroup, Image, Grid, Col, Row} from 'react-bootstrap';
//import important variables
import {name, profPicURL, mySchool, email} from "../App";




/////all the components for Resume



class NameAndEducation extends React.Component{
  render(){
    const mySchool = "University of California Santa Cruz";
    return(
      <div>
        <h1 style={nameStyle}>{name}</h1>
        <p background="#ff6f69">With passion and enthusiasm, I strive to add diversity and quality to frontend development.</p>

        <h1 style={edStyle}><strong>Education</strong></h1>
        <Jumbotron >
        <h2><strong>B.S. Computer Science: Computer Game Design</strong></h2>
        <h2>{mySchool}</h2>
        <p>9/2012 - 12/2017             Santa Cruz, CA</p>
      </Jumbotron>
      </div>
    );
  }
}

class WorkExperience extends React.Component {
  render(){
    return(
      <div >
        <h1 style={edStyle}><strong>Work Experience</strong></h1>
          <Carousel interval="5000">
             <Carousel.Item>
               <img width={900} height={500} alt="900x500" src="https://www.ledr.com/colours/grey.jpg"/>
               <Carousel.Caption>
                   <h2 color="black"><strong>QA Intern</strong></h2>
                   <h2 color="black">Chonic Logic LLC</h2>
                   <p color="black">01/2014 – 09/2014            Santa Cruz, CA</p>
                   <p color="black">Chronic Logic LLC was an American independent video game developer and publisher located in Santa Cruz, California, United States.</p>
                   <h4>Project Description:</h4>
                 <p>CLIMB! (A 2D mountain climbing arcade game for the Xbox 360).
                 Contributed code to built-in level editor using C#.
                 Designed new levels for multiplayer & the main campaign using built-in level editor.
                 Tested all levels & new features that were added with each version of the game & reported bugs
               </p>
               <h6>contact: Kevin Grove <a href="kmg.zhg@gmail.com "> kmg.zhg@gmail.com </a></h6>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img width={900} height={500} alt="900x500" src="https://www.ledr.com/colours/grey.jpg"/>
               <Carousel.Caption>

                 <h2><strong>Summer Camp Instructor</strong></h2>
                 <h2>iD Tech Camps</h2>
                 <p>06/2015 – 08/2015            California</p>
                 <p>iD Tech is a leader in summer STEM education programs for students ages 6–18. </p>
                 <h4>Tasks:</h4>

                   <p> Supervised 8 students at a time</p>
                   <p>Created & taught courses including: FPS design with Unreal Engine 4,modding minecraft with Java, & level design with Hammer for Team Fortress 2 & Portal 2
                   </p>


               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img width={900} height={500} alt="900x500" src="https://www.ledr.com/colours/grey.jpg"/>
               <Carousel.Caption>


                 <h2><strong>Summer Camp Lead Instructor</strong></h2>
                 <h2>iD Tech Camps</h2>
                 <p>06/2017 – 08/2017            Santa Clara, CA</p>
                 <p>iD Tech is a leader in summer STEM education programs for students ages 6–18. </p>
                 <h4>Tasks:</h4>

                   <p> Supervised other instructors and staﬀ while also teaching courses in Unreal Engine 4, Maya, and RPG Maker.
                   </p>

               </Carousel.Caption>
             </Carousel.Item>
   </Carousel>







      </div>
    );
  }
}
//todo: Add different styles to each component, especially in the first header to seperate sections


class CoreCorruption extends React.Component{
  constructor(...args) {
   super(...args);
   this.state = {};
 }
 render(){

     return(

         <div>
           <h2><strong>Core Corruption (2014)</strong> </h2>
         <Button onClick={()=> this.setState({ open: !this.state.open })}>
           Info
         </Button>
         <Fade in={this.state.open}>
           <div>
             <Well>

               <Button href="https://github.com/alexv510/CoreCorruption" bsStyle="primary" bsSize="large" block>Source Code</Button>
               Top-down (2D) shooter game in a team of 4 using melon.js library<br></br>
                  contributed:player controls, collision detection, & enemy spawning.

             </Well>
           </div>
         </Fade>
       </div>


 );
 }
}

class DDS extends React.Component{
  constructor(...args) {
   super(...args);
   this.state = {};
 }
 render(){

     return(

         <div>
          <h2><strong>Dynamic Diﬃculty Shmup (2016)</strong> </h2>
         <Button onClick={()=> this.setState({ open: !this.state.open })}>
           Info
         </Button>
         <Fade in={this.state.open}>
           <div>
             <Well>


                   <Button href="https://github.com/bambriz/gameAi-Final-Project" bsStyle="primary" bsSize="large" block>Source Code</Button>
                 Shooter that matches the skill of the player; lead programmer<br></br>
                    contributed: player movement (Android & PC), HFSM that changes<br></br>
                     the behaviour of enemy spawning and player controls; coded in<br></br>
                     Lua using Corona SDK; team of 3<br></br>

                 <iframe width="560" height="315" src="https://www.youtube.com/embed/4Xrl0WUhif0" frameborder="0" allowfullscreen></iframe>

             </Well>
           </div>
         </Fade>
       </div>


 );
 }
}

class SaMata extends React.Component{
  constructor(...args) {
   super(...args);
   this.state = {};
 }
 render(){

     return(

         <div>
           <h2><strong>Sa Mata ni Nelya (2017)</strong></h2>
         <Button onClick={()=> this.setState({ open: !this.state.open })}>
           Info
         </Button>
         <Fade in={this.state.open}>
           <div>
             <Well>


                   <Button href="https://teamnelya.itch.io/sa-mata-ni-nelya" bsStyle="primary" bsSize="large" block>Download</Button>
                 A VR narrative game that explores a the life of a young,<br></br>
                    Filipina girl during the Japanese occupation. Built in Unity<br></br>
                     using Oculus Rift CV1 and touch controllers.<br></br>

                 Lead Programmer, Contributed mainly to VR controls<br></br>
                   and user experience. Built in a team of 11<br></br>

                 <iframe width="560" height="315" src="https://www.youtube.com/embed/eP0rHAXA8u0" frameborder="0" allowfullscreen></iframe>

             </Well>
           </div>
         </Fade>
       </div>


 );
 }
}

class PersonalProjects extends React.Component {

  render(){
    return(
    <div  >
      <h1 style={edStyle}><strong>Personal Projects</strong></h1>
      <Carousel interval={3000}>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://www.ledr.com/colours/grey.jpg"/>
          <Carousel.Caption>
              <CoreCorruption />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://www.ledr.com/colours/grey.jpg"/>
          <Carousel.Caption>
            <DDS />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://www.ledr.com/colours/grey.jpg"/>
          <Carousel.Caption>
              <SaMata />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>




    </div>
  );
  }
}

class Skills extends React.Component{
  render(){
    return(
      <div style={skillStyle}>
        <h1><strong>Skills</strong></h1>

        <img src="https://png.icons8.com/javascript-filled/ios7/25" title="JavaScript Filled" width="64" height="64" alt="Js"></img> <br></br>
        <img src="https://png.icons8.com/react-native-filled/ios7/25" title="React Native Filled" width="64" height="64" alt="React"></img>
        <img src="https://png.icons8.com/c-sharp-logo-filled/ios7/25" title="C Sharp Logo Filled" width="64" height="64" alt="C#"></img>
        <img src="https://png.icons8.com/python-filled/ios7/25" title="Python Filled" width="64" height="64" alt="Python"></img>
        <img src="https://png.icons8.com/c-plus-plus-filled/ios7/25" title="C Plus Plus Filled" width="64" height="64" alt="C++"></img>
        <img src="https://png.icons8.com/git-filled/ios7/25" title="Git Filled" width="64" height="64" alt="Git"></img>



      </div>
    );
  }
}

class Resume extends React.Component {

  render(){


    return(
      <div>
        <NameAndEducation />
        <Grid>
          <Row>
            <Col xs= {2} md= {8} xsOffset={2}>
              <WorkExperience />
            </Col>
            <Col xs={2} md={12}>
              <PersonalProjects />
            </Col>
          </Row>
        </Grid>


        <Skills />


      </div>
    );
  }
}
