import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './profiles.css';
import {ProfileCreate} from '../components/profile-create';
import ProfileView from "../components/profile-view";
import {Redirect} from "react-router-dom";
import {profileEditShow, profileRemoveSaga, requestProfilesSaga} from "../redux/actions";
import Spinner from "../components/spinner/spinner";
import ErrorIndicator from "../components/error-indicator/ErrorIndicator";

const Profiles = ({
                      requestProfiles, removeProfile, user, isLoggedIn, profiles, loadingEditProfile, error, loadingAllProfiles,
                      loadingProfile, loadingRemoveProfile,
                      errorRemoveProfile, selectedId, showInput
                  }) => {

    useEffect(() => {
        requestProfiles();
    }, []);

    if (!isLoggedIn) {
        return <Redirect to="/login"/>
    }
    if (loadingAllProfiles) {
        return <Spinner/>
    }
    if (error) {
        return <ErrorIndicator error={error}/>
    }
    return (
        <div className='pageWrap'>
            <h5>Profiles:</h5>

            <div className='listWrap'>
                {profiles.length > 0 && profiles.map(profile => {
                    return <ProfileView
                        profile={profile}
                        key={profile.id}
                        removeProfile={() => removeProfile(profile.id)}
                        errorRemoveProfile={errorRemoveProfile}
                        showInput={() => showInput(profile.id)}
                        selectedId={selectedId}
                    />
                })}
                <ProfileCreate/>
            </div>
        </div>
    )
};

function mapStateToProps({
                             authLoginReducer: {user, isLoggedIn},
                             profilesReducer: {
                                 profiles, error, loadingAllProfiles, loadingEditProfile,
                                 loadingProfile, loadingRemoveProfile, errorRemoveProfile
                             },
                             profileEditReducer: {selectedId}
                         }) {
    return {
        user, isLoggedIn, profiles, loadingEditProfile, error, loadingAllProfiles, loadingProfile, loadingRemoveProfile,
        errorRemoveProfile, selectedId
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestProfiles: () => dispatch(requestProfilesSaga()),
        removeProfile: (id) => dispatch(profileRemoveSaga(id)),
        showInput: id => dispatch(profileEditShow(id)),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profiles)