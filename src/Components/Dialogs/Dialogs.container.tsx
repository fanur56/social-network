import React from "react";
import {sendNewMessageBodyCreator, updateNewMessageTextCreator} from "../../redux/messages-reducer";
import {Dialogs} from "./Dialogs";
import {ReduxStoreType} from "../../redux/redux-store";
import {connect} from "react-redux";

/*type DialogsPropsType = {
    store: ReduxStoreType
}

export const DialogsContainer = () => {
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
}*/

const mapStateToProps = (state: any) => {
    return {
        messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onNewMessageChange: (body: string) => {
            dispatch(updateNewMessageTextCreator(body))
        },
        addDialogMessage: () => {
            dispatch(sendNewMessageBodyCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)