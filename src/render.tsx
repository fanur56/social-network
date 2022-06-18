import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, StateType} from "./redux/redux"

export const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
