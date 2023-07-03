import {Dispatch} from "redux";
import {setAuthUserDateTC} from "features/login/auth-reducer";

const initialState: AppReducerType = {
    initialized: false,
    status: 'idle',
}

export const AppReducer = (state: AppReducerType = initialState, action: AppActionType): AppReducerType => {
    switch (action.type) {
        case "APP/SET-INITIALIZED": {
            return {...state, initialized: true}
        }
        case "APP/SET-STATUS": {
            return {...state, status: action.status}
        }
        default :
            return state;

    }
}

//action
export const setInitializedAC = () => ({type: 'APP/SET-INITIALIZED'} as const)

export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)

//thunks
export const setInitializedAppTC = (): any => (dispatch: Dispatch) => {
    const promise = dispatch(setAuthUserDateTC())
    promise.then(() => {
        dispatch(setInitializedAC())
    })

}

//type
export type AppReducerType = {
    initialized: boolean
    status: RequestStatusType,
}

export type RequestStatusType = 'idle' | 'loading'

type AppActionType =
    | ReturnType<typeof setInitializedAC>
    | ReturnType<typeof setAppStatusAC>



