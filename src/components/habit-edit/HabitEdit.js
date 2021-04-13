import React, {Component} from "react";
import {connect} from "react-redux";
import {categoriesRequestedSaga, habitUpdateSaga} from "../../redux/actions";
import './habitEdit.css'
import {Button, Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {MdCheck} from "react-icons/md";
import ErrorIndicator from "../error-indicator";

const initialState = () => ({
    category: 5466,
    name: ''
});

class HabitEdit extends Component {

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name.trim()) return;
        const category = this.props.categories.find(category => category.id == this.state.category);
        this.props.updateHabit({...this.state, category});
        this.setState(initialState());
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    constructor(props) {
        super(props);
        this.state = initialState();
        this.habitInputFocus = React.createRef();
    }

    componentDidMount() {
        this.props.fetchCategories();
        this.setState({
            id: this.props.habit.id,
            category: this.props.habit.category.id,
            name: this.props.habit.name,
            activity: this.props.habit.activity

        });
        this.habitInputFocus.current.focus();
    }

    render() {

        if (this.props.error) {
            return <ErrorIndicator error={this.props.error}/>
        }

        return (<form onSubmit={this.onSubmit} className='w-100'>
                    <InputGroup className='w-100'>
                        <Col sm={6} className='pr-0 pl-0 align-self-end'>
                            <FormControl ref={this.habitInputFocus}
                                         name='name'
                                         id='newItem'
                                         value={this.state.name}
                                         onChange={this.handleChange}
                                         aria-label="make new habit"
                                         className='pt-0 w-100'/>
                        </Col>
                        <Col sm={5} className='col-11 pr-0'>
                            <InputGroup.Append>
                                <Form.Group as={Row} className='categorySelect mb-0 pl-3 w-100'>
                                        <Form.Control as="select" name='category' value={this.state.category}
                                                      onChange={this.handleChange}>
                                            {this.props.categories.map((category) => {
                                                return <option key={`category${category.id}`}
                                                               value={category.id}>{category.name}</option>
                                            })}
                                        </Form.Control>
                                </Form.Group>
                            </InputGroup.Append>
                        </Col>
                        <Col sm={1} className='check pl-0 pr-0 col-1'>
                            <Button variant="outline-success" type="submit">
                                <MdCheck/>
                            </Button>
                        </Col>
                    </InputGroup>
                </form>
        )
    }
}

const mapStateToProps = ({categoryReducer: {categories, error}}) => {
    return {
        categories, error
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        fetchCategories: () => dispatch(categoriesRequestedSaga()),
        updateHabit: (habit) => dispatch(habitUpdateSaga(habit)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitEdit)