import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddNewPost = () => {
        props.addNewPost()
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.onPostChange(text)
        }
    }

    return (
        <div>
            <div>
                My posts
            </div>
            <textarea ref={newPostElement}
                      value={props.profilePage.newPostText}
                      onChange={onPostChange}>
            </textarea>
            <button onClick={onAddNewPost}>
                Add post
            </button>
            <div className={styles.posts}>
                New posts
                {props.profilePage.postsData.map((m: PostsDataType) => <Post key={m.id}
                                                                             message={m.message}
                                                                             likes={m.likes}/>)}
            </div>
        </div>
    )
}

type MyPostsPropsType = {
    profilePage: PostsType
    addNewPost: () => void
    onPostChange: (text: string) => void
}

export type PostsType = {
    postsData: Array<PostsDataType>
    newPostText: string
    profile: any | null
}

export type PostsDataType = {
    id: number
    message: string
    likes: number
}