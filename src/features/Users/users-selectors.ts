import {AppStateType} from "app/redux-store";
import {createSelector} from "reselect";
import {UsersType} from "./users-reducer";

const getUsersPrimitive = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersPrimitive, (users: UsersType[]) => {
    return users.filter(el => true)
})

export const getPagesSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}

