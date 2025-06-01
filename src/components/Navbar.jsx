import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import logo from "../assets/Transparent Logo.ca853359f79a1022.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="position-sticky navbar">
            <div className="navbar container-fluid d-flex align-items-center">

                {/* Logo */}
                <div className="navbar__logo">
                    <a href="#home">
                        <img src={logo} alt="ReyanSys Logo" className="logo-img" />
                    </a>
                </div>


                {/* Desktop Nav Links */}
                <nav className="navbar__links-desktop">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact Us</a>
                </nav>


                {/* Desktop Social Icons */}
                <div className="navbar__icons-desktop">
                    <a href="https://www.facebook.com/reyansysllc/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://x.com/ReyanSys" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="mailto:contact@yourdomain.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href="https://www.linkedin.com/company/reyansys/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>

                {/* fabar */}
                <button className="navbar__toggle" onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="navbar__dropdown">
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#blog" onClick={() => setIsOpen(false)}>Blog</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
                    <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>

                    <div className="navbar__icons-mobile">
                        <a href="https://www.facebook.com/reyansysllc/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://x.com/ReyanSys" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="mailto:contact@yourdomain.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a href="https://www.linkedin.com/company/reyansys/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
