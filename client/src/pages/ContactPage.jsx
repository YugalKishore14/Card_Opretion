import { useState } from 'react'
import './allCss/ContactPage.css'

const ContactPage = () => {
    const [user, setUser] = useState({
        email: '',
        username: '',
        message: ''
    });
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

    }
    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols"></div>
                        <div className="registration-image">
                            <img src="/images/support.png"
                                alt="let's fill the login form" width={500} height={500} />
                        </div>
                        {/* let tackel registration form */}
                        <div className="registration-form">
                            <h1 className='main-heading mb-3 contact-h1'>Contact Us</h1>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input type="email"
                                        name="email"
                                        placeholder='enter your email'
                                        id='email'
                                        required
                                        autoComplete='off'
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input type="text"
                                        name="username"
                                        placeholder='enter your username'
                                        id='username'
                                        required
                                        autoComplete='off'
                                        value={user.username}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label >Message</label>
                                    <textarea type="text"
                                        required
                                        name='message'
                                        autoComplete='off'
                                        value={user.message}
                                        onChange={handleInput}
                                    />
                                </div>

                                <br />
                                <button type='submit' className='btn btn-submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default ContactPage
