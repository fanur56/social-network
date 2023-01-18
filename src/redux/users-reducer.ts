import {usersAPI} from "../api/api";
import {ReduxDispatchType} from "./redux-store";
import {UsersStateType, UserType} from "../Components/Users/Users";
import {UsersPageType} from "../Components/Users/UsersContainer";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

type FollowAT = {
    type: 'FOLLOW'
    userID: number
}
type UnfollowAT = {
    type: 'UNFOLLOW'
    userID: number
}
type SetCurrentPageAT = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}
type SetTotalUsersCountAT = {
    type: "SET-TOTAL-USERS-COUNT"
    totalCount: number
}
type ToggleIsFetchingAT = {
    type: "TOGGLE-IS-FETCHING"
    isFetching: boolean
}
type toggleIsFollowingProgressAT = {
    type: "TOGGLE-IS-FOLLOWING-PROGRESS"
    isFetching: boolean
    userID: number
}
type SetUsersAT = {
    type: "SET-USERS"
    users: Array<UserType>
}

export type usersReducerDispatchActionType = (
    | FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT
    | ToggleIsFetchingAT
    | toggleIsFollowingProgressAT
    )


const initialState: UsersStateType & UsersPageType = {
    users: [],
    pageSize: 5,
    totalCount: 20,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action: usersReducerDispatchActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }

}

const followSuccessAC = (userID: number): FollowAT => ({type: FOLLOW, userID})
const unfollowSuccessAC = (userID: number): UnfollowAT => ({type: UNFOLLOW, userID})
const setUsersAC = (users: Array<UserType>): SetUsersAT => ({type: SET_USERS, users})
const setCurrentPageAC = (currentPage: number): SetCurrentPageAT => ({type: SET_CURRENT_PAGE, currentPage})
const setTotalUsersCountAC = (totalCount: number): SetTotalUsersCountAT => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
})
const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingAT => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const toggleIsFollowingProgressAC = (isFetching: boolean, userID: number): toggleIsFollowingProgressAT => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userID
})

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: ReduxDispatchType) => {
        dispatch(toggleIsFetchingAC(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetchingAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(setTotalUsersCountAC(data.totalCount))
            });
    }
}

export const followThunkCreator = (userID: number) => {
    return (dispatch: ReduxDispatchType) => {
        dispatch(toggleIsFollowingProgressAC(true, userID))
        usersAPI.follow(userID).then((resultCode: number) => {
            if (resultCode === 0) {
                dispatch(followSuccessAC(userID))
            }
            dispatch(toggleIsFollowingProgressAC(false, userID))
        });
    }
}

export const unfollowThunkCreator = (userID: number) => {
    return (dispatch: ReduxDispatchType) => {
        dispatch(toggleIsFollowingProgressAC(true, userID))
        usersAPI.unfollow(userID).then((resultCode: number) => {
            if (resultCode === 0) {
                dispatch(unfollowSuccessAC(userID))
            }
            dispatch(toggleIsFollowingProgressAC(false, userID))
        });
    }
}

export default usersReducer;


