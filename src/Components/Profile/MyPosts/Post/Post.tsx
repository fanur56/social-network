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
                 src="https://www.looper.com/img/gallery/heres-where-you-can-watch-the-demon-slayer-mugen-train-movie-at-home/l-intro-1620180068.jpg"/>
            {props.message}
            <div>
                <span>like {props.likes}</span>
            </div>
        </div>
    )
}