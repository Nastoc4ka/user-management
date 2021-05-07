import React, {Component} from "react";
import {connect} from 'react-redux';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import {isEmail, toDate} from "validator";
import CheckButton from "react-validation/build/button";
import {profileUpdateSaga} from '../../redux/actions';
import './profileEdit.css';
import {Alert, Button, Form as FormBT, FormControl, InputGroup} from "react-bootstrap";
import {GrFormAdd} from "react-icons/gr";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

const birthdate = (value) => {
    const dateExp = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;
    if (!(dateExp.test(value.trim()))) {
        return (
            <Alert variant="danger" role="alert" className="mt-2 alertMessageRegister">
                This is not a valid date.
            </Alert>
        );
    }
};

const initialState = {
    name: '',
    id: '',
    gender: '',
    birthdate: '',
    city: '',
    user_id: ''
};

class ProfileEdit extends Component {

    onSubmit = (e) => {

        e.preventDefault();
        if (!this.state.name.trim()) return;

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            this.props.editProfile(this.state);
        }
        this.setState({
            ...initialState
        });

        this.props.setShowEdit(false)

    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
    };

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        const {profiles, profileId} = this.props;
        const profile = profiles.find(profile => profile.id === profileId);
        this.setState({
            ...profile
        })
    }

    render() {

        const {loadingEditProfile, errorEditProfile} = this.props;

        if (loadingEditProfile) {
            return <Spinner/>
        }

        if (errorEditProfile) {
            return <ErrorIndicator error={errorEditProfile}/>
        }

        return (<div>
                <Form onSubmit={this.onSubmit}
                      className='w-100'
                      ref={(c) => {
                          this.form = c;
                      }}>
                    <InputGroup className='w-100'>
                        <FormBT.Label className='mt-2'>name:</FormBT.Label>
                        <FormControl ref={this.nameInputFocus} name='name' id="name"
                                     placeholder=""
                                     value={this.state.name}
                                     onChange={this.handleChange}
                                     className='inputNewHabit w-100'/>
                        <FormBT.Label className='mt-2'>gender:</FormBT.Label>
                        <div className="mb-3" onChange={this.handleChange}>
                            <FormBT.Check inline name='gender' value='male' checked={this.state.gender === "male"}
                                          type="radio" id="default-radio" label="male"
                            />
                            <FormBT.Check inline name='gender' value='female'
                                          checked={this.state.gender === "female"}
                                          type="radio" id="default-radio" label="female"
                            />
                        </div>
                        <FormBT.Label className='mt-2'>birthdate:</FormBT.Label>
                        <Input name='birthdate' id="birthdate" placeholder=""
                               value={this.state.birthdate}
                               onChange={this.handleChange}
                               className='inputNewHabit w-100' validations={[birthdate]}
                        />
                        <FormBT.Label className='mt-2'>city:</FormBT.Label>
                        <FormControl name='city' id="city" placeholder=""
                                     value={this.state.city}
                                     onChange={this.handleChange} className='inputNewHabit w-100'/>
                        <Button variant="outline-success" type="submit">
                            <GrFormAdd/>
                        </Button>
                        <Button variant="outline-success" onClick={() => this.props.setShowEdit(false)}>
                            cancel
                        </Button>
                    </InputGroup>
                    <CheckButton
                        style={{display: "none"}}
                        ref={(c) => {
                            this.checkBtn = c;
                        }}
                    />
                </Form>
            </div>
        )
    }
}

const mapStateToProps = ({
                             profilesReducer: {profiles, loadingEditProfile, errorEditProfile},
                         }) => {
    return {loadingEditProfile, errorEditProfile, profiles};
};

const mapDispatchToProps = (dispatch) => {

    return {
        editProfile: (profile) => dispatch(profileUpdateSaga(profile)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit)