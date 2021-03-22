import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import moment from "moment";
import './currentWeekMarkedHabit.css';
import {Container, OverlayTrigger, Table, Tooltip} from "react-bootstrap";

const CurrentWeekMarkedHabit = (props) => {
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        setHabits(props.habits);
        console.log(habits);
    });

    const week = [
        moment().isoWeekday(1),
        moment().isoWeekday(2),
        moment().isoWeekday(3),
        moment().isoWeekday(4),
        moment().isoWeekday(5),
        moment().isoWeekday(6),
        moment().isoWeekday(7),

    ];

    const habitsDoneCurrentWeek = week.map(weekDay => {
        return habits.map(h => {
            const activity = h.activity.filter(date => moment(date).isSame(weekDay, "day"));
            if (activity.length !== 0) {
                return <OverlayTrigger
                    placement="left"
                    delay={{show: 250, hide: 400}}
                    overlay={<Tooltip id="button-tooltip">
                        {`${h.name}, today - ${activity.length}`}
                    </Tooltip>}>
                    <span className='pl-2 pr-2'
                          style={{backgroundColor: h.category.color.color, borderRadius: '0.50rem'}}>
                        {`${activity.length}`}<br/>
                    </span>
                </OverlayTrigger>
            }
            else {
                return null
            }
        })
    });

    return (
        <Container>
            <h4 className='text-center'>Current Week</h4>
            <Table borderless size='sm' responsive fixed className="text-center">
                <thead>
                <tr>
                    <th className='mn'>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th className='sn'>Sun</th>
                </tr>
                <tr className='date'>
                    {week.map(day => <th>{day.format('MM/DD')}</th>)}
                </tr>
                </thead>
                <tbody>
                <tr className='p-0'>
                    {habitsDoneCurrentWeek.map(habitsDoneWeekDay => <th width="14.28%">{habitsDoneWeekDay}</th>)}
                </tr>
                </tbody>
            </Table>
        </Container>
    )
};

const mapStateToProps = ({habitsReducer: {habits}}) => {
    return {habits}
};

export default connect(mapStateToProps)(CurrentWeekMarkedHabit);