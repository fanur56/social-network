import React from "react";
import styles from "./InfoContent.module.scss"
import {RepairComponent} from "common/components/RepairComponent/RepairComponent";
import {NavLink} from "react-router-dom";

export const InfoContent = () => {
    return <div className={styles.infoContentComponent}>
        <div className={styles.repairBox}>
            <RepairComponent text={'The project is under development. Some features may be unavailable.'}/>
        </div>

        <div className={styles.newsBox}>
            <h3 className={styles.title}>News</h3>
            <div className={styles.news}>
                <NavLink to="/news" className={styles.link}>
                    In our last post, we shared step-by-step instructions for upgrading your app to React 18. In this
                    post,
                    we’ll give an overview of what’s new in React 18, and what it means for the
                    future<span>...more</span>
                </NavLink>
            </div>
            <div className={styles.news}>
                <NavLink to="/news" className={styles.link}>
                    Google has released another version of its browser, which has received several new features and
                    improvements. The developers updated the V8 JavaScript engine, resulting in a 23% increase in
                    browser performance<span>...more</span>
                </NavLink>
            </div>
            <div className={styles.news}>
                <NavLink to="/news" className={styles.link}>
                    And although for many this is not an obvious fact, but absolutely every programmer needs
                    mathematics. But it is not easy to understand her. Probably everyone remembers how difficult it was
                    to understand algebra and geometry<span>...more</span>
                </NavLink>
            </div>
        </div>
    </div>
}