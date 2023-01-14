import {DispatchActionType} from "./profile-reducer";

const initialState: SidebarType = {}

const sidebarReducer = (state: SidebarType = initialState, action: DispatchActionType) => {
    return state
}

export default sidebarReducer

export type SidebarType = {}