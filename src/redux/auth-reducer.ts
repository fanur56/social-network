import {setAuthUserDataAT} from "./types";
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
            debugger
            return {
                ...state,
                data: {...action.data},
                isAuth: true
            }
        default:
            return state
    }

}

export const setAuthUserDataAC = (userID: number, email: string, login: string): setAuthUserDataAT => ({
    type: SET_USER_DATA,
    data: {
        id: userID,
        email,
        login
    }
})

export const getAuthUserDataThunkCreator = () => (dispatch: ReduxDispatchType) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data;
                dispatch(setAuthUserDataAC(id, email, login));
            }
        })
}

export default authReducer;