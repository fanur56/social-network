import React from "react";
import {Profile, UserProfileType} from "./Profile";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {ReduxStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

export type MapStatePropsType = {
    profile: UserProfileType
}

export type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

type PathParamsType = {
    userId: string
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = "21092"
        }
        usersAPI.getProfile(+userID)
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

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {setUserProfile: setUserProfileAC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

