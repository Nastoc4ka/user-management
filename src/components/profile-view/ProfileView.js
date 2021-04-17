import React, {useState} from 'react';
import './profileView.css';
import {ListGroup, Modal} from "react-bootstrap";
import ProfileEdit from "../profile-edit";
import ErrorIndicator from "../error-indicator";


const ProfileView = ({profile, selectedId, removeProfile, editProfile, errorRemoveProfile, display, showInput}) => {

    const [removedId, setRemovedId] = useState('');
    const [showEdit, setShowEdit] = useState(false);

    if (errorRemoveProfile && removedId === profile.id) return <ErrorIndicator error={errorRemoveProfile}/>;

    const removeItem = () => {
        setRemovedId(profile.id);
        return removeProfile()
    };

    const showModalToEdit = () => {
        setShowEdit(true);
        showInput()
    };

    return (
        <ListGroup.Item className='list-group-flush profile pt-0 pr-0'>
            <p>{profile.name}</p>
            <p>{profile.gender}</p>
            <p>{profile.birthdate}</p>
            <p>{profile.city}</p>
            <div className='btnsEditRemove'>
                <button onClick={showModalToEdit}>edit</button>
                <button onClick={removeItem}>delete</button>
            </div>
            {selectedId === profile.id && <Modal show={showEdit}>
                <Modal.Header>
                    <Modal.Body>
                        <ProfileEdit profileId={selectedId} setShowEdit={setShowEdit}/>
                    </Modal.Body>
                </Modal.Header>
            </Modal>}
        </ListGroup.Item>
    )
};

export default ProfileView;