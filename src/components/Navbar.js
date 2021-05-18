import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import '../scss/Navbar.scss'    
import logo from '../images/meet.png'


export class navbar extends React.Component {
    
    render() {
        
        return (
            <>
  <Navbar collapseOnSelect  expand="lg" bg="light" variant="light">
  <Navbar.Brand href="/"><img
        src={logo}
        width="150"
        height="100"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link  href="/OurWork" > <h2 style={{color:"black",fontWeight:"bold"}}> Our Work</h2></Nav.Link>
      <Nav.Link  href="/Pricing">
        <h2 style={{color:"black",fontWeight:"bold"}}>Estimated Cost</h2>
      </Nav.Link>
      <Nav.Link  href="/AboutUs">
        <h2 style={{color:"black",fontWeight:"bold"}}>About Us</h2>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
        )
    }
}


export default navbar;  



