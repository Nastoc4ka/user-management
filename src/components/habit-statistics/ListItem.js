import React from 'react';
import './statistics.css';
import {ListGroup} from "react-bootstrap";
import {BsFillStarFill} from "react-icons/bs";


const ListItem = ({name, value, color, label, activity}) => {

    if (activity === 0) return null;
    return (<ListGroup variant="flush">
            <ListGroup.Item style={{color: color}}>
                <span>{name} - </span>
                <span>{value} </span>
                {value >= 21 && <BsFillStarFill style={{color: 'orange', marginBottom: '1rem'}}/>}
                <br/>
                <span>{label}</span>
            </ListGroup.Item>
        </ListGroup>
    )
};

export default ListItem;