import {v1} from "uuid";
import {AddMessageFormType} from "./addMessageForm/AddMessageForm";

const initialState = {
    dialogsData: [
        {id: v1(), name: 'Samurai Dimych'},
        {id: v1(), name: 'Alexander Khodaryonok'},
        {id: v1(), name: 'Scarle Jones1337'},
        {id: v1(), name: 'Jak Zigil`man'},
        {id: v1(), name: 'Lilian Burdianov'},
        {id: v1(), name: 'Ignios Tyumen'},
        {id: v1(), name: 'Natalie Danilchenkofff'},
        {id: v1(), name: 'Anton Ovcharenko'},
        {id: v1(), name: 'Aleks Joker'},
        {id: v1(), name: 'Aleksandr Svetlov'},
        {id: v1(), name: 'Sivakov Igor'},
        {id: v1(), name: 'Sasha Zaitsau'},
    ] as Array<DialogsDataType>,
    messagesData: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Thanks, I\'m trying hard to make the social network better.'},
    ] as Array<MessagesDataType>,
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionType): DialogsPageType => {
    switch (action.type) {
        case 'DIALOGS/ADD-MESSAGE':
            return {
                ...state,
                messagesData: [...state.messagesData, {id: v1(), message: action.formData.newMessageText}]
            };
        default :
            return state;
    }
}

// actions
export const addMessagesAC = (formData: AddMessageFormType) => {
    return {type: 'DIALOGS/ADD-MESSAGE', formData} as const
}

//types
export type DialogsDataType = {
    id: string,
    name: string
}

export type MessagesDataType = {
    id: string,
    message: string
}

export type DialogsPageType = typeof initialState

type DialogsActionType = ReturnType<typeof addMessagesAC>