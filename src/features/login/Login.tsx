import React, {useState} from "react";
import {LoginFormType, LoginReduxForm} from "./LoginReduxForm/LoginReduxForm";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {loginTC} from "./auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../app/redux-store";
import styles from "./Login.module.scss"
import {LoginInfo} from "./LoginInfo/LoginInfo";
import {Registration} from "./Registration/Registration";
import {RequestStatusType} from "../../app/app-reducer";

const Login = (props: LoginPropsType) => {

    const [visibility, setVisibility] = useState<boolean>(true)

    const onClickOnHandler = () => {
        setVisibility(true)
    }

    const onClickOffHandler = () => {
        setVisibility(false)
    }

    const onSubmitHandler = (formData: LoginFormType) => {
        props.login(formData)
    }

    const finalOneButtonStyles = `${styles.oneButton} ${visibility ? styles.active : ''}`
    const finalTwoButtonStyles = `${styles.twoButton} ${!visibility ? styles.active : ''}`

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div className={styles.loginComponent}>
        <div className={styles.repair}>
            <span>The project is under development. Some features may be unavailable.<br/>
                <a
                    className={styles.a}
                    href={'https://github.com/Traihel/Social-network-TS'}
                    target="_blank">Read more on GitHub</a>
            </span>
        </div>
        <div className={styles.loginBox}>
            <div className={styles.loginInfo}>
                <div className={styles.oneCircle}></div>
                <div className={styles.twoCircle}></div>
                <LoginInfo/>
            </div>
            <div className={styles.loginForm}>
                <div className={styles.thirdCircle}></div>
                <div className={styles.fourthCircle}></div>
                <div className={styles.loginButtons}>
                    <button className={finalOneButtonStyles} onClick={onClickOnHandler}>Sign in</button>
                    <button className={finalTwoButtonStyles} onClick={onClickOffHandler}>Sign up</button>
                </div>
                {visibility ?
                    <LoginReduxForm
                        onSubmit={onSubmitHandler}
                        captchaUrl={props.captchaUrl}
                        status={props.status}
                    />
                    :
                    <Registration/>
                }
            </div>
        </div>
        <div className={styles.copyright}>
            <span>Copyright © 2022. All Rights Reserved.</span>
            <span>Developed by <a
                className={styles.a}
                href={'https://www.linkedin.com/in/vladimir-traihel/'}
                target="_blank">Traihel Vladimir</a>
            </span>
        </div>
    </div>
};

export type LoginPropsType = mapDispatchToPropsType & mapStatePropsType

type mapStatePropsType = {
    isAuth: boolean
    captchaUrl: string
    status: RequestStatusType
}

type mapDispatchToPropsType = {
    login: (formData: LoginFormType) => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
        status: state.app.status
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        login: (formData: LoginFormType) => dispatch(loginTC(formData))
    }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)