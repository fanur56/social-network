import {combineReducers, createStore} from "redux";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

const reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = createStore(reducers);

export type ReduxStateType = ReturnType<typeof store.getState>
export type ReduxDispatchType = typeof store.dispatch
