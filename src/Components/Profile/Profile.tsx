import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {AddPostType, PostsType, UpdateNewPostTextType} from "../../redux/redux";
import s from "./Profile.module.css"

type ProfilePropsType={
    postsData:PostsType
    addPost:AddPostType
    updateNewPostText:UpdateNewPostTextType
}

export const Profile= (props:ProfilePropsType) => {
    return (
        <div>
            <div className={s.profileImage}>
                <img alt='pic' src='https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/04/planet-pluto-0405221.jpg'/>
            </div>
            <div>
                Ava+description
            </div>
            <MyPosts postsData={props.postsData}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}