import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import '../../fonts/New_Tegomin/NewTegomin-Regular.ttf';
import {Nav, Navbar} from "react-bootstrap";
import {AiOutlineSchedule} from "react-icons/ai";

const Header = ({isLoggedIn, user, logout}) => {
    return (
        <Navbar bg="light" variant="light" className='header'>
            <Navbar.Brand>
                <Link to='/' className='toHabit'>
                    <div>ToHabit</div>
                </Link>
            </Navbar.Brand>

            {isLoggedIn && <Link to='/statistics' className='statisticsLink'>
                <div><AiOutlineSchedule/><span className='statisticsWord'> Statistics</span></div>
            </Link>}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
                {isLoggedIn ?
                    <Nav className='justify-content-end'>
                        {`Hi, ${user.username}.`}
                        <Link to="/" className='mr-2 ml-2' onClick={logout}>Log out</Link>
                    </Nav> :
                    <Nav className='justify-content-end'>
                        <Link to="/login" className='mr-2'>Log In</Link>
                        <Link to="/register">Sign up</Link>
                    </Nav>}
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;