import s from "./Dialogs.module.css"
import React from "react";
import {DialogMessage} from "./DialogMessages/DialogsItem";
import {DialogItem} from "./DialogItem/DialogsItem";
import {DialogDataType, MessagesDataType} from "../../redux/redux";

type DialogsPropsType = {
    dialogData: Array<DialogDataType>
    messagesData:Array<MessagesDataType>
}

export const Dialogs = (props:DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogData.map((dialog:DialogDataType) => <DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messagesData.map((message:MessagesDataType) => <DialogMessage message={message.message}/>)}
            </div>
        </div>
    )
}