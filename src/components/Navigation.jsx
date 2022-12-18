import React, {useEffect} from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

export const Navigation = (props) => {
    const navigate = useNavigate();

    const handleListClick = () => {
        navigate('/home/list');
    };

    const handleCreateClick = () => {
        navigate('/home/create');
    };

    const handleEditClick = () => {
        navigate('/home/edit');
    };

    const handleDeleteClick = () => {
        navigate('/home/delete');
    };

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
                            <Nav.Link onClick={handleListClick}>Issue List</Nav.Link>
                            <Nav.Link onClick={handleCreateClick}>Create Issue</Nav.Link>
                            <Nav.Link onClick={handleEditClick}>Edit Issue</Nav.Link>
                            <Nav.Link onClick={handleDeleteClick}>Delete Issue</Nav.Link>
                            <Nav.Link className='danger' onClick={handleLogout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
}
