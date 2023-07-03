import React from "react";
import {addPostAC, ProfilePageType} from "../profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../app/redux-store";
import {Dispatch} from "redux";
import {AddPostFormType} from "./addPostForm/AddPostForm";
import {reset} from "redux-form";
import {ResetAction} from "redux-form/lib/reduxForm";

export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
    profilePage: ProfilePageType
}

type mapDispatchPropsType = {
    addPost: (formData: AddPostFormType) => void
    reset: () => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: (formData: AddPostFormType) => dispatch(addPostAC(formData)),
        reset: () => dispatch(reset('addPostForm'))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)