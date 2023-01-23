import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Card, Button, Row} from 'react-bootstrap';
import {Navigation} from './Navigation.jsx';
import {getIssuesList, editIssueState} from '../api.js';

export const List = (props) => {
    const [update, setUpdate] = useState(false);
    const [issues, setIssues] = useState([]);

    const handleComplete = async (issue) => {
        await editIssueState(issue.userId, issue.title, 1);
        setUpdate(update ? false : true);
    };

    const handleIncomplete = async (issue) => {
        await editIssueState(issue.userId, issue.title, 0);
        setUpdate(update ? false : true);
    };

    useEffect(() => {
        (async () => {
            const issues = await getIssuesList(props.userId);
            setIssues(issues);
        })();
    }, [update]);

    return (
        <div>
            <Navigation
                isLoggedIn={props.isLoggedIn}
                setIsLoggedIn={props.setIsLoggedIn}
                userId={props.userId}
            />
            <div className='list'>
                <Row>
                    {issues.map((issue) => {
                        return (
                            <Col md={3} key={issue.title} className="element">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{issue.title}</Card.Title>
                                        <Card.Text>{issue.description}</Card.Text>
                                        <Card.Text>
                                            Register: {issue.startline.substr(0, 10)}&ensp;
                                            Deadline: {issue.deadline.substr(0, 10)}
                                        </Card.Text>
                                        <Card.Text>State: {issue.state === 0 ? "Incomplete" : "Complete"}</Card.Text>
                                        {
                                            issue.state === 0 ? (
                                                <Button variant="success" onClick={() => handleComplete(issue)}>Complete</Button>
                                            ) : (
                                                <Button variant="warning" onClick={() => handleIncomplete(issue)}>Incomplete</Button>
                                            )
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}
