import React from "react";
import {MessagesDataType} from "../dialogs-reducer";
import styles from './Message.module.scss'
import imgAvatar from "../../../assets/images/usersImg.png";

export const Message = (props: MessagesDataType) => {
    return <div className={styles.messageComponent}>
        <div className={styles.messageBox}>
            <div className={styles.messageUser}>{props.message}</div>
            <img
                className={styles.imgAvatar}
                src={imgAvatar}
                alt={'imgAvatar'}
            />
        </div>
    </div>
}