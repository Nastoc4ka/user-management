import React from 'react';
import {Link} from 'react-router-dom'
import './footer.css';
import {Nav, Navbar} from "react-bootstrap";
import moment from "moment";

const Footer = () => {
    return (<Navbar bg="light" variant="light" className='footer'>
        <Navbar.Brand>
            <Link to='/' className='toHabitFooter'>
                <div>{`© ${moment().format('YYYY')} ToHabit`}</div>
            </Link>
            <span>E-mail: </span><a href='mailto:anastsiyabelitskaya@gmail.com'>anastsiyabelitskaya@gmail.com</a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
            <Nav className='justify-content-end'>
                <Link to="/login" className='mr-2'>Log In</Link>
                <Link to="/login">Log Out</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>)
};

export default Footer;