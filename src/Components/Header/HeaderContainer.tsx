import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {ReduxDispatchType, ReduxStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me",
            {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: ReduxStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

const mapDispatchToProps = (dispatch: ReduxDispatchType) => ({
    setAuthUserData: setAuthUserDataAC
})

type AuthMapStateToPropsType = ReturnType<typeof mapStateToProps>
type AuthMapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
export type AuthPropsType = AuthMapStateToPropsType & AuthMapDispatchToPropsType

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
