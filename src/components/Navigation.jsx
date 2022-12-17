import React, {useEffect} from 'react';
import {Container, Navbar, NavDropdown, Nav} from 'react-bootstrap';
import {Navigate, useNavigate} from 'react-router-dom';

export const Navigation = (props) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        props.setIsLoggedIn(false);
    };

    useEffect(() => {
        if (!props.isLoggedIn) {
            navigate("/login");
        }
    }, [props.isLoggedIn]);

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="">Issue Management</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link Link to="/home/list">Issue List</Nav.Link>
                            <Nav.Link Link to="/home/create">Create Issue</Nav.Link>
                            <Nav.Link Link to="/home/edit">Edit Issue</Nav.Link>
                            <Nav.Link Link to="/home/delete">Delete Issue</Nav.Link>
                            <Nav.Link Link to="/home/list" className='danger' onClick={handleLogout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
}
