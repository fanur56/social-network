import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, updateStatusTC} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type ProfileMapStatePropsType = ReturnType<typeof mapStateToProps>
type ProfileMapDispatchPropsType = ReturnType<typeof mapDispatchToProps>

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
type ProfilePropsType = ProfileMapStatePropsType & ProfileMapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = "21092"
        }
        this.props.getUserProfileTC(userID)
        this.props.getStatusTC(userID)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatusTC}/>
    }
}

const mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

const mapDispatchToProps = () => ({
    getUserProfileTC,
    getStatusTC,
    updateStatusTC
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileTC,
        getStatusTC,
        updateStatusTC
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

