import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './store/reducers/rootReducer';
import { createStore, applyMiddleware , compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

/* -------------- redux dev tools ----------------- */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* -------------- store ---------- */
const store = createStore (rootReducer,composeEnhancers(applyMiddleware(thunk)))

/* -------------- connect store to react ---------- */ 
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
