import s from "./Dialogs.module.css"
import React from "react";
import {DialogMessage} from "./DialogItem/DialogsItem";
import {DialogItem} from "./DialogMessage/DialogMessage";
import {
    DialogDataType,
    DispatchActionType,
    MessagesDataType} from "../../redux/redux";
import {sendNewMessageBodyCreator, updateNewMessageTextCreator} from "../../redux/messages-reducer";

type DialogsPropsType = {
    dialogData: Array<DialogDataType>
    messagesData: Array<MessagesDataType>
    newMessagesBody:string
    dispatch: (action: DispatchActionType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addDialogMessage = () => {
        if (newMessageElement.current) {
            props.dispatch(sendNewMessageBodyCreator())
        }
    }

    const onNewMessageChange = () => {
        if (newMessageElement.current) {
            let body = newMessageElement.current.value
            props.dispatch(updateNewMessageTextCreator(body))
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogData.map((dialog: DialogDataType) => <DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messagesData.map((message: MessagesDataType) => <DialogMessage message={message.message}/>)}
            </div>
            <div>
                <textarea ref={newMessageElement}
                          value={props.newMessagesBody}
                          placeholder={'Enter your message'}
                          onChange={onNewMessageChange}></textarea>
                <button onClick={addDialogMessage}>Add message</button>
            </div>
        </div>
    )
}