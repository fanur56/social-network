import React from "react";
import styles from './MyPosts.module.scss';
import {Post} from "./Post/Post";
import {AddPostFormRedux, AddPostFormType} from "./addPostForm/AddPostForm";
import {ProfilePageType} from "../profile-reducer";

type MyPostsPropsType = {
    isOwner: boolean
    addPost: (formData: AddPostFormType) => void
    reset: () => void
    profilePage: ProfilePageType
    deletePost: (id: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const addNewPost = (formData: AddPostFormType) => {
        props.addPost(formData)
        props.reset()
    }

    return <div className={styles.myPostsContainer}>
        {props.isOwner &&
            <AddPostFormRedux onSubmit={addNewPost}/>
        }
        {props.profilePage.posts.map(u => <Post
            key={u.id}
            message={u.message}
            likes={u.likes}
            id={u.id}
            photos={props.profilePage.profile?.photos?.small}
            name={props.profilePage.profile?.fullName}
            isOwner={props.isOwner}
            deletePost={props.deletePost}
        />)}
    </div>
}