import React from "react";
import style from './Header.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.imgLogo} alt='pic' src='https://img.freepik.com/free-vector/handdrawn-samurai-logo-mascot_78838-23.jpg?w=826'/>
        </header>
    )
}