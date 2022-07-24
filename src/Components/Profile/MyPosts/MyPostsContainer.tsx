import React from "react";
import {addNewPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps=(state: any)=>{
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps=(dispatch: any)=>{
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