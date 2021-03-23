import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import moment from "moment";
import './statistics.css';
import {Container} from "react-bootstrap";
import ListItem from "./ListItem";

const ByDaysInRow = (props) => {
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        setHabits(props.habits);
    });

    const isNextElInRow = (current, next) => moment(current).add(1, 'days').format('MM/DD') === next;

    const habitsDoneDays = habits.length !== 0 ? [...habits].map((habit) => {
        const activity = Array.from(new Set(habit.activity.map(date => moment(date).format('MM/DD'))));
        let max = {
            maxDays: 1,
            startDate: '',
            endDate: activity[activity.length - 1]
        };
        let current = 1;
        for (let i = 0; i < activity.length - 1; i++) {
            const el = activity[i];
            const elNext = activity[i + 1];

            if (isNextElInRow(el, elNext)) {
                current++;
                if (current > max.maxDays) {
                    max.maxDays = current;
                    max.endDate = activity[i + 1];
                }
            } else {
                current = 1;
            }
        }
        max.startDate = moment(max.endDate).subtract(max.maxDays - 1, 'days').format('MM/DD');
        return {
            max,
            habit,
        }
    }).sort((a, b) => b.max.maxDays - a.max.maxDays) : [];

    return (
        <Container>
            <h4>{props.character}</h4>
            {habitsDoneDays.length !== 0 && habitsDoneDays.map((habitStat) => {
                return <ListItem
                    key={`habitStat${habitStat.habit.id}`}
                    activity={habitStat.habit.activity.length}
                    name={habitStat.habit.name}
                    value={habitStat.max.maxDays}
                    label={`${habitStat.max.startDate} - ${habitStat.max.endDate}`}
                    color={habitStat.habit.category.color.color}
                />
            })}
        </Container>
    )
};

const mapStateToProps = ({habitsReducer: {habits}}) => {
    return {habits}
};

export default connect(mapStateToProps)(ByDaysInRow);