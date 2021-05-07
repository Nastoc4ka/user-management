import React from 'react';
import './userView.css';
import {ListGroup} from "react-bootstrap";


const UserView = ({user}) => {

    return (
        <ListGroup.Item className='list-group-flush profile pt-0 pr-0'>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{`${user.profilesQuantity} profiles`}</p>
        </ListGroup.Item>
    )
};

export default UserView;