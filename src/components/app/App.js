import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {HomePage, LoginPage, Statistics} from '../../pages';
import Header from "../header";
import Footer from "../footer";
import {Col, Container, Row} from 'react-bootstrap';
import './app.css';


const App = () => {

    return (
        <Container role='main'>
            <Row>
                <Col>
                    <Header />
                    <Switch>
                        <Route exact path='/' component ={HomePage}/>
                        <Route path='/login' component={LoginPage}/>
                        <Route path='/statistics' component={Statistics}/>
                    </Switch>
                    <Footer />
                </Col>
            </Row>
        </Container>
    )
};

export default App
