import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Checkbox, Input} from "common/components/formControls/FormsControls";
import {requiredField} from "common/utils/validators/validators";
import formControlsStyles from '../../../common/components/formControls/FormsControls.module.scss'
import styles from "./LoginReduxForm.module.scss"
import {SvgSelector} from "common/components/svgSelector/SvgSelector";
import {NavLink} from "react-router-dom";
import {RequestStatusType} from "app/app-reducer";

export type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

type LoginFormPropsType = {
    captchaUrl: string
    status: RequestStatusType
}

const LoginForm = (props: InjectedFormProps<LoginFormType, LoginFormPropsType> & LoginFormPropsType) => {

    const onClickHandler = () => {
        alert('This page is under development')
    }

    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <h3 className={styles.h3}>Sign in</h3>
            <div className={styles.formInput}>
                <div className={styles.svgIcon}>
                    <SvgSelector svgName={"User"}/>
                </div>
                <Field
                    name={'email'}
                    placeholder={'Email'}
                    component={Input}
                    validate={[requiredField]}
                    disabled={props.status === 'loading'}
                />
            </div>
            <div className={styles.formInput}>
                <div className={styles.svgIcon}>
                    <SvgSelector svgName={"Password"}/>
                </div>
                <Field
                    name={'password'}
                    placeholder={'Password'}
                    component={Input}
                    type={'password'}
                    validate={[requiredField]}
                    disabled={props.status === 'loading'}
                />
            </div>
            <div className={styles.formCheckbox}>
                <div style={{marginRight: '25px'}}>
                    <Field
                        name={'rememberMe'}
                        type={"checkbox"}
                        component={Checkbox}
                        text={'Remember me'}
                        disabled={props.status === 'loading'}
                    />
                </div>
                <NavLink className={styles.a} onClick={onClickHandler} to={'/login'}>Forgot Password?</NavLink>
            </div>
            {props.captchaUrl && <img src={props.captchaUrl} alt={'captchaUrl'}/>}
            {props.captchaUrl && <div className={`${styles.formInput} ${styles.captcha}`}>
                <div className={styles.svgIcon}>
                    <SvgSelector svgName={"Captcha"}/>
                </div>
                <Field
                    name={'captcha'}
                    placeholder={'Captcha'}
                    component={Input}
                    type={'text'}
                    validate={[requiredField]}
                    disabled={props.status === 'loading'}
                />
            </div>}
            <div className={styles.error}>
                {props.error && <div className={formControlsStyles.formSummeryError}><b>{props.error}</b></div>}
            </div>
            <div>
                <button
                    className={styles.formButton}
                    disabled={props.status === 'loading'}
                >
                    {props.status === 'loading' ? <span className={styles.loader}></span> : 'Sign in'}
                </button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<LoginFormType, LoginFormPropsType>({form: 'login'})(LoginForm)