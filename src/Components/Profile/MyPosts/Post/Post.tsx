import React from "react";
import styles from './Post.module.css'
import ava from "../../../../assets/images/ava.png";

type PostPropsType = {
    message: string
    likes: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={styles.item}>
            <img alt="avatar"
                 src={ava}/>
            {props.message}
            <div>
                <span>like {props.likes}</span>
            </div>
        </div>
    )
}