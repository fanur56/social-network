import React from "react";
import {UsersPageType, UsersStateType, UserType} from "../../redux/types";
import s from "./Users.module.css"
import axios from "axios";
import avacat from "../../assets/images/avacat.jpg"
import {store} from "../../redux/redux-store";

type UsersPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    usersPage: UsersStateType & UsersPageType
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class User extends React.Component<UsersPropsType> {

    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }
    }

    changeUsersList = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        const pagesCount = this.props.usersPage.totalCount / this.props.usersPage.pageSize;
        const pages = Array.from({length: Math.ceil(pagesCount)}, (v, k) => k + 1);

        return (<>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.usersPage.currentPage === p ? s.selectedPage : ""}
                                     key={pages.indexOf(p)}
                                     onClick={() => this.changeUsersList(p)}>{p} </span>
                    })}

                </div>
                <div>
                    {
                        this.props.usersPage.users.map((u: UserType) => <div key={u.id} className={s.userContainer}>
                                <div className={s.avatarContainer}>
                                    <div className={s.avatar}>
                                        <img src={u.photos.small != null ? u.photos.small : avacat} alt={"avatar"}/>
                                    </div>
                                    <div>
                                        {u.followed
                                            ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                            : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
        )
    }

}

export default User;