import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaEnvelope, FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa';

import logo from "../../assets/Logo.jpg";

// Navbar Component
const MyNavbar = () => {
  return (
    <Navbar fixed="top" expand="lg" className="" style={{ backgroundColor: 'lightblue' }}>
      <Container fluid>

        {/* Left: Logo and Company Name */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Company Logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
          <h3 className="h5 m-0">Cloud Crest Technologies</h3>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar" className="justify-content-between">

          {/* Center: Nav links */}
          <Nav className="mx-auto text-center">
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-2">About Us</Nav.Link>
            <Nav.Link href="#services" className="mx-2">Services</Nav.Link>
            <Nav.Link href="#blog" className="mx-2">Blog</Nav.Link>
            <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
          </Nav>

          {/* Right: Social Media Icons */}
          <div className="d-flex justify-content-center mt-2 mt-lg-0">
            <a
              href="https://facebook.com"
              className="text-dark me-3"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="mailto:contact@yourcompany.com"
              className="text-dark me-3"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://twitter.com"
              className="text-dark me-3"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              className="text-dark"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>


        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default MyNavbar;
