import {DispatchActionType, FollowAT, SetUsersAT, UnfollowAT, UsersStateType, UserType} from "./types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";


const initialState: UsersStateType = {
    users: [
        {
            id: 1,
            photo: "https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg",
            followed: true,
            fullName: "Fanur",
            status: "I am a samurai",
            location: {
                country: "Russia",
                city: "Saint-Petersburg"
            }
        },
        {
            id: 2,
            photo: "https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg",
            followed: false,
            fullName: "Dmitriy",
            status: "I am a segun",
            location: {
                country: "Belarus",
                city: "Minsk"
            }
        },
        {
            id: 3,
            photo: "https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg",
            followed: false,
            fullName: "Ilya",
            status: "I am a emperor",
            location: {
                country: "Russia",
                city: "Moscow"
            }
        }
    ]
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
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
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