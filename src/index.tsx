import React from 'react';
import './index.css';
import {state, subscribe} from "./redux/redux"
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, StateType, updateNewPostText} from "./redux/redux"

export const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)