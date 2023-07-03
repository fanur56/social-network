import React from "react";
import styles from "./LoginInfo.module.scss";
import imgLogo from "../../../assets/images/logo.png";
import loginInfo from "../../../assets/images/loginInfo.png"

export const LoginInfo = () => {
    return <div className={styles.loginInfoComponent}>
        <div className={styles.titleBox}>
            <div className={styles.title}>
                <img
                    className={styles.logo}
                    alt={'Logo'}
                    src={imgLogo}
                />
                <h1 className={styles.h1}>Social network</h1>
            </div>
            <p className={styles.text}>
                An online platform that is used for communication, dating, creating social relationships between people
                who have similar interests or offline connections, as well as for entertainment (music, movies) and
                work.
            </p>
            <div className={`${styles.text} ${styles.textInfo}`}>
                <p>To log in get registered <a className={styles.a} href={'https://social-network.samuraijs.com/'}
                                               target={'_blank'}>here
                </a>
                </p>
                <p>or use common test account credentials:</p>
                <p>Email: <b>free@samuraijs.com</b></p>
                <p>Password: <b>free</b></p>
            </div>
        </div>
        <img
            className={styles.imgLogin}
            alt={'Logo'}
            src={loginInfo}
        />
    </div>
}