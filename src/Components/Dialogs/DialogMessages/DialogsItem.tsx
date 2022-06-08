import s from "./../Dialogs.module.css"
import React from "react";

export type DialogMessagePropsType = {
    message: string
}

export const DialogMessage: React.FC<DialogMessagePropsType> = (props) => {
    return <div>{props.message}</div>
}
