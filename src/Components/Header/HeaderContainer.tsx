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

export type AuthMapStateToPropsType = ReturnType<typeof mapStateToProps>
export type AuthPropsType = AuthMapStateToPropsType & AuthDispatchToPropsType
export type AuthDispatchToPropsType = {
    getAuthUserData: ()=>void
}

export default connect(mapStateToProps,
    {getAuthUserData: getAuthUserDataThunkCreator})(HeaderContainer);
