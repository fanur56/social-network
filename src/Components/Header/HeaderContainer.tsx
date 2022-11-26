import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator} from "../../redux/auth-reducer";
import {ReduxStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} />
    }
}

const mapStateToProps = (state: ReduxStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
};

const mapDispatchToProps = () => ({
    getAuthUserData: getAuthUserDataThunkCreator
})

export type AuthMapStateToPropsType = ReturnType<typeof mapStateToProps>
type AuthMapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
export type AuthPropsType = AuthMapStateToPropsType & AuthMapDispatchToPropsType

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
