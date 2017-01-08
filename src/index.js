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

import * as firebase from 'firebase';

const store = createStore(allReducers, undefined, autoRehydrate());

const history = syncHistoryWithStore(browserHistory, store);

persistStore(store);

const config = {
    apiKey: "AIzaSyA5pPKO8J9sR1m3hyPu7WJw2MzIu0z0q6o",
    authDomain: "react-tchat-e518d.firebaseapp.com",
    databaseURL: "https://react-tchat-e518d.firebaseio.com",
    storageBucket: "react-tchat-e518d.appspot.com",
    messagingSenderId: "640840838780"
};

firebase.initializeApp(config);

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
