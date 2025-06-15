import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import './Home.css';

const Home = () => {

    // useState for contactUs data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    // for errors
    const [errors, setErrors] = useState({});

    // Validation rules for each field in contact=us
    const validateField = (name, value) => {
        let error;

        if (name === "name") {
            if (!value.trim() || value.trim().length < 2) {
                error = "Name must be at least 2 characters";
            }
        }

        if (name === "email") {
            if (!value.trim().endsWith("@gmail.com")) {
                error = "Email must end with @gmail.com";
            }
        }

        if (name === "phone") {
            if (!value) {
                error = "Phone number is required";
            } else if (!/^\d*$/.test(value)) {
                error = "Phone must contain digits only";
            }
        }

        if (name === "message") {
            if (!value.trim() || value.trim().length < 2) {
                error = "Message must be at least 2 characters";
            }
        }

        return error;
    };

    // contact-us form handle change
    const handleChange = (e) => {
        let { name, value } = e.target;

        // For phone input: remove any non-digit characters immediately
        if (name === "phone") {
            value = value.replace(/\D/g, "");
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Validate this single field on change
        const error = validateField(name, value);
        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));
    };

    // Contact-us form submittion
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields on submit
        const newErrors = {};
        Object.keys(formData).forEach((field) => {
            const error = validateField(field, formData[field]);
            if (error) newErrors[field] = error;
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form Data:", formData);
            const existing = JSON.parse(localStorage.getItem("contacts")) || [];
            existing.push(formData);
            localStorage.setItem("contacts", JSON.stringify(existing));
            toast.success("Message sent successfully!"); setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        }
    };

    // for data-aos
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div style={{ paddingTop: '56px' }}>
            {/* Home Section */}
            <section id="home" className="home-section">
                <div className="content">
                    <h2 className="">Innovative and Reliable IT Solutions</h2>
                    <p className="">Welcome to ReyanSys: At ReyanSys, we're more than just a provider of IT services; we're your trusted partner in harnessing the magic of reliability to drive business success. Since our inception, we've been dedicated to transforming the way businesses operate by delivering cutting-edge IT solutions that you can rely on.</p>
                    <a href="#contact" className="btn btn-outline-dark px-3 py-2 mt-3 rounded-5 custom-hover">
                        Contact Us
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section py-5">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8" data-aos="fade-right">
                            <h2 className="section-title mb-4">About Us</h2>
                            <p className="section-subtitle mb-4">
                                We’re a team of designers, developers, and strategists passionate about building beautiful and
                                effective digital experiences.
                            </p>
                            <p className="section-text mb-4">
                                From branding and UI/UX design to full-stack web development, we work with startups and businesses
                                to create high-impact, user-centered solutions. Our focus is on performance, clean design, and long-term success.
                            </p>
                            <a href="#contact" className="btn btn-outline-dark rounded-5 px-4 py-2">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Section */}
            <section id="services" className="py-5 bg-light">
                <div className="container-fluid text-center">
                    <h2 className="mb-4 fw-bold">Services</h2>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-6">
                            <div className="card service-card h-100 shadow-sm text-center rounded-4 p-5"
                                onClick={() => window.open('/service1', '_blank')}
                            >
                                <img src={service1} alt="Service 1" className="mx-auto mb-3" style={{ width: "80px" }} />
                                <h5 className="fw-semibold">Cloud Managed Services</h5>
                                <p className="text-muted">To provide comprehensive, reliable, and scalable cloud managed services through ReyanSys, ensuring seamless migration, optimization, and ongoing management of clients cloud infrastructure to enhance efficiency, security, and agility while maximizing ROI.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <div className="card service-card h-100 shadow-sm text-center rounded-4 p-5"
                                onClick={() => window.open('/service2', '_blank')}>
                                <img src={service2} alt="Service 2" className="mx-auto mb-3" style={{ width: "80px" }} />
                                <h5 className="fw-semibold">Managed Observability and Monitoring Services</h5>
                                <p className="text-muted">At ReyanSys, we understand that in today's digital landscape, businesses rely heavily on their IT infrastructure to deliver seamless services to their customers. Any disruptions or performance issues can directly impact business operations and revenue.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <div className="card service-card h-100 shadow-sm text-center rounded-4 p-5"
                                onClick={() => window.open('/service3', '_blank')}>
                                <img src={service3} alt="Service 3" className="mx-auto mb-3" style={{ width: "80px" }} />
                                <h5 className="fw-semibold">Managed DevOps Services</h5>
                                <p className="text-muted">Certainly! Here are some potential objectives for ReyanSys to consider in offering DevOps services</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <div className="card service-card h-100 shadow-sm text-center rounded-4 p-5"
                                onClick={() => window.open('/service4', '_blank')}>
                                <img src={service4} alt="Service 4" className="mx-auto mb-3" style={{ width: "80px" }} />
                                <h5 className="fw-semibold">Staffing Services</h5>
                                <p className="text-muted">Contact ReyanSys today to learn more about our comprehensive IT staffing services and discover how we can help you achieve your digital transformation goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="py-5 bg-white">
                <div className="container text-center">
                    <h2 className="fw-bold mb-4">Our Blog</h2>
                    <p className="text-muted mb-5">Explore our latest insights and updates.</p>


                </div>
            </section>

            {/* ContactUs Section */}
            <section id="contact" className="contact-section py-5">
                <div className="container-fluid">
                    <div className="row align-items-center">

                        {/* Left: Form */}
                        <div className="col-lg-8 mb-4 mb-lg-0">
                            <div className="contact-form p-4">
                                <h3 className="mb-4">Get in Touch</h3>
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="name"
                                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            name="email"
                                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            type="tel"
                                            name="phone"
                                            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                                            placeholder="Your Phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        // maxLength={15}
                                        />
                                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <textarea
                                            name="message"
                                            className={`form-control ${errors.message ? "is-invalid" : ""}`}
                                            rows="4"
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                                    </div>

                                    <button type="submit" className="btn btn-outline-dark rounded-5 px-4 custom-hover">
                                        Send Message
                                    </button>

                                </form>
                            </div>
                        </div>

                        {/* Right: Map */}
                        <div className="col-lg-4">
                            <div className="map-wrapper rounded-5 overflow-hidden shadow">
                                <iframe
                                    title="Company Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df3c7b9d%3A0x123456789abcdef!2sYour+Company+Location!5e0!3m2!1sen!2sus!4v1610000000000"
                                    width="100%"
                                    height="350"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
