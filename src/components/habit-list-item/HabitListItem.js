import React from 'react';
import './habitListItem.css';
import Button from "react-bootstrap/esm/Button";
import {Col, ListGroup, Row} from "react-bootstrap";
import EditHabit from "../habit-edit";
import {FiEdit2} from 'react-icons/fi';
import {RiDeleteBinLine} from "react-icons/ri";
import {MdCheck} from "react-icons/md";


const HabitListItem = ({habit, selectedId, showInput, removeHabit}) => {
    const {id, name, category} = habit;

    const habitItem = <><Col className={category.name.toLowerCase()}>
        <Row>
            <Button className='mr-3' variant="outline-info"><MdCheck/> {name}</Button>
        </Row>
    </Col>
        <Col sm={2.5} className='pr-0 pl-0'>
            <Button variant="outline-dark" className='mr-2' onClick={removeHabit}><RiDeleteBinLine/></Button>
            <Button variant="outline-warning" onClick={showInput}><FiEdit2/></Button>
        </Col></>;

    return (
        <ListGroup.Item>
            <Row>
                {selectedId === id ? <EditHabit habit={habit}/> : habitItem}
                    </Row>
                </ListGroup.Item>
    )
};

export default HabitListItem;