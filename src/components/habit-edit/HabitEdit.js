import React, {Component} from "react";
import {connect} from "react-redux";
import {categoriesRequested, habitUpdate} from "../../redux/actions";
import './habitEdit.css'
import {FiEdit2} from 'react-icons/fi';
import {Button, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";

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
            name: this.props.habit.name
        });
        this.habitInputFocus.current.focus();
    }

    render() {
        return (<Container>
            <Row>
                <form onSubmit={this.onSubmit} className='w-100'>
                    <InputGroup className='w-100'>
                        <Col sm={12} md={6} className='pr-0 pr-0 align-self-end'>
                            <FormControl ref={this.habitInputFocus}
                                         name='name'
                                         id='newItem'
                                         value={this.state.name}
                                         onChange={this.handleChange}
                                         aria-label="make new habit"
                                         className='inputNewHabit w-100'/>
                        </Col>
                        <Col sm={8} md={5} className='col-11'>
                            <InputGroup.Append>
                                <Form.Group as={Row} className='mb-0'>
                                    <Col sm={12} className='ml-3'>
                                        {this.props.habit ? null :
                                            <Form.Label className='mt-2'>Choose Category:</Form.Label>}
                                    </Col>
                                    <Col sm={12}>
                                        <Form.Control as="select" name='category' value={this.state.category}
                                                      onChange={this.handleChange}>
                                            {this.props.categories.map((category) => {
                                                return <option key={`category${category.id}`}
                                                               value={category.id}>{category.name}</option>
                                            })}
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </InputGroup.Append>
                        </Col>
                        <Col sm={1} className='pl-0 col-1 align-self-end'>
                            <Button variant="outline-success" type="submit">
                                <FiEdit2/>
                            </Button>
                        </Col>
                    </InputGroup>
                </form>
            </Row>
        </Container>)
    }
}

const mapStateToProps = ({categoryReducer: {categories}}) => {
    return {
        categories
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        fetchCategories: () => dispatch(categoriesRequested()),
        updateHabit: (habit) => dispatch(habitUpdate(habit)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitEdit)