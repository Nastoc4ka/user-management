import React from 'react';
import './habitWelcome.css'
import {Button, Col, Container, Jumbotron, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const HabitWelcome = () => {
    return (
        <Container className="h-100">
            <Row className="justify-content-md-center h-100">
                <Col xs lg="6">
                    <Jumbotron className='mt-3 habitWelcome'>
                        <h1>ToHabit</h1>
                        <p>Welcome to habit app. Please sign in or register to make your first habits.</p>
                        <p>
                            <Button variant="primary-light">
                                <Link to="/login" className='mr-2'>Log In</Link>
                            </Button>
                            <Button variant="primary-light">
                                <Link to="/register">Sign up</Link>
                            </Button>
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
};

export default HabitWelcome