import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import ErrorBoundry from './components/error-boundry';
import App from './components/app';
import './index.css';

import store from './redux/store';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundry>
                <Router>
                    <App />
                </Router>
            </ErrorBoundry>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);