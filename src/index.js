import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import booksReducer from './reducers/booksReducer';
import authorsReducer from './reducers/authorsReducer';
import usersReducer from './reducers/usersReducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({books: booksReducer, authors: authorsReducer, users: usersReducer});

const store = createStore(rootReducer);
// console.log(store.getState());


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
