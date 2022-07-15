import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {
    DispatchActionType,
    PostsType
} from "../../redux/store";
import s from "./Profile.module.css"

type ProfilePropsType={
    posts:PostsType
    dispatch: (action: DispatchActionType) => void
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
            <MyPosts posts={props.posts}
                     dispatch={props.dispatch}/>
        </div>
    )
}