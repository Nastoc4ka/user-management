import React from 'react';
import ProfileCreation from "./ProfileCreation";
import {hideProfileCreation, showProfileCreation} from '../../redux/actions'
import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {BsPlusCircle} from "react-icons/bs";

const ProfileCreate = (props) => {
    const {display, showProfileCreation, hideProfileCreation} = props;

    return (<>
        <Button className='btn-create' variant="outline-info" onClick={() => showProfileCreation()}>
            <BsPlusCircle className='plus-icon'/>
            Create new profile
        </Button>
        <Modal show={display} onHide={() => hideProfileCreation()} animation={false}>
            <Modal.Header closeButton>
                <Modal.Body>
                    <ProfileCreation/>
                </Modal.Body>
            </Modal.Header>
        </Modal>
    </>)
};

const mapStateToProps = ({displayProfileCreateReducer: {display}}) => {
    return {display}
};

const mapDispatchToProps = (dispatch) => {
    return {
        showProfileCreation: () => dispatch(showProfileCreation()),
        hideProfileCreation: () => dispatch(hideProfileCreation()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCreate);