import s from "./Dialogs.module.css"
import React from "react";
import {DialogMessage} from "./DialogItem/DialogsItem";
import {DialogItem} from "./DialogMessage/DialogMessage";
import {
    DialogDataType, DialogType,
    MessagesDataType
} from "../../redux/types";

type DialogsPropsType = {
    onNewMessageChange: (body: string) => void
    addDialogMessage: () => void
    messagesPage: DialogType
    isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addDialogMessage = () => {
        props.addDialogMessage()
    }

    const onNewMessageChange = () => {
        if (newMessageElement.current) {
            const body = newMessageElement.current.value
            props.onNewMessageChange(body)
        }
    }

    alert(props.isAuth)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.messagesPage.dialogData.map((dialog: DialogDataType) => <DialogItem name={dialog.name}
                                                                                           key={dialog.id}
                                                                                           id={dialog.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messagesPage.messagesData.map((message: MessagesDataType) => <DialogMessage
                    message={message.message}
                    key={message.id}/>)}
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