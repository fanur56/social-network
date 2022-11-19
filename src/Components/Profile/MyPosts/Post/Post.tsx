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
                 src="../../../../assets/images/ava.png"/>
            {props.message}
            <div>
                <span>like {props.likes}</span>
            </div>
        </div>
    )
}