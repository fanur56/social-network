import React from "react";
import styles from './Post.module.scss'
import avatar from '../../../../assets/images/usersImg.png'
import {SvgSelector} from "common/components/svgSelector/SvgSelector";

type PostPropsType = {
    message: string
    likes: number
    id: string
    photos: string | undefined | null
    name: string | undefined
    isOwner: boolean
    deletePost: (id: string) => void
}

export const Post = (props: PostPropsType) => {

    const deletePostHandler = () => {
        props.deletePost(props.id)
    }

    return <div className={styles.postBox}>
        <div className={styles.nameBox}>
            <img
                className={styles.img}
                alt={'ava'}
                src={props.photos ? props.photos : avatar}
            />
            <h3 className={styles.nameTitle}>{props.name}</h3>
        </div>
        <div className={styles.postText}>
            {props.message}
        </div>
        <div className={styles.footerPost}>
            <div className={styles.likeBox}>
                <SvgSelector svgName={"Like"}/>
                <span className={styles.numberLike}>{props.likes}</span>
            </div>
            {props.isOwner &&
                <div className={styles.delete} onClick={deletePostHandler}>
                    <SvgSelector svgName={"Delete"}/>
                </div>
            }
        </div>
    </div>
};