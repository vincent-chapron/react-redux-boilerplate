import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {createBrowserHistory} from 'history';
import getRoutes from './pages';
import createStore from './redux';

const store = createStore(createBrowserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router routes={getRoutes(store)} history={history}/>
    </Provider>,
    document.getElementById('root')
);
