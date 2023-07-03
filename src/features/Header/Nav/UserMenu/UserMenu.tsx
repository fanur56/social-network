import React, {useState} from "react";
import styles from "./UserMenu.module.scss"
import {RadioComponent} from "common/components/RadioComponent/RadioComponent";

type UserMenuPropsType = {
    logout: () => void
    visibilityCallBack: () => void
}

export const UserMenu = (props: UserMenuPropsType) => {

    const [valueRadio, setValueRadio] = useState<'one' | 'two'>("one")

    const logoutHandler = async () => {
        await props.logout()
        props.visibilityCallBack()
    }

    return (
        <div className={styles.UserMenuBox}>
            <h3 className={styles.title}>Online Status</h3>
            <div className={styles.onlineStatus}>
                <div style={{marginBottom: '15px'}}>
                    <RadioComponent onClick={() => setValueRadio('one')} checked={valueRadio === 'one'}/>
                    <span>Online</span>
                </div>
                <div>
                    <RadioComponent onClick={() => setValueRadio('two')} checked={valueRadio === 'two'}/>
                    <span>Offline</span>
                </div>
            </div>
            <h3 className={styles.title}>Setting</h3>
            <div className={styles.settingBox}>
                <span>Account Setting</span>
                <span>Privacy</span>
                <span>Faqs</span>
                <span>Terms & Conditions</span>
            </div>
            <h3 className={styles.logoutButton}>
                <span onClick={logoutHandler}>Logout</span>
            </h3>
        </div>
    )
}