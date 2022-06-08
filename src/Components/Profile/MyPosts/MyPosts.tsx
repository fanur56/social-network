import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";

type postsDataPropsType = {
    postsData:Array<postsDataType>
}

export type postsDataType ={
    message:string
    likes:number
}

export const MyPosts:React.FC<postsDataPropsType> = (props) => {
    return (
        <div>
            <div>
                My posts
            </div>
            <textarea></textarea>
            <button>Add post</button>
            <div className={styles.posts}>
                New posts
                {props.postsData.map(m => <Post message={m.message} likes={m.likes}/>)}
            </div>
        </div>
    )
}