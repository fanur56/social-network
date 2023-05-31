import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthMapStateToPropsType} from "./HeaderContainer";

export const Header = (props: any) => {
  return (
    <header className={style.header}>
      <img className={style.imgLogo} alt='pic'
           src='https://img.freepik.com/free-vector/handdrawn-samurai-logo-mascot_78838-23.jpg?w=826'/>
      <div className={style.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout ? props.logout : () => {
          }}>Log out</button></div>
          : <NavLink to={"/login"}>
            Login
          </NavLink>}
      </div>
    </header>
  )
}