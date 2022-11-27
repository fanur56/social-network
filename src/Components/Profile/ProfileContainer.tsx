import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {ReduxStateType} from "../../redux/redux-store";
import {UserProfileType} from "../../redux/types";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type MapStatePropsType = {
    profile: UserProfileType
    isAuth: boolean
}

export type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        if (!userID) {userID = "21092"}
        usersAPI.getProfile(+userID)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>

        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: ReduxStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

const WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(WithUrlDataProfileContainer);