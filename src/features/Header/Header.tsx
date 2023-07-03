import React from "react";
import styles from './Header.module.scss'
import imgLogo from '../../assets/images/logo.png'
import {SvgSelector} from "common/components/svgSelector/SvgSelector";
import {Nav} from "./Nav/Nav";
import {LinearProgress} from "common/components/LinearProgress/LinearProgress";
import {RequestStatusType} from "app/app-reducer";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
    status: RequestStatusType
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={styles.headerComponent}>
            <div className={styles.headerBox}>
                <div className={styles.searchBox}>
                    <img
                        className={styles.image}
                        alt={'Logo'}
                        src={imgLogo}
                    />
                    <input
                        className={styles.searchInput}
                        type="text"
                        placeholder={'Search is under development'}
                        defaultValue={'Search is under development'}
                    />
                    <button className={styles.searchButton}><SvgSelector svgName={"Search"}/></button>
                </div>
                <Nav
                    login={props.login}
                    logout={props.logout}
                />
            </div>
            {props.status === 'loading' && <LinearProgress/>}
        </header>
    )
}