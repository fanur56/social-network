import React from "react";
import {UsersStateType, UserType} from "../../redux/types";

type UsersPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    usersPage: UsersStateType
}

export const Users = (props: UsersPropsType) => {
    return (
        <div>
            {
                props.usersPage.users.map((u: UserType) => <div key={u.id}>
                        <div>
                            <div>
                                <img src={u.photo} alt={"avatar"}/>
                            </div>
                            <div>
                                <button>Follow</button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    {u.fullName}
                                </div>
                                <div>
                                    {u.status}
                                </div>
                            </div>
                            <div>
                                <div>
                                    {u.location.country}
                                </div>
                                <div>
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