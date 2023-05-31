import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "Components/common/FormControls/FormControls";
import {requiredField} from "utils/validators/validators";
import {connect} from "react-redux";
import {login} from "redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootStateType} from "redux/redux-store";

type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
  return <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type={"text"}
               placeholder={"Email"}
               validate={[requiredField]}
               name={"email"}
               component={Input}/>
      </div>
      <div>
        <Field type="password"
               validate={[requiredField]}
               placeholder={"Password"}
               name={"password"}
               component={Input}/>
      </div>
      <div>
        <Field type="checkbox" name={"rememberMe"} component={Input}/> Remember me
      </div>
      <div>
        <button type={"submit"}>Login</button>
      </div>
    </form>
  </div>
}

const LoginReduxForm = reduxForm<FormDataType>({
  form: "login"
})(LoginForm)

type LoginPropsType = {
  login: (login: string, password: string, rememberMe: boolean) => void
  isAuth: boolean
}

const Login = (props: LoginPropsType) => {
  const onSubmit = (formData: FormDataType) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"}/>
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)