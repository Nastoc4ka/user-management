import React, {Component} from 'react';
import {connect} from 'react-redux';

import HabitListItem from '../habit-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import {habitEditShow, habitRemove, requestHabits} from '../../redux/actions';
import './habitList.css';
import {Container, ListGroup, Row} from "react-bootstrap";

const HabitList = ({habits, showInput, selectedId, removeHabit}) => {
    return (
        <Row>
            <ListGroup className='w-100'>
                {habits.map((habit, idx) => {
                    return (
                        <HabitListItem showInput={() => showInput(habit.id)}
                                       removeHabit={() => removeHabit(habit.id)}
                                       idx={idx}
                                       selectedId={selectedId}
                                       habit={habit}
                                       key={habit.id}/>
                    )
                })}
            </ListGroup>
        </Row>
    )
};

class HabitsContainer extends Component {

    componentDidMount() {
        this.props.requestHabits();
    }

    render() {
        const {habits, loading, error, showInput, selectedId, removeHabit} = this.props;
        if (loading) return <Spinner/>;

        if (error) return <ErrorIndicator message={error.message}/>;

        const catList = habits.map(h => h.category.name);

        const categories = [...new Set(catList)].sort((a, b) => a - b);

        return (<>
            {
                categories.map(category => {
                    const habitsByCategory = habits.filter(h => h.category.name === category);
                    return (<Container className='mt-3' key={category}>
                        <h3 className={category.toLowerCase()}>{category}</h3>
                        <HabitList
                            showInput={showInput}
                            selectedId={selectedId}
                            habits={habitsByCategory}
                            removeHabit={removeHabit}/>
                    </Container>)
                })
            }

        </>)
    }
}

const mapStateToProps = ({
                             habitEditReducer: {selectedId},
                             habitsReducer: {habits, loading, error},
                         }) => {
    return {habits, error, loading, selectedId};
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestHabits: () => dispatch(requestHabits()),
        showInput: id => dispatch(habitEditShow(id)),
        removeHabit: id => dispatch(habitRemove(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitsContainer)