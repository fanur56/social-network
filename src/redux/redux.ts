import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: ObserverType) => void
    dispatch: (action: DispatchActionType) => void
}

export type StateType = {
    messagesPage: DialogType
    profilePage: PostsType
    sidebar: SidebarType
}

export type SidebarType = {}

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
    id: number
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

export const store: StoreType = {
    _state: {
        messagesPage: {
            dialogData: [
                {id: 1, name: "Oleg"},
                {id: 2, name: "Ola"},
                {id: 3, name: "Sergey"},
                {id: 4, name: "Kent"},
                {id: 5, name: "Garry"},
                {id: 6, name: "Kenta"}
            ],
            messagesData: [
                {id: 1, message: "Hello"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "I am ok!"},
            ],
            newMessagesBody: ''
        },
        profilePage: {
            postsData: [
                {message: 'Hello', likes: 0},
                {message: 'How are you?', likes: 12}
            ],
            newPostText: 'hello'
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer: ObserverType) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}

//window.store = store


