import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    name: string
    id: number
}

type DialogMessagePropsType = {
    message: string
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
}

export const DialogMessage: React.FC<DialogMessagePropsType> = (props) => {
    return <div>{props.message}</div>
}

export const Dialogs = (props: string) => {
    let dialogData = [
        {id: 1, name: "Oleg"},
        {id: 2, name: "Olya"},
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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogData.map (el => <DialogItem name={el.name} id={el.id} />)}
            </div>
            <div className={s.messages}>
                {messagesData.map(el => <DialogMessage message={el.message}/>)}
            </div>
        </div>
    )
}