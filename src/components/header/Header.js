import React from 'react';
import {Link} from 'react-router-dom'
import './header.css';
import '../../fonts/New_Tegomin/NewTegomin-Regular.ttf';
import {Nav, Navbar} from "react-bootstrap";
import {AiOutlineSchedule} from "react-icons/ai";

const Header = () => {
    return (
        <Navbar bg="light" variant="light" className=''>
            <Navbar.Brand>
                <Link to='/' className='toHabit'>
                    <div>ToHabit</div>
                </Link>

            </Navbar.Brand>
            <Link to='/statistics' className='statisticsLink'>
                <div><AiOutlineSchedule/> Statistics</div>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
                <Nav className='justify-content-end'>
                    <Link to="/login" className='mr-2'>Log In</Link>
                    <Link to="/login">Log Out</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;