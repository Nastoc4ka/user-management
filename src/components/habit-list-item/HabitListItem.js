import React from 'react';
import './habitListItem.css';
import Button from "react-bootstrap/esm/Button";
import {Col, ListGroup, Row} from "react-bootstrap";
import InputNewHabit from "../input-edit-habit/InputEditHabit";
import {FiEdit2} from 'react-icons/fi';
import {RiDeleteBinLine} from "react-icons/ri";
import {MdCheck} from "react-icons/md";

const HabitListItem = ({habit, showInputId, idx, showInput, removeHabit}) => {
    const {id, title, category} = habit;

    const inputEdit = showInputId === id ? <InputNewHabit idx={idx} habit={habit}/> : null;
    return (
                <ListGroup.Item >
                    <Row>
                        {inputEdit || <><Col className={category.toLowerCase()}>
                            <Row>
                                    <Button className='mr-2' variant="outline-info"><MdCheck/> {category}</Button>
                                <p className='align-self-center mb-0'>{title}</p>
                            </Row>
                        </Col>
                            <Col sm={2.5} className='pr-0 pl-0'>
                                <Button variant="outline-dark" className='mr-2' onClick={removeHabit}><RiDeleteBinLine/></Button>
                                <Button variant="outline-warning" onClick={showInput}><FiEdit2/></Button>
                        </Col></>}
                    </Row>
                </ListGroup.Item>
    )
};

export default HabitListItem;