import React, { useState } from 'react'
import './allCss/Login.css'

const LoginPage = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
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
                            <img src="/images/login.png"
                                alt="let's fill the login form" width={500} height={500} />
                        </div>
                        {/* let tackel registration form */}
                        <div className="registration-form">
                            <h1 className='main-heading mb-3'>login form</h1>
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
                                    <label htmlFor="password">password</label>
                                    <input type="password"
                                        name="password"
                                        placeholder='enter your password'
                                        id='password'
                                        required
                                        autoComplete='off'
                                        value={user.password}
                                        onChange={handleInput}
                                    />
                                </div>
                                <br />
                                <button type='submit' className='btn btn-submit'>Register Now</button>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default LoginPage
