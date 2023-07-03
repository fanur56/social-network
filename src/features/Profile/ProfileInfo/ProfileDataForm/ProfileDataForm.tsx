import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Checkbox, Input, Textarea} from "common/components/formControls/FormsControls";
import {ProfileType} from "../../profile-reducer";
import styles from "./ProfileDataForm.module.scss";
import {SvgSelector} from "common/components/svgSelector/SvgSelector";
import styleButton from "../ProfileInfo.module.scss"
import {RequestStatusType} from "app/app-reducer";

type ProfileDataFormPropsType = {
    profile: ProfileType | null
    statusApp: RequestStatusType
}

export const ProfileDataForm = (props: InjectedFormProps<ProfileType, ProfileDataFormPropsType> & ProfileDataFormPropsType) => {

    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <div className={`${styleButton.buttons} ${styles.buttons}`}>
                <button
                    className={`${styleButton.button} ${styleButton.followButton} ${styles.saveButton}`}
                    disabled={props.statusApp === "loading"}
                >
                    {props.statusApp === "loading" ?
                        <span className={styles.loader}></span>
                        :
                        <span>
                            <SvgSelector svgName={"Save"}/>
                            <span className={styleButton.span}>Save</span>
                        </span>
                    }

                </button>
            </div>
            {props.error &&
                <div className={`${styles.formSummeryError} ${styles.titleBox} ${styles.titleError}`}>
                    <span>{props.error}</span>
                </div>
            }
            <div className={`${styles.titleBox} ${styles.titleName}`}>
                <h3 className={styles.title}>Full name:</h3>
                <Field
                    name={'fullName'}
                    placeholder={'Full Name'}
                    component={Input}
                    type={'text'}
                    validate={[]}
                />
            </div>
            <div className={styles.titleBox}>
                <h3 className={styles.title}>About me:</h3>
                <Field
                    name={'aboutMe'}
                    placeholder={'About me'}
                    component={Textarea}
                    type={'text'}
                    validate={[]}
                />
            </div>
            <div className={styles.titleBox}>
                <h3 className={styles.title}>Looking for a job:</h3>
                <Field
                    name={'lookingForAJob'}
                    component={Checkbox}
                    text={'I am looking for a job'}
                    type={'checkbox'}
                    validate={[]}
                    hello={'hello text'}
                />
                <Field
                    name={'lookingForAJobDescription'}
                    placeholder={'My professional skills'}
                    component={Textarea}
                    type={'text'}
                    validate={[]}
                />
            </div>
            {props.profile && Object.keys(props.profile.contacts).map((key, index) => {
                return <div key={index} className={styles.titleBox}>
                    <h3 className={styles.title}>{key}:</h3>
                    <Field
                        name={'contacts.' + key}
                        placeholder={key}
                        component={Input}
                        type={'text'}
                        validate={[]}
                    />
                </div>
            })}
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm<ProfileType, ProfileDataFormPropsType>({form: 'profileData'})(ProfileDataForm)