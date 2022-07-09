import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {
    addNewPostCreator,
    PostsDataType,
    PostsType, updateNewPostTextCreator, DispatchActionType
} from "../../../redux/redux";

type MyPostsPropsType = {
    posts: PostsType
    dispatch: (action: DispatchActionType) => void
}



export const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        if (newPostElement.current) {
            props.dispatch(addNewPostCreator())
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.dispatch(updateNewPostTextCreator(text))
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