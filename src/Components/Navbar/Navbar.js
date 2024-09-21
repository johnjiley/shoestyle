import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
// import cartIcon from '../assets/trolley.png';

// import { Link } from "react-router-dom";

// import NavDropdown from 'react-bootstrap/NavDropdown';


function NavScrollExample() {
  return (
    <Navbar  expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#home">ShoeStore </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="/cards">Cards</Nav.Link> */}
            {/* <Nav.Link href="/cart">Cart</Nav.Link> */}
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/Product">Product</Nav.Link>
            <Nav.Link href="/CartPage">CartPage</Nav.Link>
            <Nav.Link href="/AddProduct">AddProduct</Nav.Link>
            

            {/* <div className="cart-icon-container">
            <a href="/cart">
              <img src={cartIcon} alt="Cart" className="cart-icon" />
            </a>
          </div> */}

            {/* <NavDropdown title="Link" id="navbarScrollingDropdown"> */}
              {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;