import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import {setupStore} from "./redux";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore();
root.render(

    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>

    </Provider>

);


reportWebVitals();
