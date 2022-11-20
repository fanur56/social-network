import React from "react";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {
    followSuccessAC, followThunkCreator, getUsersThunkCreator, toggleIsFollowingProgressAC,
    unfollowSuccessAC, unfollowThunkCreator
} from "../../redux/users-reducer";
import {UsersPageType, UsersStateType, UserType} from "../../redux/types";
import {UsersFC} from "./UsersFC";
import {Preloader} from "../common/Preloader/Preloader";

type UsersPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    usersPage: UsersStateType & UsersPageType
    isFetching: boolean
    toggleIsFollowingProgress: (isFetching: boolean, userID: number) => void
    getUsers: (currentPage: number, pageSize: number)=>void
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

const mapStateToProps = (state: ReduxStateType) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator,
    toggleIsFollowingProgress: toggleIsFollowingProgressAC,
    getUsers: getUsersThunkCreator
})(UserAPIComponent)
