import {DispatchActionType} from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

export type UsersStateType = {
    users: Array<UserType>
}

export type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: UsersLocationType
}

export type UsersLocationType = {
    country: string,
    city: string
}

const initialState: UsersStateType = {
    users: [
        {
            id: 1,
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
    return state
}

const followAC = () => ({type: FOLLOW})

const unfollowAC = () => ({type: UNFOLLOW})

export default usersReducer;