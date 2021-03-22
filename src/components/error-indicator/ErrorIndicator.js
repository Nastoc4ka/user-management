import React from 'react';
import './error.css';
import {Alert} from "react-bootstrap";

const ErrorIndicator = (error) => {
    console.log(error);

    return (
        <div className='error'>
            <Alert variant='danger'>{error.message}</Alert>
        </div>
    )
};

export default ErrorIndicator;