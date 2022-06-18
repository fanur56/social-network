import {rerenderEntireTree} from "../render";

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
    postsMessages: PostsMessagesType
}

export type PostsMessagesType = {
    postsData: Array<PostsDataType>
}

export type PostsDataType = {
    message: string
    likes: number
}

export type AddPostType = (newPost: string) => void


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
        postsMessages: {
            postsData: [
                {message: 'Hello', likes: 0},
                {message: 'How are you?', likes: 12}
            ]
        }
    }
}

export const addPost = (newPost: string) => {
    const someNewPost = {
        message: newPost,
        likes: 0
    }
    state.posts.postsMessages.postsData.push(someNewPost)
    rerenderEntireTree(state)
}