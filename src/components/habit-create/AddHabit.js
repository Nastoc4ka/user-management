import React, {useState} from 'react';
import HabitCreate from "./HabitCreate";
import {Button, Modal} from "react-bootstrap";

export const AddHabit = () => {
    const [show, setShow] = useState(false);

    return (<>
        <Button className='w-100 mt-3' variant="outline-success" onClick={() => setShow(true)}>
            ADD NEW HABIT
        </Button>
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Body>
                    <HabitCreate hide={() => setShow(false)}/>
                </Modal.Body>
            </Modal.Header>
        </Modal>
    </>)
};