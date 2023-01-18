import {PostsType} from "../Components/Profile/MyPosts/MyPosts";
import {UserProfileType} from "../Components/Profile/Profile";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const UPDATE_STATUS = "UPDATE_STATUS"

type AddPostAT = {
    type: "ADD-POST"
}
type UpdateNewPostTextAT = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
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
    | UpdateNewPostTextAT
    | setUserProfileAT
    | setStatusAT
    | updateStatusAT
    )

const initialState: PostsType = {
    postsData: [
        {id: 1, message: "Hello", likes: 0},
        {id: 2, message: "How are you?", likes: 12}
    ],
    newPostText: "hello",
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
                        message: state.newPostText,
                        likes: 0
                    }
                ],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
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

export const addNewPostAC = (): AddPostAT => ({type: ADD_POST})
export const updateNewPostTextAC = (text: string): UpdateNewPostTextAT => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
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
    debugger
    profileAPI.getStatus(+userID)
        .then((response) => {
            debugger
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

