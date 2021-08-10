import React from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
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
    <NavDropdown style={{color:"black",fontWeight:"bold",fontSize:"18px"}} title="Our Work" id="collasible-nav-dropdown" >
      <NavDropdown style={{color:"black",fontWeight:"bold",fontSize:"18px"}} title="Mens" id="collasible-nav-dropdown">
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="/OurWork/Men/Shirt">Shirt</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Pant</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Kurta</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Pajamas</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Dhoties</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Sherwani Dhotis</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Blazers</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown style={{color:"black",fontWeight:"bold",fontSize:"18px"}} title="Womens" id="collasible-nav-dropdown">
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Blouse</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Dress</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">One Piece</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Drape Drama</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Gown</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Chaniya Choli</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Short Tops</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Dhoties</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Jackets</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Night Wear</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Maternity Wear</NavDropdown.Item>

      </NavDropdown>
      <NavDropdown style={{color:"black",fontWeight:"bold",fontSize:"18px"}} title="Kids" id="collasible-nav-dropdown">
      <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"20px"}} href="#action/3.1" disabled >Girls</NavDropdown.Item> 
      <NavDropdown.Divider />
      <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Frocks</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Dresses</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Chaniya Choli</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Dhoti Suit</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Gawns</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Dresses</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Night Wear</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"20px"}} href="#action/3.1" disabled >Boys</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Shirt</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Pant</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Kurta</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Ethnic Wear</NavDropdown.Item>
        <NavDropdown.Item style={{color:"black",fontWeight:"bold",fontSize:"16px"}} href="#action/3.1">Night Wear</NavDropdown.Item>
      </NavDropdown>
    </NavDropdown>
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



