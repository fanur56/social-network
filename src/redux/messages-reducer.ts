import {DialogType, DispatchActionType, SendMessageAT, UpdateNewMessageBodyAT} from "./types";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

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

const messagesReducer = (state = initialState, action: DispatchActionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessagesBody: action.body
            }
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: state.messagesData.length+1, message: state.newMessagesBody}],
                newMessagesBody: ""
            }
        default:
            return state
    }
}

export const sendNewMessageBodyCreator = (): SendMessageAT => ({type: SEND_MESSAGE})

export const updateNewMessageTextCreator = (body: string): UpdateNewMessageBodyAT => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default messagesReducer;