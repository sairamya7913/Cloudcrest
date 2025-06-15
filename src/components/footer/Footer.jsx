import { Col, Container, Row } from 'react-bootstrap';
import { FaEnvelope, FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa';

import logo from '../../assets/Logo.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-light text-dark">

            {/* Top Section: Logo, Description, Address */}
            <div className="py-5 border-top footer">
                <Container fluid>
                    <Row className="text-center text-md-start">

                        {/* Logo & Description */}
                        <Col md={6} className="mb-4">
                            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                                <img src={logo} alt="Company Logo" style={{ height: '40px', marginRight: '10px' }} />
                                <h5 className="mb-0">Cloud Crest Technologies</h5>
                            </div>
                            <p className="small">
                                Empowering your digital transformation with cloud-first, future-ready solutions. We help businesses thrive with reliable and scalable technology.
                            </p>
                        </Col>

                        {/* Address */}
                        <Col md={6} className="mb-4">
                            <h6>Address</h6>
                            <p className="small mb-0">123 Cloud Street, Innovation City</p>
                            <p className="small mb-0">California, USA - 90001</p>
                            <p className="small mb-0">Phone: +1 (555) 123-4567</p>
                            <p className="small mb-0">Email: contact@yourcompany.com</p>
                        </Col>

                    </Row>
                </Container>
            </div>

            {/* Bottom Section: Copyright */}
            <div className="border-top py-2 rights">
                <Container fluid>
                    <Row className="align-items-center text-center text-md-start">

                        <Col md={6} className="d-flex justify-content-center justify-content-md-start mb-2 mb-md-0">
                            <small className="copyRights">
                                &copy; {new Date().getFullYear()} Cloud Crest Technologies. All rights reserved.
                            </small>
                        </Col>


                        <Col md={6} className="d-flex justify-content-center justify-content-md-end gap-2">
                            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="mailto:contact@yourcompany.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                            <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        </Col>

                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default Footer;
