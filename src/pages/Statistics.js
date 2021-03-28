import React from 'react';
import {connect} from 'react-redux'
import {Col, Container, Row} from "react-bootstrap";
import {ByDaysInRow, ByDone} from "../components/habit-statistics";
import Spinner from "../components/spinner";
import {BsFillStarFill} from "react-icons/bs";
import './statistics.css';

const Statistics = ({loadingStatistics}) => {

    if (loadingStatistics) return <Spinner/>;

    return (
        <Container className="statistics pt-3">
            <p style={{color: '#B2B7F6', fontSize: '20px'}}>Make your habit everyday routine! Do it at least for
                21<BsFillStarFill style={{color: 'orange', marginBottom: '1rem'}}/> days in row.</p>
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

const mapStateToProps = ({statisticsReducer: {loadingStatistics}}) => {
    return {loadingStatistics}
};

export default connect(mapStateToProps)(Statistics);