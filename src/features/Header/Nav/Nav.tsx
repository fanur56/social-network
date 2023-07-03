import React, {useState} from "react";
import styles from './Nav.module.scss';
import {SvgSelector} from "common/components/svgSelector/SvgSelector";
import {UserMenu} from "./UserMenu/UserMenu";
import {NavOpenMenu} from "./NavOpenMenu/NavOpenMenu";
import {NavClosedMenu} from "./NavClosedMenu/NavClosedMenu";

type NavPropsType = {
    login: string | null
    logout: () => void
}

export const Nav = (props: NavPropsType) => {

    const [visibilityUserMenu, setVisibilityUserMenu] = useState<boolean>(false)
    const [visibilityNavMenu, setVisibilityNavMenu] = useState<boolean>(false)

    const userMenuHandler = () => {
        setVisibilityUserMenu(!visibilityUserMenu)
        setVisibilityNavMenu(false)
    }

    const navMenuHandler = () => {
        setVisibilityNavMenu(!visibilityNavMenu)
        setVisibilityUserMenu(false)
    }

    const userMenuOffHandler = () => {
        setVisibilityUserMenu(false)
    }

    const navMenuOffHandler = () => {
        setVisibilityNavMenu(false)
    }

    return <nav className={styles.navBox}>
        <NavOpenMenu visibilityCallBack={userMenuOffHandler}/>
        <NavClosedMenu
            visibilityNavMenu={visibilityNavMenu}
            navMenuHandler={navMenuHandler}
            visibilityCallBack={navMenuOffHandler}
        />
        <div className={styles.userNav}>
            <div onClick={userMenuHandler}
                 className={`${styles.userButton} ${visibilityUserMenu ? styles.activeLink : ''}`}>
                <SvgSelector svgName={"User"}/>
                <span className={styles.user}>{props.login} {!visibilityUserMenu ?
                    <span className={styles.symbol}>&#9660;</span>
                    :
                    <b className={styles.symbol}>&times;</b>}
                </span>
            </div>
            {visibilityUserMenu &&
                <UserMenu
                    logout={props.logout}
                    visibilityCallBack={userMenuOffHandler}
                />}
        </div>
    </nav>
};