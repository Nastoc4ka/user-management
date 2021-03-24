import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {ByDaysInRow, ByDone} from "../components/habit-statistics";

const Statistics = () => {
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4} sm={12}>
                    <ByDone character={'Total done TOP'}/>
                </Col>
                <Col md={4} sm={12}>
                    <ByDaysInRow character={'MAX days in row'}/>
                </Col>
            </Row>
        </Container>
    )
};

export default Statistics;