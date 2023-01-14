import {PostsType} from "../Components/Profile/MyPosts/MyPosts";
import {UserProfileType} from "../Components/Profile/Profile";
import {setAuthUserDataAT, SetUsersAT} from "./auth-reducer";
import {SendMessageAT, UpdateNewMessageBodyAT} from "./messages-reducer";
import {
    FollowAT,
    SetCurrentPageAT,
    SetTotalUsersCountAT,
    ToggleIsFetchingAT,
    toggleIsFollowingProgressAT,
    UnfollowAT
} from "./users-reducer";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

const initialState: PostsType = {
    postsData: [
        {id: 1, message: "Hello", likes: 0},
        {id: 2, message: "How are you?", likes: 12}
    ],
    newPostText: "hello",
    profile: null
}

const profileReducer = (state = initialState, action: DispatchActionType) => {
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

export default profileReducer

export type AddPostAT = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type setUserProfileAT = {
    type: "SET_USER_PROFILE"
    profile: any
}

export type DispatchActionType = (
    AddPostAT
    | UpdateNewPostTextAT
    | UpdateNewMessageBodyAT
    | SendMessageAT
    | FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT
    | ToggleIsFetchingAT
    | setUserProfileAT
    | toggleIsFollowingProgressAT
    | setAuthUserDataAT
    )