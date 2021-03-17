import React, {Component} from "react";
import {connect} from "react-redux";
import {makeEditHabit} from "../../redux/actions";

import './inputEditHabit.css'
import {FiEdit2} from 'react-icons/fi';
import {Button, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {GrFormAdd} from "react-icons/gr";

const initialState = () => ({
    category: 'Spiritual',
    title: ''
});

class InputEditHabit extends Component {

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.title.trim()) return;

        this.props.makeEditHabit(this.state);

        this.setState(initialState());

    };

    constructor(props) {
        super(props);
        this.state = initialState();
        this.habitInputFocus = React.createRef();
    }

    componentDidMount() {
        if (this.props.habit) {
            this.setState({
                idx: this.props.idx,
                id: this.props.habit.id,
                category: this.props.habit.category,
                title: this.props.habit.title
            });
        }
        this.habitInputFocus.current.focus();
    }

    render() {
        return (<Container>
            <Row>
                <form onSubmit={this.onSubmit} className='w-100'>
                    <InputGroup className='w-100'>
                        <Col sm={12} md={6} className='pr-0 pr-0 align-self-end'>
                            <FormControl ref={this.habitInputFocus}
                                         name='title'
                                         id='newItem'
                                         placeholder="make new habit"
                                         value={this.state.title}
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
                                            <option name='spiritual' value="Spiritual">Spiritual</option>
                                            <option name='sport' value="Sport">Sport</option>
                                            <option name='food' value="Food">Food</option>
                                            <option name='study' value="Study">Study</option>
                                            <option name='emotional' value="Emotional">Emotional</option>
                                            <option name='another' value="Another">Another</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </InputGroup.Append>
                        </Col>
                        <Col sm={1} className='pl-0 col-1 align-self-end'>
                            <Button variant="outline-success" type="submit">
                                {this.props.habit ? <FiEdit2/> : <GrFormAdd/>}
                            </Button>
                        </Col>
                    </InputGroup>
                </form>
            </Row>
        </Container>)
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        makeEditHabit: (newHabit) => dispatch(makeEditHabit(newHabit)),
    }
};

export default connect(null, mapDispatchToProps)(InputEditHabit)