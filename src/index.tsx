import React from 'react';
import './index.css';
import {store} from "app/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import {AppContainer} from 'app/App';
import {Provider} from "react-redux";
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
    ,
    document.getElementById('root')
);