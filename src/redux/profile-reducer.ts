import {PostsType} from "../Components/Profile/MyPosts/MyPosts";
import {UserProfileType} from "../Components/Profile/Profile";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const UPDATE_STATUS = "UPDATE_STATUS"

type AddPostAT = {
    type: "ADD-POST",
    newPostText: string
}
type setUserProfileAT = {
    type: "SET_USER_PROFILE"
    profile: any
}
type setStatusAT = {
    type: "SET_STATUS"
    status: string
}
type updateStatusAT = {
    type: "UPDATE_STATUS"
    status: string
}
export type profileReducerDispatchActionType = (
    AddPostAT
    | setUserProfileAT
    | setStatusAT
    | updateStatusAT
    )

const initialState: PostsType = {
    postsData: [
        {id: 1, message: "Hello", likes: 0},
        {id: 2, message: "How are you?", likes: 12}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action: profileReducerDispatchActionType) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [
                    ...state.postsData,
                    {
                        id: state.postsData.length + 1,
                        message: action.newPostText,
                        likes: 0
                    }
                ],
                newPostText: ""
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addNewPostAC = (newPostText:string): AddPostAT => ({type: ADD_POST, newPostText})
export const setUserProfileAC = (profile: UserProfileType): setUserProfileAT => ({type: SET_USER_PROFILE, profile})
export const setStatusAC = (status: string): setStatusAT => ({
    type: SET_STATUS, status
})

const updateStatusAC = (status: string): updateStatusAT => ({
    type: UPDATE_STATUS, status
})

export const getUserProfileTC = (userID: string) => (dispatch: Dispatch) => {
        usersAPI.getProfile(+userID)
        .then(response => {
            dispatch(setUserProfileAC(response.data));
        });
}

export const getStatusTC = (userID: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(+userID)
        .then((response) => {
            dispatch(setStatusAC(response.data))
        })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(updateStatusAC(status))
            }
        })
}

export default profileReducer

