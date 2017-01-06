import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {persistStore, autoRehydrate} from 'redux-persist';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import allReducers from './reducers';

import AppComponent from './components/app.component';
import HomeContainer from './containers/home.container';

import './assets/css/index.css';

const store = createStore(allReducers, undefined, autoRehydrate());

const history = syncHistoryWithStore(browserHistory, store);

persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={AppComponent} >
                <IndexRoute component={HomeContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
