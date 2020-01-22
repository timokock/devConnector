import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth'; 
import Alert from '../layout/Alert';
import { Provider } from 'react-redux';
import store from '../../store';


const Login = ( props ) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        props.login(email, password);
    }

    // Redirect if logged in
    if(props.isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <Provider store={store}>
            <section className="container">
                <Alert />
                <h1 className="large text-primary">Sign In</h1>
                <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
                <form className="form" onSubmit={e => onSubmit(e)}>
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
                {/* SUBMIT BUTTON */}
                <input 
                type="submit" 
                className="btn btn-primary" 
                value="Login" 
                />
                </form>
                <p className="my-1"> Don´t have an account? <Link to="/register">Sign Up</Link></p>
            </section>
        </Provider>
    )
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

