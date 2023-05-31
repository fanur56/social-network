import {authAPI} from "api/api";
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
  payload: {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
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

export const authReducer = (state = initialState, action: setAuthUserDataAT) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        data: {...action.payload},
        isAuth: true
      }
    default:
      return state
  }

}

const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataAT => ({
  type: SET_USER_DATA,
  payload: {
    id,
    email,
    login,
    isAuth
  }
})

export const getAuthUserDataTC = () => (dispatch: ReduxDispatchType) => {
  authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        const authUserData = response.data.data;
        dispatch(setAuthUserDataAC(authUserData.id, authUserData.email, authUserData.login, true));
      }
    })
}

export const login = (login: string, password: string, rememberMe: boolean) => (dispatch: ReduxDispatchType) => {
  authAPI.login(login, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
      }
    })
}

export const logout = () => (dispatch: ReduxDispatchType) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
      }
    })
}


