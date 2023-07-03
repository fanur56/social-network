import React from "react";
import styles from './DialogItem.module.scss'
import {NavLink} from "react-router-dom";
import {DialogsDataType} from "../dialogs-reducer";
import imgAvatar from '../../../assets/images/usersImg.png'

export const DialogItem = (props: DialogsDataType) => {
    return <div className={styles.dialog}>
        <img className={styles.imgAvatar} src={imgAvatar} alt={'imgAvatar'}/>
        <NavLink
            to={'/messages/' + props.id}
            className={styles.nav}
            activeClassName={styles.activeLink}
        >
            {props.name}
        </NavLink>
    </div>
}