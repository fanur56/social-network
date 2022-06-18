import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {StateType} from "./redux/redux";

type AppPropsType = {
    store: StateType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/DialogsItem" render={() => <Dialogs dialogData={props.store.dialog.dialogData}
                                                                      messagesData={props.store.dialog.messagesData}/>}/>
                    <Route path="/Profile" render={() => <Profile postsMessages={props.store.posts.postsMessages}/>}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
