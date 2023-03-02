import s from "./Dialogs.module.css"
import React from "react";
import {DialogMessage} from "./DialogItem/DialogsItem";
import {DialogItem} from "./DialogMessage/DialogMessage";
import {Field, FormSubmitHandler, InjectedFormProps, reduxForm} from "redux-form";

export type DialogType = {
    dialogData: Array<DialogDataType>
    messagesData: Array<MessagesDataType>
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
    addDialogMessage: (newMessageBody: string) => void
    messagesPage: DialogType
    isAuth: boolean
}

type FormDataType = {
    newMessageBody: string
}

export const Dialogs = (props: DialogsPropsType) => {
    const AddNewMessage = (values: FormDataType) => {
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

const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {
    return <form onSubmit={props.handleSubmit} action="">
        <div>
            <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"}/>
            <button>Add message</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)