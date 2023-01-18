import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer, {messagesReducerDispatchActionType} from "./messages-reducer";
import profileReducer, {profileReducerDispatchActionType} from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {usersReducerDispatchActionType} from "./users-reducer";
import authReducer, {setAuthUserDataAT} from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk"

const reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type RootStateType = ReturnType<typeof store.getState>
type ActionsType =
    profileReducerDispatchActionType
    | messagesReducerDispatchActionType
    | setAuthUserDataAT
    | usersReducerDispatchActionType

export type AppDispatchType = ThunkDispatch<RootStateType, any, ActionsType>

export type ReduxDispatchType = typeof store.dispatch
