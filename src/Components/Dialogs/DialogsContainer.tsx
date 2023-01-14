import React from "react";
import {sendNewMessageBodyCreator, updateNewMessageTextCreator} from "../../redux/messages-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ReduxDispatchType, ReduxStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state: ReduxStateType) => {
    return {
        messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch: ReduxDispatchType) => {
    return {
        onNewMessageChange: (body: string) => {
            dispatch(updateNewMessageTextCreator(body))
        },
        addDialogMessage: () => {
            dispatch(sendNewMessageBodyCreator())
        }
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)