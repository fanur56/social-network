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
import {AddPostType, StateType, UpdateNewPostTextType} from "./redux/redux";

type AppPropsType = {
    state: any // need fix
    addPost:AddPostType
    updateNewPostText: UpdateNewPostTextType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/DialogsItem" render={() => <Dialogs dialogData={props.state.dialog.dialogData}
                                                                      messagesData={props.state.dialog.messagesData}/>}/>
                    <Route path="/Profile" render={() => <Profile postsData={props.state.posts}
                                                                  addPost={props.addPost}
                                                                  updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
