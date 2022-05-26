import React from "react";
import styles from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img alt='pic' src='https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/04/planet-pluto-0405221.jpg'/>
            </div>
            <div>
                Ava+description
            </div>
            <div>
                My posts
                <div className={styles.posts}>
                    New posts
                    <div  className={styles.item}>
                        Post1
                    </div>
                    <div className={styles.item}>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    )
}