import {followAPI, usersAPI} from "api/api";
import {Dispatch} from "redux";
import {setAppStatusAC} from "app/app-reducer";

const initialState: UsersMainType = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersMainType = initialState, action: UsersActionType): UsersMainType => {
    switch (action.type) {
        case "USERS/FOLLOW":
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)
            }
        case "USERS/UNFOLLOW":
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)
            }
        case 'USERS/SET-USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'USERS/SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case 'USERS/SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case 'USERS/TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'USERS/FOLLOWING-IN-PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        case "USERS/SET-PAGE-SIZE":
            return {...state, pageSize: action.pageSize}
        default :
            return state;
    }
}

// actions
export const followAC = (userID: number) => ({type: 'USERS/FOLLOW', userID} as const)

export const usFollowAC = (userID: number) => ({type: 'USERS/UNFOLLOW', userID} as const)

export const setUsersAC = (users: UsersType[]) => ({type: 'USERS/SET-USERS', users} as const)

export const setCurrentPageAC = (pageNumber: number) => ({type: 'USERS/SET-CURRENT-PAGE', pageNumber} as const)

export const setPageSizeAC = (pageSize: number) => ({type: 'USERS/SET-PAGE-SIZE', pageSize} as const)

export const setTotalUsersCountAC = (totalCount: number) => ({type: 'USERS/SET-TOTAL-USERS-COUNT', totalCount} as const)

export const toggleIsFetchingAC = (isFetching: boolean) => ({type: 'USERS/TOGGLE-IS-FETCHING', isFetching} as const)

export const toggleFollowingProgressAC = (isFetching: boolean, userID: number) => ({
    type: 'USERS/FOLLOWING-IN-PROGRESS',
    isFetching,
    userID
} as const)

// thunks
export const getUsersTC = (currentPage: number, pageSize: number): any => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    dispatch(toggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(currentPage))
    try {
        const res = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsersAC(res.items))
        dispatch(setTotalUsersCountAC(res.totalCount))
        dispatch(setPageSizeAC(pageSize))
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(toggleIsFetchingAC(false))
        dispatch(setAppStatusAC("idle"))
    }
}

export const followTC = (userID: number): any => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    dispatch(toggleFollowingProgressAC(true, userID))
    try {
        const res = await followAPI.postFollow(userID)
        if (res.data.resultCode === 0) {
            dispatch(followAC(userID))
        }
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(toggleFollowingProgressAC(false, userID))
        dispatch(setAppStatusAC("idle"))
    }
}

export const usFollowTC = (userID: number): any => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    dispatch(toggleFollowingProgressAC(true, userID))
    try {
        const res = await followAPI.deleteUnFollow(userID)
        if (res.data.resultCode === 0) {
            dispatch(usFollowAC(userID))
        }
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(toggleFollowingProgressAC(false, userID))
        dispatch(setAppStatusAC("idle"))
    }
}

// types
type PhotosType = {
    small: string | null
    large: string | null
}
export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    status: string | null
    followed: boolean
}
export type UsersMainType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type UsersActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof usFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleFollowingProgressAC>
    | ReturnType<typeof setPageSizeAC>