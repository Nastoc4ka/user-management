import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchCategories, habitCreate} from "../../redux/actions";
import './habitCreate.css'
import {Button, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {GrFormAdd} from "react-icons/gr";

const initialState = () => ({
    category: 5466,
    name: ''
});

class HabitCreate extends Component {

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name.trim()) return;
        const category = this.props.categories.find(category => category.id == this.state.category);
        this.props.createHabit({...this.state, category});
        this.setState(initialState());

    };

    constructor(props) {
        super(props);
        this.state = initialState();
        this.habitInputFocus = React.createRef();
    }

    componentDidMount() {
        this.props.fetchCategories();
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
                                         placeholder="make new habit"
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
                                <GrFormAdd/>
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
        fetchCategories: () => dispatch(fetchCategories()),
        createHabit: (newHabit) => dispatch(habitCreate(newHabit)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitCreate)