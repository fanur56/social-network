import React from "react";
import {sendNewMessageBodyCreator, updateNewMessageTextCreator} from "../../redux/messages-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

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