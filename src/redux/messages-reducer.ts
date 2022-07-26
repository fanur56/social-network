import {DialogType, DispatchActionType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./store";

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
    const stateCopy = {
        ...state,
        messagesData: [...state.messagesData]
    }
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessagesBody = action.body
            return stateCopy;
        case SEND_MESSAGE:
            let body = state.newMessagesBody
            stateCopy.messagesData.push({id: 4, message: body})
            stateCopy.newMessagesBody = ''
            return stateCopy;
        default:
            return stateCopy
    }
}

export const sendNewMessageBodyCreator = (): SendMessageActionType => ({type: SEND_MESSAGE})

export const updateNewMessageTextCreator = (body: string): UpdateNewMessageBodyActionType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default messagesReducer