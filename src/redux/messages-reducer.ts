import {DialogType, DispatchActionType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./redux";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const messagesReducer = (state: DialogType, action: DispatchActionType) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessagesBody = action.body
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessagesBody
        state.messagesData.push({id: 4, message: body})
        state.newMessagesBody = ''
    }

    return state
}

export const sendNewMessageBodyCreator = (): SendMessageActionType => ({type: SEND_MESSAGE})

export const updateNewMessageTextCreator = (body: string): UpdateNewMessageBodyActionType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default messagesReducer