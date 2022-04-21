import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {subscribe} from "./store/store";
import state from "./store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));

subscribe(() => root.render(<App state={state} />))

root.render(<App state={state} />)





