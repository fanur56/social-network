import React from "react";
import {addNewPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ReduxDispatchType, ReduxStateType} from "../../../redux/redux-store";

const mapStateToProps=(state: ReduxStateType)=>{
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps=(dispatch: ReduxDispatchType)=>{
    return {
        onPostChange: (text: string)=>{
            dispatch(updateNewPostTextCreator(text))
        },
        addNewPost: ()=>{
            dispatch(addNewPostCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)