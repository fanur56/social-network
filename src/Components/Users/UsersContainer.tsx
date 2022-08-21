import React from "react";
import {connect} from "react-redux";
import UsersCC from "./UsersCC";
import {ReduxDispatchType, ReduxStateType} from "../../redux/redux-store";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {UserType} from "../../redux/types";

const mapStateToProps = (state: ReduxStateType) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: ReduxDispatchType) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
    }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCC)
