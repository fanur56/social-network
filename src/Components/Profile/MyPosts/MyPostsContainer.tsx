import React from "react";
import {
    DispatchActionType, StateType
} from "../../../redux/store";
import {addNewPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    store: ReduxStoreType
}


export const MyPostsContainer = (props: MyPostsPropsType) => {
    const state = props.store.getState()
    const addNewPost = () => {
        props.store.dispatch(addNewPostCreator())
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextCreator(text))
    }

    return (
        <MyPosts onPostChange={onPostChange}
                 addNewPost={addNewPost}
                 profilePage={state.profilePage}
        />
    )
}