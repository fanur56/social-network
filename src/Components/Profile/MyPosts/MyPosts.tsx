import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";

let postsData = [
    {message: 'Hello', likes: 0},
    {message: 'How are you?', likes: 12}
]


export const MyPosts = () => {


    return (
        <div>
            <div>
                My posts
            </div>
            <textarea></textarea>
            <button>Add post</button>
            <div className={styles.posts}>
                New posts
                {postsData.map(m => <Post message={m.message} likes={m.likes}/>)}
            </div>
        </div>
    )
}