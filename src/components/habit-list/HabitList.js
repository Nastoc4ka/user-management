import React, {Component} from 'react';
import {connect} from 'react-redux';

import HabitListItem from '../habit-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import {habitEditShow, habitRemoveSaga, onDoneSaga, requestHabitsSaga} from '../../redux/actions';
import './habitList.css';
import {Container, ListGroup, Row} from "react-bootstrap";

const HabitList = ({habits, showInput, selectedId, onDone, errorRemoveHabit, loadingHabit, loadingRemoveHabit, removeHabit}) => {
    return (
        <Row>
            <ListGroup className='w-100'>
                {habits.map((habit, idx) => {
                    return (
                        <HabitListItem
                            errorRemoveHabit={errorRemoveHabit}
                            showInput={() => showInput(habit.id)}
                            removeHabit={() => removeHabit(habit.id)}
                            loadingRemoveHabit={loadingRemoveHabit}
                            onDone={() => onDone(habit.id)}
                            idx={idx}
                            loadingHabit={loadingHabit}
                            selectedId={selectedId}
                            habit={habit}
                            key={habit.id}
                        />
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
        const {habits, loadingHabit, error, onDone, loadingRemoveHabit, errorRemoveHabit, showInput, selectedId, loadingAllHabits, removeHabit} = this.props;

        if (loadingAllHabits) return <Spinner/>;

        if (error) return <ErrorIndicator message={error.message}/>;

        const catList = habits.map(h => h.category.name);

        const categories = [...new Set(catList)].sort((a, b) => a - b);

        return (<>
            {
                categories.map(category => {
                    const habitsByCategory = habits.filter(h => h.category.name === category);
                    const styleCategory = {color: `${habitsByCategory[0].category.color.color}`};
                    return (
                        <Container key={habitsByCategory[0].category.id}>
                            <h4 style={styleCategory}>{category}</h4>
                        <HabitList
                            onDone={onDone}
                            errorRemoveHabit={errorRemoveHabit}
                            loadingRemoveHabit={loadingRemoveHabit}
                            loadingHabit={loadingHabit}
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
                             habitsReducer: {
                                 habits, loading, error,
                                 loadingAllHabits, loadingHabit,
                                 loadingRemoveHabit, errorRemoveHabit
                             },
                         }) => {
    return {
        habits, error, loadingHabit, selectedId, loadingAllHabits,
        loadingRemoveHabit, errorRemoveHabit
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestHabits: () => dispatch(requestHabitsSaga()),
        showInput: id => dispatch(habitEditShow(id)),
        removeHabit: id => dispatch(habitRemoveSaga(id)),
        onDone: id => dispatch(onDoneSaga(id))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitsContainer)