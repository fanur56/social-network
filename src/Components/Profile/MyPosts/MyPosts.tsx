import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postsDataType} from "../../../redux/redux";

type MyPostsPropsType = {
    postsData: Array<postsDataType>
}

export const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement: any = React.createRef()

    const addPost = () => {
        const text = newPostElement.current.value
        alert(text)
    }

    return (
        <div>
            <div>
                My posts
            </div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Add post</button>
            <div className={styles.posts}>
                New posts
                {props.postsData.map((m: postsDataType) => <Post message={m.message} likes={m.likes}/>)}
            </div>
        </div>
    )
}