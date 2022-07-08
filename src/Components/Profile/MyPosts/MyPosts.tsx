import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {
    addNewPostActionCreator,
    AddPostActionType,
    PostsDataType,
    PostsType, updateNewPostTextActionCreator,
    UpdateNewPostTextActionType
} from "../../../redux/redux";

type MyPostsPropsType = {
    posts: PostsType
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void
}



export const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        if (newPostElement.current) {
            props.dispatch(addNewPostActionCreator())
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.dispatch(updateNewPostTextActionCreator(text))
        }
    }

    return (
        <div>
            <div>
                My posts
            </div>
            <textarea ref={newPostElement} value={props.posts.newPostText} onChange={onPostChange}></textarea>
            <button onClick={addNewPost}>Add post</button>
            <div className={styles.posts}>
                New posts
                {props.posts.postsData.map((m: PostsDataType) => <Post message={m.message} likes={m.likes}/>)}
            </div>
        </div>
    )
}