import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';
import '../../fonts/New_Tegomin/NewTegomin-Regular.ttf';
import {Nav, Navbar} from "react-bootstrap";

const Header = ({isLoggedIn, user, logout}) => {
    return (<Navbar bg="light" variant="light" className='header'>
            {isLoggedIn && <Navbar.Brand>
                <NavLink activeClassName="current" exact to='/' className='toHabit underline'>
                    <li>{user.name}</li>
                </NavLink>
            </Navbar.Brand>}

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end rightHeader'>
                {isLoggedIn ? <Nav className='justify-content-end'>
                        <NavLink to="/profiles" className='mr-2 ml-2'>Profiles</NavLink>
                        {user.isAdmin && (<><NavLink to="/dashboard" className='mr-2 ml-2'>Dashboard</NavLink>
                            <NavLink to="/users" className='mr-2 ml-2'>Users</NavLink></>)}
                        <NavLink to="/" className='mr-2 ml-2' onClick={logout}>Log out</NavLink>
                    </Nav> :
                    <Nav className='justify-content-end'>
                        <NavLink to="/login" className='mr-2 ml-2'>Sign in</NavLink>
                        <NavLink to="/register" className='mr-2 ml-2'>Sign up</NavLink>
                    </Nav>}
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;