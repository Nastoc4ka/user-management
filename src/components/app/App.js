import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {logoutSaga} from "../../redux/actions";
import {Dashboard, HomePage, LoginPage, Profiles, RegisterPage, Users, WelcomePage} from '../../pages';
import Header from "../header";
import {Col, Row} from 'react-bootstrap';
import '../../fonts/New_Tegomin/NewTegomin-Regular.ttf';
import './app.css';
import UserView from "../user-view";


const App = (props) => {

    const {user, isLoggedIn, logout} = props;

    return (
            <Row className='h-100'>
                <Col className='h-100 main'>
                    <Header isLoggedIn={isLoggedIn}
                            user={user}
                            logout={logout}
                    />
                    <div className='article'>
                        <Switch>
                            <Route exact path='/' component={HomePage}/>
                            <Route path='/login' component={LoginPage}/>
                            <Route path='/register' component={RegisterPage}/>
                            <Route path='/welcome' component={WelcomePage}/>
                            <Route path='/profiles' component={Profiles}/>
                            <Route path='/dashboard' component={Dashboard}/>
                            <Route exact path='/users' component={Users}/>
                            <Route path='/users/:id' render={({match}) => {
                                const {id} = match.params;
                                <UserView userId={id}/>
                            }
                            }/>
                        </Switch>
                    </div>
                </Col>
            </Row>
    )
};

function mapStateToProps({authLoginReducer: {user, isLoggedIn}}) {
    return {user, isLoggedIn};
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutSaga())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
