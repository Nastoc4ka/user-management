import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './statistics.css';
import {Container} from "react-bootstrap";
import ListItem from "./ListItem";
import dayInRow from "./dayInRow";

const ByDaysInRow = ({habits, character}) => {
    const [habitsToSort, setHabitsToSort] = useState([]);

    useEffect(() => {
        setHabitsToSort(habits);
    });

    const DoneInRow = habitsToSort.length > 0 ? dayInRow([...habitsToSort]) : [];

    return (
        <Container>
            <h4>{character}</h4>
            {DoneInRow.length > 0 && DoneInRow.map((habitStat) => {
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