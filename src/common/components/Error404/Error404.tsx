import React from "react";
import styles from "./Error404.module.scss"
import {SvgSelector} from "../svgSelector/SvgSelector";
import {NavLink} from "react-router-dom";

export const Error404 = () => {
    return <div className={styles.errorComponent}>
        <SvgSelector svgName={"404"}/>
        <h2 className={styles.title}>Page not found</h2>
        <div className={styles.button}>
            <NavLink to={'/profile'}>Back home</NavLink>
        </div>
    </div>
}