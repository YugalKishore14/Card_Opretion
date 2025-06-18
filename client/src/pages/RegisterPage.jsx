import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './allCss/Login.css';
import { useAuth } from '../store/auth';

const RegisterPage = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
        password: ''
    });
    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("Registration successful!");
        const response = await fetch("http://localhost:4000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })

        if (response.ok) {
            const data = await response.json();
            console.log("hello", data); //
            storeTokenInLS(data.token);
            setUser({
                username: '',
                email: '',
                phone: '',
                password: ''
            });
            navigate('/loginpage');
        }
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols"></div>
                        <div className="registration-image">
                            <img src="/images/register.png"
                                alt="a girl is trying to do registration" width={500} height={500} />
                        </div>
                        {/* let tackel registration form */}
                        <div className="registration-form">
                            <h1 className='main-heading mb-3'>registration form</h1>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input type="text"
                                        name="username"
                                        placeholder='enter your name'
                                        id='username'
                                        required
                                        autoComplete='off'
                                        value={user.username}
                                        onChange={handleInput}
                                    />
                                </div>
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
                                    <label htmlFor="phone">phone</label>
                                    <input type="number"
                                        name="phone"
                                        placeholder='enter your phone'
                                        id='phone'
                                        required
                                        autoComplete='off'
                                        value={user.phone}
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

export default RegisterPage
