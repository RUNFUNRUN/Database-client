import React, {useRef, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Navigation} from './Navigation.jsx';
import {createIssue} from '../api.js';

export const Create = (props) => {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const title = useRef(null);
    const description = useRef(null);
    const deadline = useRef(null);
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const today_yyyymmdd = today.getFullYear() + "-" + month.toString().padStart(2, "0") + "-" + day.toString().padStart(2, "0");

    const handleCreate = async (e) => {
        e.preventDefault();
        const issue = {
            userId: props.userId,
            title: title.current.value,
            description: description.current.value,
            startline: today_yyyymmdd,
            deadline: deadline.current.value,
            state: 0,
        };
        const result = await createIssue(issue);
        setSuccess(result);
    };

    useEffect(() => {
        if (success) {
            navigate("/home/list");
        }
    }, [success]);

    return (
        <div>
            <Navigation
                isLoggedIn={props.isLoggedIn}
                setIsLoggedIn={props.setIsLoggedIn}
                userId={props.userId}
            />
            <div>
                <Form className='form create' onSubmit={handleCreate}>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control ref={title} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Descrition</Form.Label>
                        <Form.Control as="textarea" ref={description} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDeadline">
                        <Form.Label>Deadline</Form.Label>
                        <Form.Control type='date' ref={deadline} />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Create Issue
                    </Button>
                </Form>
            </div>
        </div>
    );
}
