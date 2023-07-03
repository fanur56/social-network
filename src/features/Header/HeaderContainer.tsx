import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "app/redux-store";
import {Dispatch} from "redux";
import {logoutTC, setAuthUserDateTC} from "../login/auth-reducer";
import {RequestStatusType} from "app/app-reducer";

export class HeaderAPI extends React.Component<ProfilePropsType> {

    componentDidMount() {
        this.props.setAuthUserDateTC()
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
            logout={this.props.logout}
            status={this.props.status}
        />
    }
}

type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsTye

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
    status: RequestStatusType
}

type mapDispatchToPropsTye = {
    setAuthUserDateTC: () => void
    logout: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        status: state.app.status
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsTye => {
    return {
        setAuthUserDateTC: () => dispatch(setAuthUserDateTC()),
        logout: () => dispatch(logoutTC())
    }
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPI)

