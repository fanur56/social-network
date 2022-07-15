import {AddPostActionType, DispatchActionType, PostsType, UpdateNewPostTextActionType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState: PostsType = {
    postsData: [
        {message: 'Hello', likes: 0},
        {message: 'How are you?', likes: 12}
    ],
    newPostText: 'hello'
}

const profileReducer = (state = initialState, action: DispatchActionType) => {
    if (action.type === ADD_POST) {
        const someNewPost = {
            message: state.newPostText,
            likes: 0
        }
        state.postsData.push(someNewPost)
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    }
    return state
}

export const addNewPostCreator = (): AddPostActionType => ({type: ADD_POST})

export const updateNewPostTextCreator = (text: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer