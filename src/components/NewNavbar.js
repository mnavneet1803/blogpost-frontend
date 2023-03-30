import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import React from "react";

function NewNavbar(){
    return(
        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Blog Post</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/blog/create/post"  >Create Post</Nav.Link>
                <Nav.Link as={Link} to="/blog/contact/us">Contact Us</Nav.Link>
                

              </Nav>
              <Nav>
            <Nav.Link  as={Link} to="/blog/signup/user">SignUp</Nav.Link>
            <Nav.Link as={Link} to="/blog/signin/user"> SignIn </Nav.Link>
            
          </Nav>


              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
    )
        
}


export default NewNavbar