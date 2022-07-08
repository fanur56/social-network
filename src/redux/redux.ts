export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: ObserverType) => void
    dispatch: (action: DispatchActionType) => void
}

export type StateType = {
    dialog: DialogType
    posts: PostsType
}

export type DialogType = {
    dialogData: Array<DialogDataType>
    messagesData: Array<MessagesDataType>
    newMessagesBody: string
}

export type DialogDataType = {
    id: number
    name: string
}

export type MessagesDataType = {
    id:number
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

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

type ObserverType = (state: StateType) => void

export type DispatchActionType = (AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBodyActionType | SendMessageActionType)

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

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
                {id:1, message: "Hello"},
                {id:2, message: "How are you?"},
                {id:3, message: "I am ok!"},
            ],
            newMessagesBody: ''
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
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialog.newMessagesBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialog.newMessagesBody
            this._state.dialog.messagesData.push({id:4, message: body})
            this._state.dialog.newMessagesBody=''
            this._callSubscriber(this._state)
        }
    }
}

export const addNewPostCreator = (): AddPostActionType => ({type: ADD_POST})

export const updateNewPostTextCreator = (text: string): UpdateNewPostTextActionType => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendNewMessageBodyCreator = (): SendMessageActionType => ({type: SEND_MESSAGE})

export const updateNewMessageTextCreator = (body: string): UpdateNewMessageBodyActionType => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

//window.store = store


