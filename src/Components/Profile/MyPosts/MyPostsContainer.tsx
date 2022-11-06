import React from "react";
import {addNewPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
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
            dispatch(updateNewPostTextAC(text))
        },
        addNewPost: ()=>{
            dispatch(addNewPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)