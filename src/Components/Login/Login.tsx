import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "Components/common/FormControls/FormControls";
import {requiredField} from "utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: string
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       validate={[requiredField]}
                       name={"login"}
                       component={Input}/>
            </div>
            <div>
                <Field type="text"
                       validate={[requiredField]}
                       placeholder={"Password"}
                       name={"password"}
                       component={Input}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={Input}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}