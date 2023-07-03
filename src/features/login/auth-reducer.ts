import {Dispatch} from "redux";
import {authAPI, securityAPI} from "api/api";
import {LoginFormType} from "./LoginReduxForm/LoginReduxForm";
import {stopSubmit} from "redux-form";
import {setAppStatusAC} from "app/app-reducer";

const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    avatarUrl: '',
    isAuth: false,
    captchaUrl: ''
}

export const authReducer = (state: AuthType = initialState, action: UsersActionType): AuthType => {
    switch (action.type) {
        case "AUTH/SET-USER-DATE": {
            return {
                ...state,
                ...action.date
            }
        }
        case "AUTH/GET-CAPTCHA": {
            return {...state, captchaUrl: action.captchaUrl}
        }
        case "AUTH/SET-AVATAR": {
            return {...state, avatarUrl: action.avatarUrl}
        }
        default :
            return state;

    }
}

// actions
export const setAuthUserDateAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'AUTH/SET-USER-DATE',
    date: {id, email, login, isAuth}
} as const)

export const getCaptchaAC = (captchaUrl: string) => ({type: 'AUTH/GET-CAPTCHA', captchaUrl} as const)

export const setAvatarAC = (avatarUrl: string) => ({type: 'AUTH/SET-AVATAR', avatarUrl} as const)

// thunks
export const setAuthUserDateTC = (): any => (dispatch: Dispatch<UsersActionType>) => {
    return authAPI.getAuth()
        .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserDateAC(res.data.data.id, res.data.data.email, res.data.data.login, true))
                }
            }
        )
}

export const loginTC = (formData: LoginFormType): any => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        const res = await authAPI.login(formData)
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserDateTC())
        } else {
            if (res.data.resultCode === 10) {
                dispatch(getCaptchaTC())
            }
            const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
            const action: any = stopSubmit('login', {_error: message})
            dispatch(action)
        }
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}

export const logoutTC = (): any => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        const res = await authAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserDateAC(null, null, null, false))
            dispatch(getCaptchaAC(''))
            dispatch(setAvatarAC(''))
        }
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}

export const getCaptchaTC = (): any => async (dispatch: Dispatch<UsersActionType>) => {
    try {
        const res = await securityAPI.getCaptcha()
        dispatch(getCaptchaAC(res.data.url))
    } catch (err) {
        console.log(err)
    }
}

// types
export type AuthType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: string
    avatarUrl: string
}

type UsersActionType =
    | ReturnType<typeof setAuthUserDateAC>
    | ReturnType<typeof getCaptchaAC>
    | ReturnType<typeof setAvatarAC>