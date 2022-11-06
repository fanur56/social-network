import React from "react";
import styles from './Post.module.css'

type PostPropsType = {
    message: string
    likes: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={styles.item}>
            <img alt="avatar"
                 src="https://i.kym-cdn.com/entries/icons/original/000/001/420/977.jpg"/>
            {props.message}
            <div>
                <span>like {props.likes}</span>
            </div>
        </div>
    )
}