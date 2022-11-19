import React from "react";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/users-reducer";
import {UsersPageType, UsersStateType, UserType} from "../../redux/types";
import {UsersFC} from "./UsersFC";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    usersPage: UsersStateType & UsersPageType
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    isFetching: boolean
}

class UserAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {
            this.props.toggleIsFetching(true)
            usersAPI.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
                .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
        }
    }

    changeUsersList = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.usersPage.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
            });
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
        isFetching: state.usersPage.isFetching
    }
}
{/*
    const mapDispatchToProps = (dispatch: ReduxDispatchType) => {
        return {
            follow: (userID: number) => {
                dispatch(followAC(userID))
            },
            unfollow: (userID: number) => {
                dispatch(unfollowAC(userID))
            },
            setUsers: (users: Array<UserType>) => {
                dispatch(setUsersAC(users))
            },
            setCurrentPage: (currentPage: number) => {
                dispatch(setCurrentPageAC(currentPage))
            },
            setTotalUsersCount: (totalCount: number) => {
                dispatch(setTotalUsersCountAC(totalCount))
            },
            toggleIsFetching: (toggleIsFetching: boolean) => {
                dispatch(toggleIsFetchingAC(toggleIsFetching))
            }
        }
    }
*/
}


export const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC
})(UserAPIComponent)
