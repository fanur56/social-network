import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {AddPostType, PostsDataType} from "../../../redux/redux";

type MyPostsPropsType = {
    postsData: Array<PostsDataType>
    addPost: AddPostType
}

export const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement: any = React.createRef()

    const addNewPost = () => {
        const text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value=""
    }

    return (
        <div>
            <div>
                My posts
            </div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addNewPost}>Add post</button>
            <div className={styles.posts}>
                New posts
                {props.postsData.map((m: PostsDataType) => <Post message={m.message} likes={m.likes}/>)}
            </div>
        </div>
    )
}