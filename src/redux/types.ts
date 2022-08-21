
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
    id: number
    message: string
    likes: number
}

export type AddPostAT = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type UpdateNewMessageBodyAT = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

export type SendMessageAT = {
    type: 'SEND-MESSAGE'
}

export type FollowAT = {
    type: 'FOLLOW'
    userID: number
}

export type UnfollowAT = {
    type: 'UNFOLLOW'
    userID: number
}

export type SetUsersAT = {
    type: "SET-USERS"
    users: Array<UserType>
}

export type SetCurrentPageAT = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}

export type setTotalUsersCountAT = {
    type: "SET-TOTAL-USERS-COUNT"
    totalCount: number
}

export type UsersStateType = {
    users: Array<UserType>
}

export type UsersPageType = {
    pageSize: number
    totalCount: number
    currentPage: number
}

export type UserType = {
    id: number
    photos: UserPhotosType
    followed: boolean
    name: string
    status: string
    location: UsersLocationType
}

export type UserPhotosType = {
    small: string | null
    large: string | null
}

export type UsersLocationType = {
    country: string,
    city: string
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
    | setTotalUsersCountAT
    )



/*export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: ObserverType) => void
    dispatch: (action: DispatchActionType) => void
    type ObserverType = (state: StateType) => void
    export type StateType = {
    messagesPage: DialogType
    profilePage: PostsType
    sidebar: SidebarType
}
}*/

/*
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
                {id: 1, message: 'Hello', likes: 0},
                {id: 2, message: 'How are you?', likes: 12}
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
*/

//window.store = store


