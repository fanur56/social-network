import React from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "common/hoc/withAuthRedirect";
import styles from './Music.module.scss'
import {RepairComponent} from "common/components/RepairComponent/RepairComponent";

class MusicAPI extends React.Component {
    render() {
        return <div className={styles.musicComponent}>
            <RepairComponent text={'This page is under development.'}/>
        </div>
    }
}

export const MusicContainer = compose<React.ComponentType>(withRouter, withAuthRedirect)(MusicAPI)