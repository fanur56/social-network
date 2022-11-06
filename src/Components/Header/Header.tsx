import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthPropsType} from "./HeaderContainer";

export const Header = (props: AuthPropsType) => {
    return (
        <header className={style.header}>
            <img className={style.imgLogo} alt='pic'
                 src='https://img.freepik.com/free-vector/handdrawn-samurai-logo-mascot_78838-23.jpg?w=826'/>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={"/login"}>
                        Login
                    </NavLink>}
            </div>
        </header>
    )
}