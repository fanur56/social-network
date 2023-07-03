import React, {ChangeEvent, useRef, useState} from "react";
import styles from './ProfileInfo.module.scss'
import userImg from '../../../assets/images/usersImg.png'
import {ProfileType} from "../profile-reducer";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataReduxForm} from "./ProfileDataForm/ProfileDataForm";
import {SvgSelector} from "../../../common/components/svgSelector/SvgSelector";
import {ProfileStatusWithHooks} from "./profileStatus/ProfileStatusWithHooks";
import {NavLink} from "react-router-dom";
import {RequestStatusType} from "../../../app/app-reducer";

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (e: File) => void
    saveProfile: (formData: ProfileType) => void
    userID: string | undefined
    userFollowed: boolean | undefined
    follow: (userID: number) => void
    usFollow: (userID: number) => void
    followingInProgress: number[]
    statusApp: RequestStatusType
}

export const ProfileInfo = (props: ProfileInfoType) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [editMode, setEditMode] = useState<boolean>(false)

    const settingHandler = () => {
        setEditMode(true)
    }

    const selectFileHandler = () => {
        inputRef && inputRef.current?.click();
    };

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmitHandler = (formData: ProfileType) => {
        // @ts-ignore
        props.saveProfile(formData).then(() => {
                setEditMode(false)
            }
        )
    }

    const onClickFollowHandler = () => {
        if (props.userID) {
            props.usFollow(+props.userID)
        }
    }

    const onClickUnFollowHandler = () => {
        if (props.userID) {
            props.follow(+props.userID)
        }
    }

    const userID = props.userID ? +props.userID : 0

    return <div className={styles.profileInfo}>
        <div className={styles.profileBox}>
            <div className={styles.backgroundAvatar}></div>
            <div className={styles.avatarBox}>
                <img alt={userImg}
                     src={props.profile?.photos.large ? props.profile.photos.large : userImg}
                     className={styles.avatar}
                />
                {props.isOwner && <div>
                    <div onClick={selectFileHandler}>
                        <SvgSelector svgName={"Photo"}/>
                    </div>
                    <input
                        style={{display: 'none'}}
                        ref={inputRef}
                        type={'file'}
                        onChange={onChangeInputHandler}
                    />
                </div>}
            </div>
            <div className={styles.infoNameBox}>
                <h2 className={styles.name}>{props.profile?.fullName}</h2>
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                    isOwner={props.isOwner}
                />
            </div>
        </div>

        {!props.isOwner ?
            <div className={styles.buttons}>
                {props.userFollowed ?
                    <button
                        className={`${styles.button} ${styles.followButton}`}
                        disabled={props.followingInProgress.some(id => id === userID)}
                        onClick={onClickFollowHandler}
                    >
                        {props.followingInProgress.some(id => id === userID) ?
                            <span className={styles.loader}></span>
                            :
                            <span>
                                <SvgSelector svgName={"User"}/>
                                <span className={styles.span}>UnFollow</span>
                            </span>
                        }
                    </button>
                    :
                    <button
                        className={`${styles.button} ${styles.followButton}`}
                        disabled={props.followingInProgress.some(id => id === userID)}
                        onClick={onClickUnFollowHandler}
                    >
                        {props.followingInProgress.some(id => id === userID) ?
                            <span className={styles.loader}></span>
                            :
                            <span>
                                <SvgSelector svgName={"User"}/>
                                <span className={styles.span}>Follow</span>
                            </span>
                        }
                    </button>
                }
                <button className={`${styles.button} ${styles.messageButton}`}>
                    <NavLink to="/messages">
                        <SvgSelector svgName={"Messages"}/>
                        <span className={styles.span}>Message</span>
                    </NavLink>
                </button>
            </div>
            :
            <div className={`${styles.buttons} ${editMode ? styles.nuneButton : ''}`}>
                <button className={`${styles.button} ${styles.settings}`} onClick={settingHandler}>
                    <SvgSelector svgName={"Setting"}/>
                    <span className={styles.span}>Settings</span>
                </button>
            </div>
        }

        <div className={styles.infoBox}>
            {editMode ?
                <ProfileDataReduxForm
                    onSubmit={onSubmitHandler}
                    initialValues={props.profile as ProfileType}
                    profile={props.profile}
                    statusApp={props.statusApp}
                />
                :
                <ProfileData profile={props.profile}/>
            }
        </div>
    </div>


};