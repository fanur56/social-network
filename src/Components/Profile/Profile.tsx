import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {AddPostType, PostsMessagesType} from "../../redux/redux";
import s from "./Profile.module.css"

type ProfilePropsType={
    postsMessages:PostsMessagesType
    addPost:AddPostType
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
            <MyPosts postsData={props.postsMessages.postsData}
                     addPost={props.addPost}/>
        </div>
    )
}