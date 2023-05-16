import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHome,FaCartArrowDown,FaSignInAlt} from 'react-icons/fa';
import { RiAdminFill} from 'react-icons/ri';

import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { context } from './Context';





function Navigation() {
  const nav=useNavigate()
  const data=useContext(context);
const {setSearch}=data;
  const searchHandle = (elemet) =>{
    setSearch(elemet.target.value);
    nav('/search')

    // console.log(search);
  }

  return (
    <>  
    <Navbar  bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">PLAYSHOE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

<Nav.Link as={Link} to="/cart">Your Cart</Nav.Link>

            <Nav.Link as={Link}to="/men">Men</Nav.Link>
            <Nav.Link as={Link}to="/women">Women</Nav.Link>
            <NavDropdown title="Sports" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Football</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Outdoor
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Running
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/product" >
              Collections
            </Nav.Link>
          
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search your brand"
              className="me-2"
              aria-label="Search"
              onChange={searchHandle}
            />
          </Form>

          </Nav>
          <Nav.Link as={Link} to={'/'}><Nav className='ms-4'><FaHome/></Nav></Nav.Link>
          <Nav.Link as={Link} to={'/cart'}><Nav className='ms-4'><FaCartArrowDown/></Nav></Nav.Link>
          <Nav.Link as={Link} to={'/signup'}><Nav className='ms-4'><FaSignInAlt/></Nav></Nav.Link>
          <Nav.Link as={Link} to={'/Admin'}><Nav className='ms-4'><RiAdminFill/></Nav></Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div>
    </div>
   </>
  );
}
export default Navigation