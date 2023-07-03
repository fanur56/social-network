import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "common/components/formControls/FormsControls";
import styles from "./AddPostForm.module.scss";
import {SvgSelector} from "common/components/svgSelector/SvgSelector";

export type AddPostFormType = {
    newPostText: string
}

const AddPostForm = (props: InjectedFormProps<AddPostFormType>) => {
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <div className={styles.titleBox}>
                <Field
                    name={'newPostText'}
                    component={Textarea}
                    placeholder={'Enter your message'}
                    validate={[]}
                />
            </div>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.settings}`}>
                    <SvgSelector svgName={"Post"}/>
                    <span className={styles.span}>Add post</span>
                </button>
            </div>
        </form>
    )
}

export const AddPostFormRedux = reduxForm<AddPostFormType>({form: 'addPostForm'})(AddPostForm)