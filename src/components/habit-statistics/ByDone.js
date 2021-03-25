import React from 'react';
import {connect} from 'react-redux'
import './statistics.css';
import {Container} from "react-bootstrap";
import ListItem from "./ListItem";

const ByDone = ({habits, character}) => {

    const habitTOPdone = habits.length !== 0 ?
        [...habits].sort((a, b) => b.activity.length - (a.activity.length))
        : [];

    return (
        <Container>
            <h4>{character}</h4>
            {habitTOPdone.length !== 0 && habitTOPdone.map((habit) => {
                return (
                    <ListItem
                        key={`byDone${habit.id}`}
                        name={habit.name}
                        value={habit.activity.length}
                        color={habit.category.color.color}
                        activity={habit.activity.length}
                    />
                )
            })}
        </Container>)

};

const mapStateToProps = ({habitsReducer: {habits}}) => {
    return {habits}
};

export default connect(mapStateToProps)(ByDone);