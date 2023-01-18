import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
    followThunkCreator, getUsersThunkCreator, toggleIsFollowingProgressAC,
    unfollowThunkCreator
} from "../../redux/users-reducer";
import {UsersFC} from "./UsersFC";
import {Preloader} from "../common/Preloader/Preloader";
import {UsersStateType} from "./Users";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

export type UsersPageType = {
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}

type UsersPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    usersPage: UsersStateType & UsersPageType
    isFetching: boolean
    toggleIsFollowingProgress: (isFetching: boolean, userID: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UserAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        if (this.props.usersPage.users.length === 0)
            this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }

    changeUsersList = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.usersPage.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersFC usersPage={this.props.usersPage}
                     changeUsersList={this.changeUsersList}
                     follow={this.props.follow}
                     unfollow={this.props.unfollow}/>
        </>
    }

}

const mapStateToProps = (state: RootStateType) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow: followThunkCreator,
        unfollow: unfollowThunkCreator,
        toggleIsFollowingProgress: toggleIsFollowingProgressAC,
        getUsers: getUsersThunkCreator
    }))(UserAPIComponent)


