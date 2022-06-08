import React from "react";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
}
