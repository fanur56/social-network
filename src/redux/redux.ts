export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    addPost: (newPostText: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: ObserverType) => void
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void
}

export type StateType = {
    dialog: DialogType
    posts: PostsType
}

export type DialogType = {
    dialogData: Array<DialogDataType>
    messagesData: Array<MessagesDataType>
}

export type DialogDataType = {
    id: number
    name: string
}

export type MessagesDataType = {
    message: string
}

export type PostsType = {
    postsData: Array<PostsDataType>
    newPostText: string
}

export type PostsDataType = {
    message: string
    likes: number
}

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type ObserverType = (state: StateType) => void

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const store: StoreType = {
    _state: {
        dialog: {
            dialogData: [
                {id: 1, name: "Oleg"},
                {id: 2, name: "Ola"},
                {id: 3, name: "Sergey"},
                {id: 4, name: "Kent"},
                {id: 5, name: "Garry"},
                {id: 6, name: "Kenta"}
            ],
            messagesData: [
                {message: "Hello"},
                {message: "How are you?"},
                {message: "I am ok."},
            ]
        },
        posts: {
            postsData: [
                {message: 'Hello', likes: 0},
                {message: 'How are you?', likes: 12}
            ],
            newPostText: 'hello'
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: StateType) {
        console.log('state changed')
    },

    subscribe(observer: ObserverType) {
        this._callSubscriber = observer
    },
    addPost(newPostText: string) {
        const someNewPost = {
            message: this._state.posts.newPostText,
            likes: 0
        }
        this._state.posts.postsData.push(someNewPost)
        this._state.posts.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.posts.newPostText = newText
        this._callSubscriber(this._state)
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const someNewPost = {
                message: this._state.posts.newPostText,
                likes: 0
            }
            this._state.posts.postsData.push(someNewPost)
            this._state.posts.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.posts.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addNewPostActionCreator = (): AddPostActionType => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => ({type: UPDATE_NEW_POST_TEXT, newText: text})


//window.store = store


