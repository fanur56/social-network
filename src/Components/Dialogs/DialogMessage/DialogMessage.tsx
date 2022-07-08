import React from "react";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem = (props:DialogItemPropsType) => {
    return <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
}
