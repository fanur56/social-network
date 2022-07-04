let rerenderEntireTree = (state: StateType)=>{
    console.log('state changed')
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

type ObserverType = (state:StateType) => void


export const state: StateType = {
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


}

export const addPost = () => {
    const someNewPost = {
        message: state.posts.newPostText,
        likes: 0
    }
    state.posts.postsData.push(someNewPost)
    state.posts.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.posts.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe=(observer: ObserverType)=>{
    rerenderEntireTree = observer
}