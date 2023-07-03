import React from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "common/hoc/withAuthRedirect";
import styles from "./News.module.scss"
import {RepairComponent} from "common/components/RepairComponent/RepairComponent";

class NewsAPI extends React.Component {
    render() {

        return <div className={styles.newsComponent}>
            <RepairComponent text={'This page is under development.'}/>
        </div>
    }
}

export const NewsContainer = compose<React.ComponentType>(withRouter, withAuthRedirect)(NewsAPI)