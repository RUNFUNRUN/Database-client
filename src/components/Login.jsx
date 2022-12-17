import React from 'react';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import {getLogin} from '../api.js';
import '../App.css';

export const Login = (props) => {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const {userId, password} = props;
        const loggedIn = await getLogin(userId.current.value, password.current.value);
        if (loggedIn) {
            props.setIsLoggedIn(true);
            setError("");
            console.log("Login successful");
            navigate("/");
        } else {
            setError("Incorrect username or password");
        }
    };

    return (
        <>
            <Form className='login-form' onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicUserId">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control placeholder="Enter User ID" ref={props.userId} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" ref={props.password} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p className='error'>{error}</p>
            </Form>
            <div className='register'>
                <Link to="/register">Register</Link>
            </div>
        </>
    );
};
