import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    name: string
    id: string
}

type DialogMessagePropsType = {
    message:string
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
}

export const DialogMessage: React.FC<DialogMessagePropsType> = (props) => {
    return <div>{props.message}</div>
}

export const Dialogs = (props: string) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Oleg" id="1"/>
                <DialogItem name="Olya" id="2"/>
                <DialogItem name="Sergey" id="3"/>
                <DialogItem name="Kent" id="4"/>
                <DialogItem name="Garry" id="5"/>
                <DialogItem name="Kenta" id="6"/>
            </div>
            <div className={s.messages}>
                <DialogMessage message={"Hello"}/>
                <DialogMessage message={"How are you?"}/>
                <DialogMessage message={"I am ok."}/>
            </div>
        </div>
    )
}