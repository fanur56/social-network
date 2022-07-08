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
import {
    DispatchActionType,
    StateType
} from "./redux/redux";

type AppPropsType = {
    state: StateType
    dispatch: (action: DispatchActionType) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs dialogData={props.state.dialog.dialogData}
                                                                  messagesData={props.state.dialog.messagesData}
                                                                  newMessagesBody={props.state.dialog.newMessagesBody}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path="/profile" render={() => <Profile posts={props.state.posts}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
