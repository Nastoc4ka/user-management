import React from 'react';
import HabitList from "../components/habit-list/index";
import InputEditHabit from "../components/habit-create";
import {Col, Container, Row} from "react-bootstrap";

const HomePage = () => {
    return (
        <Container className="mt-3">
            <Row>
                <Col sm={7}>
                    <InputEditHabit />
                    <HabitList />
                </Col>
                <Col sm={5} className='mt-2'>
                    Week days
                </Col>
            </Row>
        </Container>)
};

export default HomePage