import { useState } from "react";
import "./allCss/ContactPage.css";
import { useAuth } from "../store/auth";;

const ContactPage = () => {
    const [user, setUser] = useState({
        email: "",
        username: "",
        message: "",
    });
    const [userData, setUserData] = useState(true);
    const { user: users } = useAuth();
    if (userData && users) {
        setUser({
            username: users.username,
            email: users.email,
            message: ""
        });
        setUserData(false);
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(user);
        console.log(user);
    };
    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols"></div>
                        <div className="registration-image">
                            <img
                                src="/images/support.png"
                                alt="let's fill the login form"
                                width={500}
                                height={500}
                            />
                        </div>
                        {/* let tackel registration form */}
                        <div className="registration-form">
                            <h1 className="main-heading mb-3 contact-h1">Contact Us</h1>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="enter your email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="enter your username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label>message</label>
                                    <textarea
                                        type="text"
                                        required
                                        name="message"
                                        autoComplete="off"
                                        value={user.message}
                                        onChange={handleInput}
                                    />
                                </div>

                                <br />
                                <button type="submit" className="btn btn-submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.
                            15941158684!2d77.3126275323735!3d28.699778769826178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                            1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1748590143280!5m2!1sen!2sin"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Contact Map"
                        />
                    </div>
                </main>
            </section>
        </>
    );
};

export default ContactPage;
