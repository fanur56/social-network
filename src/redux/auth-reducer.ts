import {
    DispatchActionType,
    FollowAT,
    SetCurrentPageAT, SetTotalUsersCountAT,
    SetUsersAT, ToggleIsFetchingAT,
    UnfollowAT,
    UserType
} from "./types";

const SET_USER_DATA = "SET_USER_DATA";

export type AuthStateType = {
    userId: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type setAuthUserDataAT = {
    type: "SET_USER_DATA",
    data: {
        userID: string,
        email: string,
        login: string
    }
}

const initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: setAuthUserDataAT) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }

}

export const setAuthUserDataAC = (userID: string, email: string, login: string): setAuthUserDataAT => ({
    type: SET_USER_DATA,
    data: {
        userID,
        email,
        login
    }
})

export default authReducer;