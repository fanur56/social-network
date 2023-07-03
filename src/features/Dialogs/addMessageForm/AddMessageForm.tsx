import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "common/components/formControls/FormsControls";
import styles from './AddMessageForm.module.scss'
import {SvgSelector} from "common/components/svgSelector/SvgSelector";

export type AddMessageFormType = {
    newMessageText: string
}

const AddMessageForm = (props: InjectedFormProps<AddMessageFormType>) => {
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <div className={styles.titleBox}>
                <Field
                    component={Textarea}
                    name={'newMessageText'}
                    placeholder={'Enter your message'}
                    validate={[]}
                />
            </div>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.settings}`}>
                    <SvgSelector svgName={"Messages"}/>
                    <span className={styles.span}>Message</span>
                </button>
            </div>
        </form>


    )
}

export const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'addMessageForm'})(AddMessageForm)