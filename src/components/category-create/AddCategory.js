import React, {useState} from 'react';
import CategoryCreate from "./CategoryCreate";
import {Button, Modal} from "react-bootstrap";

export const AddCategory = () => {
    const [show, setShow] = useState(false);

    return (<>
        <Button variant="outline-info" className='w-100 mt-3' onClick={() => setShow(true)}>
            ADD NEW CATEGORY
        </Button>
        <Modal show={show} onHide={() => setShow(false)} animation={false}>
            <Modal.Header closeButton>
                <Modal.Body>
                    <CategoryCreate hide={() => setShow(false)}/>
                </Modal.Body>
            </Modal.Header>
        </Modal>
    </>)
};