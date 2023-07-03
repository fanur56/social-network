import React from "react";
import {addMessagesAC, DialogsPageType} from "./dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "app/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "common/hoc/withAuthRedirect";
import {AddMessageFormType} from "./addMessageForm/AddMessageForm";
import {reset} from "redux-form";

export type DialogsPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
    dialogsPage: DialogsPageType
}

type mapDispatchPropsType = {
    addMessages: (formData: AddMessageFormType) => void
    reset: () => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addMessages: (formData: AddMessageFormType) => dispatch(addMessagesAC(formData)),
        reset: () => dispatch(reset('addMessageForm')),
    }
}

const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

export default DialogsContainer
