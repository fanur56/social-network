import React from "react";
import styles from './FormsControls.module.scss'

export const Textarea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <div>
                <textarea {...props} {...input}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <div>
                <input {...props} {...input}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Checkbox = ({input, meta, text, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <div className={styles.checkboxBox}>
                <input className={styles.checkbox} id={'rememberMe'} {...props} {...input}/>
                <label htmlFor={'rememberMe'}>{text}</label>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}