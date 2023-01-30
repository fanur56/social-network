import {DialogType} from "../Components/Dialogs/Dialogs";

const SEND_MESSAGE = 'SEND-MESSAGE'


type UpdateNewMessageBodyAT = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

type SendMessageAT = {
    type: 'SEND-MESSAGE',
    newMessageBody: string
}

export type messagesReducerDispatchActionType = UpdateNewMessageBodyAT | SendMessageAT

const initialState: DialogType = {
    dialogData: [
        {id: 1, name: "Oleg"},
        {id: 2, name: "Ola"},
        {id: 3, name: "Sergey"},
        {id: 4, name: "Kent"},
        {id: 5, name: "Garry"},
        {id: 6, name: "Kenta"}
    ],
    messagesData: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I am ok!"},
    ],
    newMessagesBody: ''
}

const messagesReducer = (state = initialState, action: messagesReducerDispatchActionType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {
                    id: state.messagesData.length + 1,
                    message: action.newMessageBody
                }]
            }
        default:
            return state
    }
}

export const sendNewMessageBodyCreator = (newMessageBody: string): SendMessageAT => ({type: SEND_MESSAGE, newMessageBody})

export default messagesReducer;
