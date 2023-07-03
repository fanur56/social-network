import {addMessagesAC, DialogsPageType, dialogsReducer} from "./dialogs-reducer";
import {v1} from "uuid";

let state: DialogsPageType

beforeEach (()=> {
    state = {
        dialogsData: [
            {id: v1(), name: 'Vova'},
            {id: v1(), name: 'Alex'},
            {id: v1(), name: 'Dima'},
            {id: v1(), name: 'Vasa'},
            {id: v1(), name: 'Masha'},
        ],
        messagesData: [
            {id: v1(), message: 'Hello Word!'},
            {id: v1(), message: 'I am a computer programmer'},
            {id: v1(), message: 'Yo'},
        ]
    }
})

test('add message', () => {
    const dialogsReducerTest = dialogsReducer(state, addMessagesAC({newMessageText: 'Hello'}))
    expect(dialogsReducerTest.messagesData.length).toBe(4)
    expect(dialogsReducerTest.messagesData[3].message).toBe('Hello')
})