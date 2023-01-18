import React from "react";
import {Profile, UserProfileType} from "./Profile";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, updateStatusTC} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

export type MapStatePropsType = {
    profile: UserProfileType
    status: string
}

export type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void
    getUserProfileTC:(userID:number)=>void
    getStatusTC:(userID:number)=>void
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
        //this.props.setUserProfile(this.props.profile)
        this.props.getUserProfileTC(+userID)
        this.props.getStatusTC(+userID)

    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {getUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

