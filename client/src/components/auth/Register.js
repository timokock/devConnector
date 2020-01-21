import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const gravatarAdvice = "This site uses Gravatar so if you want a profile image, use a Gravatar email";

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();

        if(password !== password2) {
            console.log('Password do not match');
        } else {
            console.log('SUCCESS');
        };
    }

    return (
        <section className="container">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
            {/* NAME FIELD */}
            <div className="form-group">
                <input 
                type="text" 
                placeholder="Name" 
                name="name" 
                value={name}
                onChange={e => onChange(e)}
                required 
                />
            </div>
            {/* EMAIL FIELD */}
            <div className="form-group">
                <input 
                type="email" 
                placeholder="Email Address" 
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required 
                />
                <small className="form-text">{gravatarAdvice}</small>
            </div>
            {/* PASSWORD FIELD */}
            <div className="form-group">
                <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                value={password}
                onChange={e => onChange(e)}
                required
                />
            </div>
            {/* PASSWORD2 FIELD */}            
            <div className="form-group">
                <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                minLength="6"
                value={password2}
                onChange={e => onChange(e)}
                required
                />
            </div>
            {/* SUBMIT BUTTON */}
            <input 
            type="submit" 
            className="btn btn-primary" 
            value="Register" 
            />
            </form>
            <p className="my-1"> Already have an account? <Link to="/login">Sign In</Link></p>
        </section>
    )
};

export default Register;
