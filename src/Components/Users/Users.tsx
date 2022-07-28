import React from "react";
import {UsersStateType, UserType} from "../../redux/types";
import s from "./Users.module.css"

type UsersPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    usersPage: UsersStateType
}

export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photo: "https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg",
                followed: true,
                fullName: "Fanur",
                status: "I am a samurai",
                location: {
                    country: "Russia",
                    city: "Saint-Petersburg"
                }
            },
            {
                id: 2,
                photo: "https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg",
                followed: false,
                fullName: "Dmitriy",
                status: "I am a shogun",
                location: {
                    country: "Belarus",
                    city: "Minsk"
                }
            },
            {
                id: 3,
                photo: "https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg",
                followed: false,
                fullName: "Ilya",
                status: "I am a emperor",
                location: {
                    country: "Russia",
                    city: "Moscow"
                }
            }
        ])
    }
    return (
        <div>
            {
                props.usersPage.users.map((u: UserType) => <div key={u.id} className={s.userContainer}>
                        <div className={s.avatarContainer}>
                            <div className={s.avatar}>
                                <img src={u.photo} alt={"avatar"}/>
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
                                    {u.fullName}
                                </div>
                                <div>
                                    {u.status}
                                </div>
                            </div>
                            <div className={s.location}>
                                <div className={s.location_country}>
                                    {u.location.country}
                                </div>
                                <div className={s.location_city}>
                                    {u.location.city}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}