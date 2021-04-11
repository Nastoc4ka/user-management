import React from 'react';
import './error.css';
import {Alert} from "react-bootstrap";

const ErrorIndicator = ({error}) => {
    console.log(JSON.stringify(error));

    return (
        <div className='error'>
            <Alert variant='danger'>{error.msg}</Alert>
        </div>
    )
};

export default ErrorIndicator;