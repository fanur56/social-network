import {authAPI} from "../api/api";
import {ReduxDispatchType} from "./redux-store";

const SET_USER_DATA = "SET_USER_DATA";

export type AuthStateType = {
    data: {
        id: number | null,
        email: string | null,
        login: string | null
    },
    isAuth: boolean
}
export type setAuthUserDataAT = {
    type: "SET_USER_DATA",
    data: {
        id: number,
        email: string,
        login: string
    }
}

const initialState: AuthStateType = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false
}

const authReducer = (state = initialState, action: setAuthUserDataAT) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: {...action.data},
                isAuth: true
            }
        default:
            return state
    }

}

const setAuthUserDataAC = (id: number, email: string, login: string): setAuthUserDataAT => ({
    type: SET_USER_DATA,
    data: {
        id,
        email,
        login
    }
})

export const getAuthUserDataTC = () => {
    return (dispatch: ReduxDispatchType) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    const authUserData = response.data.data;
                    dispatch(setAuthUserDataAC(authUserData.id, authUserData.email, authUserData.login));
                }
            })
    }
}

export default authReducer;


