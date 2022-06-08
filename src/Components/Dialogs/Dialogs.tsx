import s from "./Dialogs.module.css"
import React from "react";
import {DialogMessage, DialogMessagePropsType} from "./DialogMessages/DialogsItem";
import {DialogItem} from "./DialogItem/DialogsItem";

let dialogData = [
    {id: 1, name: "Oleg"},
    {id: 2, name: "Ola"},
    {id: 3, name: "Sergey"},
    {id: 4, name: "Kent"},
    {id: 5, name: "Garry"},
    {id: 6, name: "Kenta"}
]

let messagesData = [
    {message: "Hello"},
    {message: "How are you?"},
    {message: "I am ok."},
]

export const Dialogs:React.FC<DialogMessagePropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogData.map (dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
            </div>
            <div className={s.messages}>
                {messagesData.map(message => <DialogMessage message={message.message}/>)}
            </div>
        </div>
    )
}