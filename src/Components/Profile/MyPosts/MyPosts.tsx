import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {AddPostType, PostsDataType, PostsType, UpdateNewPostTextType} from "../../../redux/redux";

type MyPostsPropsType = {
    postsData: PostsType
    addPost: AddPostType
    updateNewPostText: UpdateNewPostTextType
}

export const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        if (newPostElement.current) {
            props.addPost()
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.updateNewPostText(text)
        }
    }

    return (
        <div>
            <div>
                My posts
            </div>
            <textarea ref={newPostElement} value={props.postsData.newPostText} onChange={onPostChange}></textarea>
            <button onClick={addNewPost}>Add post</button>
            <div className={styles.posts}>
                New posts
                {props.postsData.postsData.map((m: PostsDataType) => <Post message={m.message} likes={m.likes}/>)}
            </div>
        </div>
    )
}