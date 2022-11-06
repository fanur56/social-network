import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {ReduxStateType} from "../../redux/redux-store";
import {UserProfileType} from "../../redux/types";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStatePropsType = {
    profile: UserProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {userId = "2"}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: ReduxStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

const WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(WithUrlDataProfileContainer);