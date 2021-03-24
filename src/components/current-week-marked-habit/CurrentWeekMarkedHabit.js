import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import moment from "moment";
import './currentWeekMarkedHabit.css';
import {Container, Table,} from "react-bootstrap";
import MarkedHabitDay from "./MarkedHabitDay";

const CurrentWeekMarkedHabit = (props) => {
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        setHabits(props.habits);
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
                return {
                    id: h.id,
                    name: h.name,
                    value: activity.length,
                    style: h.category.color.bgColor
                }
            }
            return null
        })
    });
    console.log(habitsDoneCurrentWeek);
    return (
        <Container>
            <h4 className='text-center'>Current Week</h4>
            <Table borderless size='sm' responsive className="text-center">
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
                    {week.map((day, idx) => <th key={`weekday${idx}`}>{day.format('MM/DD')}</th>)}
                </tr>
                </thead>
                <tbody>
                <tr className='p-0'>
                    {habitsDoneCurrentWeek.map((day, idx) => {
                        return <th key={`week${idx}`} width="14.28%">
                            <MarkedHabitDay day={day}/>
                        </th>
                    })}
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