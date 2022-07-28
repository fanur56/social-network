import {AddPostAT, DispatchActionType, PostsType, UpdateNewPostTextAT} from "./types";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState: PostsType = {
    postsData: [
        {id: 1, message: 'Hello', likes: 0},
        {id: 2, message: 'How are you?', likes: 12}
    ],
    newPostText: 'hello'
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
        default:
            return state;
    }
}

export const addNewPostCreator = (): AddPostAT => ({type: ADD_POST})

export const updateNewPostTextCreator = (text: string): UpdateNewPostTextAT => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer