import {DispatchActionType, FollowAT, SetUsersAT, UnfollowAT, UsersStateType, UserType} from "./types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";


const initialState: UsersStateType = {
    users: []
}

const usersReducer = (state = initialState, action: DispatchActionType) => {
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
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }

}

export const followAC = (userID: number): FollowAT => ({type: FOLLOW, userID})
export const unfollowAC = (userID: number): UnfollowAT => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: Array<UserType>): SetUsersAT => ({type: SET_USERS, users})

export default usersReducer;