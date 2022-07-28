import {DispatchActionType, FollowAT, UnfollowAT, UsersStateType} from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";



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
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                })
            }
        default:
            return state
    }

}

const followAC = (userID: number): FollowAT => ({type: FOLLOW, userID})

const unfollowAC = (userID: number): UnfollowAT => ({type: UNFOLLOW, userID})

export default usersReducer;