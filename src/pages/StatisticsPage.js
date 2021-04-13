import React from 'react';
import {connect} from 'react-redux'
import {Col, Container, Jumbotron, Row} from "react-bootstrap";
import {ByDaysInRow, ByDone} from "../components/habit-statistics";
import Spinner from "../components/spinner";
import {BsFillStarFill} from "react-icons/bs";
import './statistics.css';
import HabitWelcome from "../components/habit-welcome";

const StatisticsPage = ({loadingStatistics, isLoggedIn}) => {

    if (!isLoggedIn) return <HabitWelcome/>;

    if (loadingStatistics) return <Spinner/>;

    return (
        <Container className="statistics pt-3">
            <Jumbotron className="statisticsJumbotron h-100">
                <p style={{color: '#B2B7F6', fontSize: '20px'}}>Make your habit everyday routine! Do it at least for
                    21<BsFillStarFill style={{color: 'orange', marginBottom: '1rem'}}/> days in row.</p>
                <Row>
                    <Col md={5} sm={12}>
                        <ByDone character={'Total done TOP'}/>
                    </Col>
                    <Col md={6} sm={12}>
                        <ByDaysInRow character={'MAX days in row'}/>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    )
};

const mapStateToProps = ({
                             statisticsReducer: {loadingStatistics},
                             authLoginReducer: {isLoggedIn}
                         }) => {
    return {loadingStatistics, isLoggedIn}
};

export default connect(mapStateToProps)(StatisticsPage);