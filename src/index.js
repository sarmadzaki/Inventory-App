import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Router, browserHistory, Route} from 'react-router';
import Item from './components/items'
import AddItem from './components/addItem'
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/items" component={Item} />
        <Route path="/addItem" component={AddItem} />
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
