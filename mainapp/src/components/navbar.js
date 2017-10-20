import React from 'react';
import {email} from "../App";
import {Button,Jumbotron, Fade, Well, ButtonToolbar, DropdownButton, MenuItem, Carousel, ButtonGroup, Image, Grid, Col, Row} from 'react-bootstrap';


const gH = "https://github.com/bambriz";
const lI = "https://www.linkedin.com/in/bryan-ambriz-5209715a/"

export class  NavBar extends React.Component {
  render() {
    const pages = ['Home', 'Resume', 'Media', 'Contact'];

    return(
      <div >
   <ButtonToolbar block>
     <ButtonGroup block>
     <DropdownButton bsSize="large" title="Contact" id="dropdown-size-large" block>
       <MenuItem eventKey="1"><a href={email}>{email}</a></MenuItem>
       <MenuItem divider />
       <MenuItem eventKey="2"><a href={gH}>Github</a></MenuItem>
       <MenuItem divider />
       <MenuItem eventKey="3"><a href={lI}>LinkedIn</a></MenuItem>
     </DropdownButton>
   </ButtonGroup>
   </ButtonToolbar>
 </div>
     );
  }
}
