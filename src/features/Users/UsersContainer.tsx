import React from "react";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "app/redux-store";
import {
    followTC,
    getUsersTC,
    setCurrentPageAC, setPageSizeAC,
    toggleFollowingProgressAC,
    UsersActionType,
    UsersType,
    usFollowTC
} from "./users-reducer";
import {Users} from "./Users";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPagesSize,
    getTotalUsersCount,
    getUsers
} from "./users-selectors";
import {withAuthRedirect} from "common/hoc/withAuthRedirect";

class UsersAPI extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }
    onPageSize = (pageSize: number) => {
        this.props.getUsersTC(this.props.currentPage, pageSize)
    }

    render() {
        return <>
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                onPageSize={this.onPageSize}
                follow={this.props.followTC}
                usFollow={this.props.usFollowTC}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type mapDispatchToPropsType = {
    setCurrentPageAC: (newCurrentPage: number) => void
    setPageSizeAC: (pageSize: number) => void
    toggleFollowingProgressAC: (isFetching: boolean, userID: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userID: number) => void
    usFollowTC: (userID: number) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {  //selector
    return {
        users: getUsers(state),
        pageSize: getPagesSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<UsersActionType>): mapDispatchToPropsType => {
    return {
        setCurrentPageAC: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setPageSizeAC: (pageSize: number) => dispatch(setPageSizeAC(pageSize)),
        toggleFollowingProgressAC: (isFetching: boolean, userID: number) => dispatch(toggleFollowingProgressAC(isFetching, userID)),
        getUsersTC: (currentPage: number, pageSize: number) => dispatch(getUsersTC(currentPage, pageSize)),
        followTC: (userID: number) => dispatch(followTC(userID)),
        usFollowTC: (userID: number) => dispatch(usFollowTC(userID))
    }
}

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersAPI)
