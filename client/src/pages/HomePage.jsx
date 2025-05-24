import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>We are the World Best IT Company</p>
                            <h1>Welcome to Yugal Technical</h1>
                            <p>
                                Are you ready to take your business to the next level with
                                cutting-edge IT solutions? Look no further! At Yugal Technical,
                                we specialize in providing innovative IT services and solutions
                                tailored to meet your unique needs.
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
                                src="/images/home.png"
                                alt="coding together"
                                width="400"
                                height="500"
                            />
                        </div>
                    </div>
                </section>
            </main>
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
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-image">
                        <img
                            src="/images/design.png"
                            alt="coding together"
                            width="400"
                            height="500"
                        />
                    </div>
                    <div className="hero-content">
                        <p>We are here to help </p>
                        <h1>Get Started Today</h1>
                        <p>
                            Ready to take the first step towards a more efficient and secure
                            IT infrastructure? Contact us today for a free consultation and
                            let's discuss how Yugal Technical can help your business thrive in
                            the digital age.
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
                </div>
            </section>
        </>
    );
};

export default HomePage;
