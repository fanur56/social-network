import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataTC, logout} from "redux/auth-reducer";
import {RootStateType} from "redux/redux-store";


class HeaderContainer extends React.Component<AuthPropsType> {

  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state: RootStateType) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.data.login
  }
};

export type AuthMapStateToPropsType = ReturnType<typeof mapStateToProps>
export type AuthPropsType = AuthMapStateToPropsType & AuthDispatchToPropsType
export type AuthDispatchToPropsType = {
  getAuthUserData: () => void
}

export default connect(mapStateToProps,
  {getAuthUserData: getAuthUserDataTC, logout: logout})(HeaderContainer);
