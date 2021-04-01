import React, {Component} from "react";
import {Redirect} from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import {connect} from "react-redux";
import {loginSaga} from "../../redux/actions";
import {Alert, Button, Card, Container, Form as FormBT} from "react-bootstrap";

const required = (value) => {
    if (!value) {
        return (
            <Alert variant="danger" role="alert">
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
            console.log(this.state.username + this.state.password);
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
        const {isLoggedIn, message, history} = this.props;
        if (isLoggedIn) {
            // history.push("/");
            // window.location.reload();
            return <Redirect to="/"/>;
        }

        return (
            <Container>
                <Card style={{width: '18rem'}}>
                    <Card.Img
                        src="#"
                        alt="profile-img"
                    />
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
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    validations={[required]}
                                />
                            </FormBT.Group>

                            <FormBT.Group>
                                <Button variant="primary" type='submit' disabled={this.state.loading}>
                                    {this.state.loading && (
                                        <span className="spinner-border spinner-border-sm">...</span>
                                    )}
                                    <span>Login</span>
                                </Button>
                            </FormBT.Group>

                            {message && (
                                <FormBT.Group className="form-group">
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
            </Container>
        );
    }
}

function mapStateToProps(state) {
    const {isLoggedIn} = state.authReducer;
    const {message} = state.messageReducer;
    return {
        isLoggedIn,
        message
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(loginSaga(username, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);