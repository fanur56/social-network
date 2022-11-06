import s from "../Profile.module.css";
import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";

export const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.profileImage}>
                <img alt='pic'
                     src='https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/04/planet-pluto-0405221.jpg'/>
            </div>
            <div className={s.avatarDescriptionContainer}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large} alt="pic"/>
                </div>
                <div className={s.description}>
                    <div>
                        Full name: {props.profile.fullName}
                    </div>
                    <div>
                        About me: {props.profile.aboutMe}
                    </div>
                    <div>
                        Looking for a job: {(props.profile.lookingForAJob) ? "Yes" : "No"} ({props.profile.lookingForAJobDescription})
                    </div>
                </div>

            </div>
        </div>
    )
}