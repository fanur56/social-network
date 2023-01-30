import s from "./Dialogs.module.css"
import React from "react";
import {DialogMessage} from "./DialogItem/DialogsItem";
import {DialogItem} from "./DialogMessage/DialogMessage";
import {Field, reduxForm} from "redux-form";

export type DialogType = {
    dialogData: Array<DialogDataType>
    messagesData: Array<MessagesDataType>
    newMessagesBody: string
}

export type DialogDataType = {
    id: number
    name: string
}

export type MessagesDataType = {
    id: number
    message: string
}

export type DialogsPropsType = {
    onNewMessageChange: (body: string) => void
    addDialogMessage: (newMessageBody: any) => void
    messagesPage: DialogType
    isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {
    const AddNewMessage = (values: any) => {
        props.addDialogMessage(values.newMessageBody)
    }

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
            <AddMessageFormRedux onSubmit={AddNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props: any) => {
    return <form onSubmit={props.handleSubmit} action="">
        <div>
            <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"}/>
            <button>Add message</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)