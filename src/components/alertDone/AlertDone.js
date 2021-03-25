import React from 'react';
import './alertDone.css';
import {Alert} from "react-bootstrap";

const AlertDone = () => {

    const phrases = ['Good job!', 'Well done!', 'Done today!',
        'Awesome!', 'You did again!', 'You rock!'];
    const randomPhrase = phrases[Math.floor(Math.random() * 6)];
    return (
        <div className='success alertDone'>
            <Alert className='alertD' variant='success'>{randomPhrase}</Alert>
        </div>
    )
};

export default AlertDone;