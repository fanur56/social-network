import React from "react";
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


let postsData = [
    {message: 'Hello', likes: 0},
    {message: 'How are you?', likes: 12}
]

export const Profile = () => {
    return (
        <div>
            <div>
                <img alt='pic' src='https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/04/planet-pluto-0405221.jpg'/>
            </div>
            <div>
                Ava+description
            </div>
            <MyPosts postsData={postsData}/>
        </div>
    )
}