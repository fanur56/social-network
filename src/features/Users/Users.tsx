import React from "react";
import {UsersType} from "./users-reducer";
import {Pagination} from "common/components/Paginator/Paginator";
import {User} from "./User/User";
import styles from './Users.module.scss'

type UsersCompType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (el: number) => void
    onPageSize: (el: number) => void
    follow: (userID: number) => void
    usFollow: (userID: number) => void
    followingInProgress: number[]
}

export const Users = (props: UsersCompType) => {

    return (
        <div className={styles.usersComponent}>
            <Pagination
                page={props.currentPage}
                pageCount={props.pageSize}
                pageCountOptions={[25, 50, 100]}
                totalItemsCount={props.totalUsersCount}
                onPageCallBack={props.onPageChanged}
                onPageCountCallBack={props.onPageSize}
            />
            <div className={styles.usersBox}>
                {props.users.map(el => <User
                        key={el.id}
                        user={el}
                        follow={props.follow}
                        usFollow={props.usFollow}
                        followingInProgress={props.followingInProgress}
                    />
                )}
            </div>
        </div>
    )
}