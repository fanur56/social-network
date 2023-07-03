import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "app/redux-store";

type mapStateToPropsRedirectType = {
    isAuth: boolean
}

const mapStateToPropsRedirect = (state: AppStateType): mapStateToPropsRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsRedirectType) => {
        let {isAuth, ...restProps} = props

            if (!isAuth) return <Redirect to={'/login'}/>
            else return <Component {...restProps as T} />
    }

    return connect(mapStateToPropsRedirect)(RedirectComponent)

}
