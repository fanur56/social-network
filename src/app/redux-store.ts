import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import {profileReducer} from "features/Profile/profile-reducer";
import {dialogsReducer} from "features/Dialogs/dialogs-reducer";
import {usersReducer} from "features/Users/users-reducer";
import {authReducer} from "features/login/auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from "redux-form";
import {AppReducer} from "./app-reducer";

const rootReducer = combineReducers({
    app: AppReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export type AppStateType = ReturnType<typeof rootReducer>