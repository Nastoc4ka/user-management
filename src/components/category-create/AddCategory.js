import React from 'react';
import {connect} from 'react-redux';
import {hideCategoryCreate, showCategoryCreate} from '../../redux/actions'
import CategoryCreate from "./CategoryCreate";
import {Button, Modal} from "react-bootstrap";

const AddCategory = (props) => {
    const {display, showCategoryCreate, hideCategoryCreate} = props;

    return (<>
        <Button variant="outline-info" className='w-100 mt-3 mb-3' onClick={() => showCategoryCreate()}>
            ADD NEW CATEGORY
        </Button>
        <Modal show={display} onHide={() => hideCategoryCreate()} animation={false}>
            <Modal.Header closeButton>
                <Modal.Body>
                    <CategoryCreate/>
                </Modal.Body>
            </Modal.Header>
        </Modal>
    </>)
};

const mapStateToProps = ({displayCategoryCreateReducer: {display}}) => {
    return {display}
};

const mapDispatchToProps = (dispatch) => {
    return {
        showCategoryCreate: () => dispatch(showCategoryCreate()),
        hideCategoryCreate: () => dispatch(hideCategoryCreate()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);