import React from 'react';
import './index.css';
import {state} from "./redux/redux"
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state)