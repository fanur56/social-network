import styles from "./FormControls.module.css"

const FormControl = (props: any) => {
  const hasError = props.meta.touched && props.meta.error
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        {props.children}
      </div>
      {hasError && <span>{props.meta.error}</span>}
    </div>
  )
}

export const TextArea = (props: any) => {
  return <FormControl {...props}>
    <textarea {...props.input} {...props}/>
  </FormControl>
}

export const Input = (props: any) => {
  return <FormControl {...props}>
    <input {...props.input} {...props}/>
  </FormControl>
}