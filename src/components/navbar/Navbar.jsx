import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaEnvelope, FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import logo from "../../assets/Logo.jpg";

const MyNavbar = () => {
  const navigate = useNavigate();

  // Navigate to home and scroll to top
  const handleLogoClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Navigate to home, then scroll to the section
  const handleNavClick = (sectionId) => {
    navigate('/');

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200); // wait for DOM to render
  };

  return (
    <Navbar fixed="top" expand="lg" style={{ backgroundColor: 'lightblue' }}>
      <Container fluid>

        {/* Logo + Company Name */}
        <Navbar.Brand onClick={handleLogoClick} className="d-flex align-items-center" role="button">
          <img src={logo} alt="Company Logo" style={{ height: '40px', marginRight: '10px' }} />
          <h3 className="h5 m-0">Cloud Crest Technologies</h3>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar" className="justify-content-between">

          {/* Nav Links */}
          <Nav className="mx-auto text-center">
            <Nav.Link onClick={() => handleNavClick("home")} className="mx-2">Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("about")} className="mx-2">About Us</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("services")} className="mx-2">Services</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("blog")} className="mx-2">Blog</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("contact")} className="mx-2">Contact</Nav.Link>
          </Nav>

          {/* Social Icons */}
          <div className="d-flex justify-content-center mt-2 mt-lg-0">
            <a href="https://facebook.com" className="text-dark me-3" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="mailto:contact@yourcompany.com" className="text-dark me-3" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            <a href="https://twitter.com" className="text-dark me-3" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" className="text-dark" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
