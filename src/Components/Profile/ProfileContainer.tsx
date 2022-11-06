import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {ReduxStateType} from "../../redux/redux-store";
import {UserProfileType} from "../../redux/types";

type ProfilePropsType = {
    setUserProfile: (profile: UserProfileType)=>void
    profile: UserProfileType
}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: ReduxStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(ProfileContainer);