import s from "./Dialogs.module.css"
import React from "react";
import {DialogMessage} from "./DialogItem/DialogsItem";
import {DialogItem} from "./DialogMessage/DialogMessage";
import {
    DialogDataType, DialogType,
    MessagesDataType
} from "../../redux/store";
import {sendNewMessageBodyCreator, updateNewMessageTextCreator} from "../../redux/messages-reducer";

type DialogsPropsType = {
    onNewMessageChange: (body: string) => void
    addDialogMessage: () => void
    messagesPage: DialogType
}

export const Dialogs = (props: DialogsPropsType) => {

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addDialogMessage = () => {
        sendNewMessageBodyCreator()
    }

    const onNewMessageChange = () => {
        if (newMessageElement.current) {
            let body = newMessageElement.current.value
            updateNewMessageTextCreator(body)
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.messagesPage.dialogData.map((dialog: DialogDataType) => <DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messagesPage.messagesData.map((message: MessagesDataType) => <DialogMessage message={message.message}/>)}
            </div>
            <div>
                <textarea ref={newMessageElement}
                          value={props.messagesPage.newMessagesBody}
                          placeholder={'Enter your message'}
                          onChange={onNewMessageChange}></textarea>
                <button onClick={addDialogMessage}>Add message</button>
            </div>
        </div>
    )
}