import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {Field, reduxForm} from "redux-form";

export const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddNewPost = (values: any) => {
        props.addNewPost(values.newPostText)
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.onPostChange(text)
        }
    }

    return (
        <div>
            <div>
                My posts
            </div>
            <AddNewPostForm onSubmit={onAddNewPost}/>
            <div className={styles.posts}>
                New posts
                {props.profilePage.postsData.map((m: PostsDataType) => <Post key={m.id}
                                                                             message={m.message}
                                                                             likes={m.likes}/>)}
            </div>
        </div>
    )
}

const AddNewPostForm = (props: any) => {
    return <form action="" onSubmit={props.handleSubmit}>
        <Field component={"textarea"} name={"newPostText"}/>
        <button>
            Add post
        </button>
    </form>
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

type MyPostsPropsType = {
    profilePage: PostsType
    addNewPost: (value: string) => void
    onPostChange: (text: string) => void
}

export type PostsType = {
    postsData: Array<PostsDataType>
    newPostText: string
    profile: any | null
    status: string
}

export type PostsDataType = {
    id: number
    message: string
    likes: number
}