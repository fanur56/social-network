import s from "../Profile.module.css";
import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";

export const ProfileInfo = (props:any) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.profileImage}>
                <img alt='pic'
                     src='https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/04/planet-pluto-0405221.jpg'/>
            </div>
            <div>
                <img src={props.profile.photos.large} alt="pic"/>
                Ava+description
            </div>
        </div>
    )
}