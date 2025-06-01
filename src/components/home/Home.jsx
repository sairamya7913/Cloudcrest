import React from "react";
import "./Home.css"; // Link to external CSS
import bgImage from "../../assets/download.jpg";

const Home = () => {
    return (
        <>
            <section id="home" className="home-main">
                <h1>Innovative and Reliable IT Solutions</h1>
                <p className="home-description">
                    Welcome to ReyanSys: At ReyanSys, we're more than just a provider of IT services; we're your trusted partner in harnessing the magic of reliability to drive business success. Since our inception, we've been dedicated to transforming the way businesses operate by delivering cutting-edge IT solutions that you can rely on.
                </p>
                <a href="#contact" className="home-button-link">
                    <button className="home-button">Contact Us</button>
                </a>
            </section>

            <section id="services" className="py-5 service">
                <div className="container">
                    <div className="row g-4">
                        {[
                            { img: "https://via.placeholder.com/150", title: "Card 1", text: "Description for card 1" },
                            { img: "https://via.placeholder.com/150", title: "Card 2", text: "Description for card 2" },
                            { img: "https://via.placeholder.com/150", title: "Card 3", text: "Description for card 3" },
                            { img: "https://via.placeholder.com/150", title: "Card 4", text: "Description for card 4" }
                        ].map((card, index) => (
                            <div className="col-md-6 col-lg-6" key={index}>
                                <div className="card text-center h-100 shadow-sm">
                                    <img src={card.img} className="card-img-top" alt={`Card ${index + 1}`} />
                                    <div className="card-body d-flex flex-column justify-content-center">
                                        <h5 className="card-title">{card.title}</h5>
                                        <p className="card-text">{card.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section id="blog" style={{ height: "100vh", padding: "50px 20px", scrollMarginTop: "80px" }}>
                <h1>Blog Section</h1>
                <p>Blog posts and articles.</p>
            </section>

            <section id="contact" style={{ height: "100vh", padding: "50px 20px", scrollMarginTop: "80px" }}>
                <h1>Contact Us Section</h1>
                <p>Contact details and form.</p>
            </section>
        </>
    );
};

export default Home;
