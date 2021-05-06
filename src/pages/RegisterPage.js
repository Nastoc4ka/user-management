import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";

import {connect} from "react-redux";
import {clearMessage, registerInit, registerSaga} from "../redux/actions/index";
import {Alert, Button, Card, Form as FormBT} from "react-bootstrap";
import './register.css';
import Spinner from "../components/spinner/spinner";

const required = (value) => {
    if (!value.trim()) {
        return (
            <Alert variant="danger" role="alert" className="mt-2 alertMessageRegister">
                This field is required!
            </Alert>
        );
    }
};

const email = (value) => {
    if (!isEmail(value)) {
        return (
            <Alert variant="danger" role="alert" className="mt-2 alertMessageRegister">
                This is not a valid email.
            </Alert>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <Alert variant="danger" role="alert" className="mt-2 alertMessageRegister">
                The username must be between 3 and 20 characters.
            </Alert>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <Alert variant="danger" role="alert" className="mt-2 alertMessage">
                The password must be between 6 and 40 characters.
            </Alert>
        );
    }
};

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeFormField = this.onChangeFormField.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            isAdmin: false
        };
    }

    componentWillUnmount() {
        this.props.registerInit();
        this.props.clearMessage();
    }

    onChangeFormField(e) {
        this.props.clearMessage();

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        this.setState({
            [e.target.name]: value,
        })
    }

    handleRegister(e) {
        e.preventDefault();

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            this.props.register(this.state.username, this.state.email, this.state.password, this.state.isAdmin)
        }
    }

    render() {
        const {message, registeredSuccessful, loading} = this.props;

        if (registeredSuccessful) {
            return <Redirect to="/login"/>;
        }
        console.log(this.state);

        return (
            <div className="formWrap mt-3 mb-3">
                <div className='formInner'>
                    <Card.Title>Create your account</Card.Title>
                            <Form onSubmit={this.handleRegister}
                                  ref={(c) => {
                                    this.form = c;
                                }}
                            >
                                <FormBT.Group>
                                    <FormBT.Label htmlFor="username">Username</FormBT.Label>
                                    <Input
                                        className='w-100'
                                        type="text"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.onChangeFormField}
                                        validations={[required, vusername]}
                                    />
                                </FormBT.Group>

                                <FormBT.Group>
                                    <FormBT.Label htmlFor="email">Email</FormBT.Label>
                                    <Input
                                        className='w-100'
                                        type="text"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChangeFormField}
                                        validations={[required, email]}
                                    />
                                </FormBT.Group>

                                <FormBT.Group>
                                    <FormBT.Label htmlFor="password">Password</FormBT.Label>
                                    <Input
                                        className='w-100'
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChangeFormField}
                                        validations={[required, vpassword]}
                                    />
                                </FormBT.Group>

                                <FormBT.Group className='isAdmin'>
                                    <FormBT.Check
                                        type="checkbox"
                                        label="is admin"
                                        checked={this.state.isAdmin}
                                        name="isAdmin"
                                        onChange={this.onChangeFormField}
                                    />
                                </FormBT.Group>

                                <FormBT.Group>
                                    <Button variant="primary" type='submit'>Sign Up</Button>
                                </FormBT.Group>
                                {message && (
                                    <FormBT.Group className='alertMessageRegister'>
                                        <Alert className="alert alert-danger" role="alert">
                                            {message}
                                        </Alert>
                                    </FormBT.Group>
                                )}

                                {loading && <Spinner/>}

                                <CheckButton
                                    style={{display: "none"}}
                                    ref={(c) => {
                                        this.checkBtn = c;
                                    }}
                                />
                            </Form>
                </div>
            </div>
        );
    }
}

function mapStateToProps({
                             messageReducer: {message},
                             authRegisterReducer: {registeredSuccessful, loading}
                         }) {
    return {message, registeredSuccessful, loading};
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (username, email, password, isAdmin) => dispatch(registerSaga(username, email, password, isAdmin)),
        registerInit: () => dispatch(registerInit()),
        clearMessage: () => dispatch(clearMessage()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);