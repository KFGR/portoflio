import "./AppHeader.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap';

import { Link } from "react-router-dom";
// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

function template() {
  return (
    <div className="app-header">
      <div className="container-menu" >
        <div className="navegation-bar navegation-bar-menu">
          <Navbar className='navbar navbar-expand-lg' expand='lg'> {/* bg-white */}
            <Navbar.Toggle aria-controls='basic-navbar' style={{color:'#fbb71a', backgroundColor:'#144a9a'}}/>
              <Navbar.Collapse  id='basic-navbar'>
                <ul className='navbar-nav nav-masthead margin-left-auto mb-2 mb-lg-0'>
                  <Nav.Link as={Link} to="/Home" className='nav-link py-1' aria-current="page" ><li style={{color:'black', fontSize:'150%'}}>Home</li></Nav.Link>
                  <Nav.Link as={Link} to="/Photography" className='nav-link py-1' aria-current="page" ><li style={{color:'black', fontSize:'150%'}}>Photography</li></Nav.Link>
                  {/* <Nav.Link as={Link} to="/Conntact" className='nav-link py-1' aria-current="page" ><li style={{color:'black', fontSize:'150%'}}>Contact</li></Nav.Link> */}
                  {/* <Nav.Link as={Link} to="/Contacts" className='nav-link py-1' aria-current="page" ><li style={{color:'black', fontSize:'150%'}}>Contacts</li></Nav.Link>
                  <Nav.Link as={Link} to="/Join" className='nav-link py-1' aria-current="page" ><li style={{color:'black', fontSize:'150%'}}>Join</li></Nav.Link> */}
                </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default template;
