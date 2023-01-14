import s from "./Users.module.css";
import avacat from "../../assets/images/avacat.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import {UsersPageType} from "./UsersContainer";
import {UsersStateType, UserType} from "./Users";

type UsersFCPropsType = {
    usersPage: UsersPageType & UsersStateType
    changeUsersList: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

export const UsersFC = (props: UsersFCPropsType) => {

    const pagesCount = props.usersPage.totalCount / props.usersPage.pageSize;

    const pages = Array.from({length: Math.ceil(pagesCount)}, (v, k) => k + 1);

    return <>
        <div>
            {pages.map(p => {
                return <span className={props.usersPage.currentPage === p ? s.selectedPage : ""}
                             key={pages.indexOf(p)}
                             onClick={() => props.changeUsersList(p)}>{p} </span>
            })}
        </div>
        <div>
            {
                props.usersPage.users.map((u: UserType) => <div key={u.id} className={s.userContainer}>
                        <div className={s.avatarContainer}>
                            <div className={s.avatar}>
                                <NavLink to={"/profile/" + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : avacat} alt={"avatar"}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.usersPage.followingInProgress.some(id => id === u.id)}
                                              onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                    : <button disabled={props.usersPage.followingInProgress.some(id => id === u.id)}
                                              onClick={() => {props.follow(u.id)}}>Follow</button>}
                            </div>
                        </div>
                        <div className={s.descriptionContainer}>
                            <div className={s.name}>
                                <div>
                                    {u.name}
                                </div>
                                <div>
                                    {u.status}
                                </div>
                            </div>
                            <div className={s.location}>
                                <div className={s.location_country}>
                                    {"u.location.country"}
                                </div>
                                <div className={s.location_city}>
                                    {"u.location.city"}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </>
}