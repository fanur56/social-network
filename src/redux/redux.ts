export type StoreType = {
    _state: StateType
    getState: any   // need fix
    _callSubscriber: (state: StateType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: ObserverType) => void
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

export type AddPostType = () => void

export type UpdateNewPostTextType = (newText: string) => void

type ObserverType = (state: StateType) => void


/*export const state: StateType = {
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
}*/

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
    addPost() {
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
    subscribe(observer: ObserverType) {
        this._callSubscriber = observer
    }
}

//window.store = store
