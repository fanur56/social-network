import React from "react";
import styles from "./User.module.scss";
import usersImg from "../../../assets/images/usersImg.png";
import {NavLink} from "react-router-dom";
import {UsersType} from "../users-reducer";
import {SvgSelector} from "../../../common/components/svgSelector/SvgSelector";

type UserCompType = {
    user: UsersType
    follow: (userID: number) => void
    usFollow: (userID: number) => void
    followingInProgress: number[]
}

export const User = (props: UserCompType) => {

    const onClickFollowHandler = () => props.usFollow(props.user.id)
    const onClickUnFollowHandler = () => props.follow(props.user.id)

    return (
        <div className={styles.userComponent}>
            <div className={styles.userInfo}>
                <img
                    className={styles.imgAvatar}
                    alt={'ava'}
                    src={props.user.photos.small !== null ? props.user.photos.small : usersImg}
                />
                <h3 className={styles.userName}>{props.user.name}</h3>
                <div className={styles.status}>{props.user.status}</div>
            </div>
            <div className={styles.buttons}>
                {props.user.followed ?
                    <button
                        className={`${styles.button} ${styles.followButton}`}
                        disabled={props.followingInProgress.some(id => id === props.user.id)}
                        onClick={onClickFollowHandler}
                    >
                        {props.followingInProgress.some(id => id === props.user.id) ?
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
                        disabled={props.followingInProgress.some(id => id === props.user.id)}
                        onClick={onClickUnFollowHandler}
                    >
                        {props.followingInProgress.some(id => id === props.user.id) ?
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
                    </NavLink>
                </button>
            </div>
            <div className={styles.viewProfile}>
                <NavLink to={'/profile/' + props.user.id}>
                    View profile
                </NavLink>
            </div>
        </div>
    )
}