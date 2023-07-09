import {SvgSelector} from "../svgSelector/SvgSelector";
import React from "react";

type RepairComponentPropsType = {
    className?: string
    text: string
}

export const RepairComponent = (props: RepairComponentPropsType) => {
    return <div style={{textAlign: 'center'}} className={props.className}>
        <SvgSelector svgName={"Repair"}/>
        <p>
            {props.text}
        </p>
    </div>
}