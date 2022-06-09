import React from "react";
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {postsDataType, PostsMessagesType, PostsType} from "../../redux/redux";

type ProfilePropsType={
    postsMessages:PostsMessagesType

}



export const Profile= (props:ProfilePropsType) => {
    return (
        <div>
            <div>
                <img alt='pic' src='https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/04/planet-pluto-0405221.jpg'/>
            </div>
            <div>
                Ava+description
            </div>
            <MyPosts postsData={props.postsMessages.postsData}/>
        </div>
    )
}