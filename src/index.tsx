import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {state} from "./redux/redux"



ReactDOM.render(
    <BrowserRouter>
        <App store={state}/>
    </BrowserRouter>,
    document.getElementById('root')
);