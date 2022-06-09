import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postsDataType, PostsMessagesType} from "../../../redux/redux";

type MyPostsPropsType={
    postsData:Array<postsDataType>
}

export const MyPosts= (props:MyPostsPropsType) => {
    return (
        <div>
            <div>
                My posts
            </div>
            <textarea></textarea>
            <button>Add post</button>
            <div className={styles.posts}>
                New posts
                {props.postsData.map((m:postsDataType) => <Post message={m.message} likes={m.likes}/>)}
            </div>
        </div>
    )
}