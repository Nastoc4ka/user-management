import React, {Component} from 'react';
import {connect} from 'react-redux';

import HabitListItem from '../habit-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import {fetchHabits, removeHabit, showInput} from '../../redux/actions';
import './habitList.css';
import {Container, ListGroup, Row} from "react-bootstrap";

const HabitList = ({habits, showInput, showInputId, removeHabit}) => {

    return (
        <ListGroup className='w-100'>
            {habits.map((habit, idx) => {
                return (
                    <HabitListItem showInput={() => showInput(habit.id)}
                                   removeHabit={() => removeHabit(idx)}
                                   idx={idx}
                                   showInputId={showInputId}
                                   habit={habit}
                                   key={habit.id}/>
                )
            })}
        </ListGroup>
    )
};

class HabitsContainer extends Component {

    componentDidMount() {
        this.props.fetchHabits();
    }

    render() {
        const {habits, loading, error, showInput, showInputId, removeHabit} = this.props;

        if (loading) return <Spinner/>;

        if (error) return <ErrorIndicator message={error.message}/>;

        const cat = ['Sport', "Spiritual"];

        return (
            <Container className='container-habit-list'>
                <Row>
                    <ListGroup className='w-100'>
                        {
                            cat.map(category => {
                                let filtered = habits.filter(h => h.category === category);
                                console.log(category);
                                console.log(filtered);
                                console.log(habits);
                                return (<>
                                    <h3 className={category.toLowerCase()}>{category}</h3>
                                    <HabitList
                                        key={1}
                                        showInput={showInput}
                                        showInputId={showInputId}
                                        habits={filtered}
                                        categoryName={category}
                                        removeHabit={removeHabit}/>
                                </>)

                            })
                        }
                    </ListGroup>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = ({
                             showInputReducer: {showInputId},
                             showLoaderReducer: {loading},
                             showErrorReducer: {error},
                             habitsReducer: {habits}
                         }) => {
    return {habits, error, loading, showInputId};
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHabits: () => dispatch(fetchHabits()),
        showInput: id => dispatch(showInput(id)),
        removeHabit: idx => dispatch(removeHabit(idx))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitsContainer)