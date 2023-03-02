import React from "react";
import {addNewPostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppDispatchType, RootStateType} from "../../../redux/redux-store";

const mapStateToProps=(state: RootStateType)=>{
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps=(dispatch: AppDispatchType)=>{
    return {
        addNewPost: (newPostText: string)=>{
            dispatch(addNewPostAC(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)