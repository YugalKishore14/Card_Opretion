import { Link } from "react-router-dom";
import "./allCss/AboutPage.css";

const AboutPage = () => {
    return (
        <>
            <section className="section-hero section">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>Welcome. Yugal Techncial </p>
                        <h1>Why Choose Us?</h1>
                        <p>
                            Expertise: Our team consists of experienced IT professionals who are
                            passionate about staying up-to-date with the latest industry trends.
                        </p>
                        <p>
                            Customization: We understand that every business is unique. That's
                            why we create solutions that are tailored to your specific needs and
                            goals.
                        </p>
                        <p>
                            Customer-Centric Approach: We prioritize your satisfaction and
                            provide top-notch support to address your IT concerns.{" "}
                        </p>
                        <p>
                            Affordability: We offer competitive pricing without compromising on
                            the quality of our services.{" "}
                        </p>
                        <p>
                            Reliability: Count on us to be there when you need us. We're
                            committed to ensuring your IT environment is reliable and available
                            24/7.{" "}
                        </p>
                        <div className="btn btn-group">
                            <Link to="/contactpage">
                                <button className="btn">Connect Now</button>
                            </Link>
                            <Link to="/servicepage">
                                <button className="btn secondary-btn">Learn More</button>
                            </Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img
                            src="/images/about.png"
                            alt="coding together"
                            width="400"
                            height="500"
                        />
                    </div>
                </div>
            </section>
            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>10+</h2>
                        <p>Registered Companies</p>
                    </div>
                    <hr />
                    <div className="div1">
                        <h2>100+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <hr />
                    <div className="div1">
                        <h2>10+</h2>
                        <p>Well Known Developers </p>
                    </div>
                    <hr />
                    <div className="div1">
                        <h2>24/7</h2>
                        <p>Service</p>
                    </div>
                </div>
            </section>
        </>

    );
};

export default AboutPage;
