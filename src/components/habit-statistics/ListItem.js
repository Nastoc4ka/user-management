import React from 'react';
import './statistics.css';
import {ListGroup} from "react-bootstrap";
import {BsFillStarFill} from "react-icons/bs";


const ListItem = ({name, value, color, label, activity}) => {
    const fontS = label && value >= 21 && '1.4rem';

    if (activity === 0) return null;
    return (<ListGroup variant="flush">
            <ListGroup.Item className="statistics">
                <span style={{color: color, fontSize: fontS}}>{`${name} - ${value}`} </span>
                {value >= 21 && label && <BsFillStarFill style={{color: 'orange', marginBottom: '1rem'}}/>}
                <br/>
                {label && <span style={{color: 'lightGrey', fontSize: '0.9rem'}}>{`period - (${label}) `}</span>}
                {value >= 21 && label && <span className="goodJob">Great!</span>}
            </ListGroup.Item>
        </ListGroup>
    )
};

export default ListItem;