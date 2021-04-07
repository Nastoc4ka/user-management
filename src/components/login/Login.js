import React, {Component} from "react";
import {Link, Redirect} from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import {connect} from "react-redux";
import {clearMessage, loginSaga} from "../../redux/actions";
import {Alert, Button, Card, Container, Form as FormBT, Row} from "react-bootstrap";

const required = (value) => {
    if (!value) {
        return (
            <Alert variant="danger" className='mt-2' role="alert">
                This field is required!
            </Alert>
        );
    }
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
        };
    }

    componentWillUnmount() {
        this.props.clearMessage();
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handleLogin(e) {
        e.preventDefault();
        this.setState({
            loading: true,
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            this.props.login(this.state.username, this.state.password);
            this.setState({
                loading: false
            });
        } else {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const {isLoggedIn, message} = this.props;
        if (isLoggedIn) {
            return <Redirect to="/"/>;
        }

        return (
            <Container>
                <Row className="justify-content-center mt-3 mb-3">
                    <Card>
                        <Card.Body>
                            <Form
                                onSubmit={this.handleLogin}
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
                                        onChange={this.onChangeUsername}
                                        validations={[required]}
                                    />
                                </FormBT.Group>

                                <FormBT.Group>
                                    <FormBT.Label htmlFor="password">Password</FormBT.Label>
                                    <Input
                                        className='w-100'
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                        validations={[required]}
                                    />
                                </FormBT.Group>

                                <FormBT.Group className="d-flex">
                                    <Button variant="primary" type='submit' disabled={this.state.loading}>
                                        {this.state.loading && (
                                            <span className="spinner-border spinner-border-sm">...</span>
                                        )}
                                        <span>Login</span>
                                    </Button>
                                    <Link to="/register" className='ml-auto mt-2'>Sign up</Link>
                                </FormBT.Group>

                                {message && (
                                    <FormBT.Group className="mw-100">
                                        <Alert variant="danger" role="alert">
                                            {message}
                                        </Alert>
                                    </FormBT.Group>
                                )}
                                <CheckButton
                                    style={{display: "none"}}
                                    ref={(c) => {
                                        this.checkBtn = c;
                                    }}
                                />
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    const {isLoggedIn} = state.authLoginReducer;
    const {message} = state.messageReducer;
    return {
        isLoggedIn,
        message
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(loginSaga(username, password)),
        clearMessage: () => dispatch(clearMessage()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);