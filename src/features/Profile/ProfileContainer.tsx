import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {
    addPostAC, deletePostAC,
    getUserProfileTC,
    getUserStatusTC, ProfilePageType,
    ProfileType,
    savePhotoTC,
    saveProfileTC,
    updateStatusTC
} from "./profile-reducer";
import {AppStateType} from "../../app/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";
import {InfoContent} from "./InfoContent/InfoContent";
import styles from './Profile.module.scss';
import {followTC, UsersType, usFollowTC} from "../Users/users-reducer";
import {RequestStatusType} from "../../app/app-reducer";
import {AddPostFormType} from "./MyPosts/addPostForm/AddPostForm";
import {reset} from "redux-form";
import {MyPosts} from "./MyPosts/MyPosts";

export class ProfileAPI extends React.Component<PropsType> {

    userInfo() {
        let userID = this.props.match.params.userID
        if (userID) {
            const user = this.props.users.find(el => el.id === +userID)
            return user?.followed
        } else {
            return undefined
        }
    }

    refreshProfile() {
        let userID = this.props.match.params.userID
        if (!userID) {
            // @ts-ignore
            userID = this.props.myID
            if (!userID) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if (this.props.match.params.userID !== prevProps.match.params.userID)
            this.refreshProfile()
    }

    render() {
        return (
            <div className={styles.profileComponent}>
                <ProfileInfo {...this.props}
                             isOwner={!this.props.match.params.userID}
                             userID={this.props.match.params.userID}
                             userFollowed={this.userInfo()}
                             follow={this.props.followTC}
                             usFollow={this.props.usFollowTC}
                             followingInProgress={this.props.followingInProgress}
                />
                <MyPosts
                    isOwner={!this.props.match.params.userID}
                    reset={this.props.reset}
                    addPost={this.props.addPost}
                    profilePage={this.props.profilePage}
                    deletePost={this.props.deletePost}
                />
                <InfoContent/>
            </div>
        )
    }
}

type PathParamsType = { userID: string }
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsTye

type mapStateToPropsType = {
    users: UsersType[]
    profile: ProfileType | null
    status: string
    myID: number | null
    isAuth: boolean
    followingInProgress: number[]
    statusApp: RequestStatusType
    profilePage: ProfilePageType
}

type mapDispatchToPropsTye = {
    getUserProfile: (userID: string) => void
    getUserStatus: (userID: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => void
    followTC: (userID: number) => void
    usFollowTC: (userID: number) => void
    addPost: (formData: AddPostFormType) => void
    reset: () => void
    deletePost: (id: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        myID: state.auth.id,
        isAuth: state.auth.isAuth,
        followingInProgress: state.usersPage.followingInProgress,
        statusApp: state.app.status,
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsTye => {
    return {
        getUserProfile: (userID: string) => dispatch(getUserProfileTC(userID)),
        getUserStatus: (userID: string) => dispatch(getUserStatusTC(userID)),
        updateStatus: (status: string) => dispatch(updateStatusTC(status)),
        savePhoto: (file: File) => dispatch(savePhotoTC(file)),
        saveProfile: (formData: ProfileType) => dispatch(saveProfileTC(formData)),
        followTC: (userID: number) => dispatch(followTC(userID)),
        usFollowTC: (userID: number) => dispatch(usFollowTC(userID)),
        addPost: (formData: AddPostFormType) => dispatch(addPostAC(formData)),
        reset: () => dispatch(reset('addPostForm')),
        deletePost: (id: string) => dispatch(deletePostAC(id))
    }
}

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileAPI)
