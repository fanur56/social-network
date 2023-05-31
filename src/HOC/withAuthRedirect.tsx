import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootStateType} from "redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect <T>(Component: ComponentType<T>)  {
    class RedirectComponent extends React.Component<MapStatePropsType> {
        render() {
            let {isAuth, ...restProps} = this.props

            if (!this.props.isAuth) return <Redirect to={"/login"}/>
            return <Component {...restProps as T}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
}