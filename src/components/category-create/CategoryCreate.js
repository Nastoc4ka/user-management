import React, {Component} from "react";
import {connect} from "react-redux";
import chroma from 'chroma-js';

import {categoriesRequestedSaga, categoryCreateSaga} from "../../redux/actions";
import './categoryCreate.css'
import {Button, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {GrFormAdd} from "react-icons/gr";
import {colourOptions} from "./dataColors";
import Select from 'react-select';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class CategoryCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: colourOptions[2],
            name: ''
        };
        this.habitInputFocus = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name.trim()) return;
        this.props.createCategory(this.state);
    };

    handleChangeName = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };
    handleChangeColor = selectedOption => {
        this.setState({
            color: selectedOption
        });
    };

    componentDidMount() {
        const {error, fetchCategories} = this.props;
        fetchCategories();
        if (!error) this.habitInputFocus.current.focus();
    }

    render() {
        const {categories, loading, error} = this.props;

        if (loading) return <Spinner/>;

        if (error) return <ErrorIndicator error={error}/>;

        return (<Container>
            <Row>
                <form onSubmit={this.onSubmit} className='w-100'>
                    <InputGroup className='w-100'>
                        <Col sm={12} md={6} className='pr-0 pr-0 align-self-end'>
                            <FormControl ref={this.habitInputFocus}
                                         name='name'
                                         id='newItem'
                                         placeholder="create new category"
                                         value={this.state.name}
                                         onChange={this.handleChangeName}
                                         aria-label="make new category"
                                         className='inputNewCategory w-100'/>
                        </Col>
                        <Col sm={8} md={5} className='col-11'>
                            <InputGroup.Append>
                                <Form.Group as={Row} className='mb-0'>
                                    <Col sm={12} className='ml-3'>
                                        <Form.Label className='mt-2'>Choose Color:</Form.Label>
                                    </Col>
                                    <Col sm={12}>
                                        <Select
                                            onChange={this.handleChangeColor}
                                            defaultValue={colourOptions[2]}
                                            label="Single select"
                                            options={colourOptions}
                                            styles={colourStyles}
                                        />
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

const mapStateToProps = ({categoryReducer: {categories, loading, error}}) => {
    return {
        categories, loading, error
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        fetchCategories: () => dispatch(categoriesRequestedSaga()),
        createCategory: (newCategory) => dispatch(categoryCreateSaga(newCategory)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCreate)

const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',

    ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10,
    },
});

const colourStyles = {
    control: styles => ({...styles, backgroundColor: 'white'}),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected
                    ? data.color
                    : isFocused
                        ? color.alpha(0.1).css()
                        : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor:
                !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
            },
        };
    },
    input: styles => ({...styles, ...dot()}),
    placeholder: styles => ({...styles, ...dot()}),
    singleValue: (styles, {data}) => ({...styles, ...dot(data.color)}),
};