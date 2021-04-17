import React from 'react';
import './welcome.css'
import {Button, Col, Container, Jumbotron, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const WelcomePage = () => {
    return (
        <Container>
            <Row className="justify-content-md-center h-100">
                <Col lg="7" className='my-auto'>
                    <Jumbotron className='mt-3 habitWelcome'>
                        <h1>Users Management</h1>
                        <p>Welcome to Users Management App. Please sign in or register.</p>
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

export default WelcomePage