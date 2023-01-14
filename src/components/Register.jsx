import React from 'react';
import {useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Navbar, Container} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import {createAccount} from '../api.js';
import '../App.css';

export const Register = (props) => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const newUserId = useRef(null);
    const newPassword = useRef(null);
    const confirmNewPassword = useRef(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        if (newPassword.current.value !== confirmNewPassword.current.value) {
            setError("Passwords do not match");
            return;
        }
        const created = await createAccount(newUserId.current.value, newPassword.current.value);
        if (created) {
            setError("");
            props.setIsLoggedIn(true);
            props.setUserId(newUserId.current.value);
            navigate("/");
        } else {
            setError("User ID already exists");
        }
    };

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Issue Management</Navbar.Brand>
                </Container>
            </Navbar>
            <Form className='form login' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicUserId">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control placeholder="Enter User ID" ref={newUserId} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" ref={newPassword} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" ref={confirmNewPassword} required />
                </Form.Group>
                <Button variant="secondary" type="submit">
                    Register
                </Button>
                <p className='error'>{error}</p>
            </Form>
            <div className='sub'>
                <Link to="/login">Login</Link>
            </div>
        </>
    );
}
