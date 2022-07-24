import React from "react";
import {sendNewMessageBodyCreator, updateNewMessageTextCreator} from "../../redux/messages-reducer";
import {Dialogs} from "./Dialogs";
import {ReduxStoreType} from "../../redux/redux-store";

type DialogsPropsType = {
    store: ReduxStoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {
    const state = props.store.getState()
    const sendNewMessageBody = () => {
        props.store.dispatch(sendNewMessageBodyCreator())
    }

    const updateNewMessageText = (body: string) => {
        props.store.dispatch(updateNewMessageTextCreator(body))
    }

    return <Dialogs onNewMessageChange={updateNewMessageText}
                    addDialogMessage={sendNewMessageBody}
                    messagesPage={state.messagesPage}/>
}