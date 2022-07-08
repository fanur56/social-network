
import React from "react";

export type DialogMessagePropsType = {
    message: string
}

export const DialogMessage: React.FC<DialogMessagePropsType> = (props:DialogMessagePropsType) => {
    return <div>{props.message}</div>
}
