import React from "react";
import {UsersStateType, UserType} from "../../redux/types";
import s from "./Users.module.css"
import axios from "axios";
import avacat from "../../assets/images/avacat.jpg"

type UsersPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    usersPage: UsersStateType
}

export const Users = (props: UsersPropsType) => {

    const getUsers =()=>{
    if (props.usersPage.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(r => {
            props.setUsers(r.data.items);
        });
    }

    }
    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.usersPage.users.map((u: UserType) => <div key={u.id} className={s.userContainer}>
                        <div className={s.avatarContainer}>
                            <div className={s.avatar}>
                                <img src={u.photos.small != null ? u.photos.small : avacat} alt={"avatar"}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}>Follow</button>}
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
    )
}