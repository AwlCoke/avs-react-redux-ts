import { applyMiddleware, createStore, compose } from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { fetchTickets } from './actions';

declare global {
    interface Window {
        // eslint-disable-next-line no-undef
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancer(applyMiddleware(thunkMiddleware));

const store = createStore(reducer, enhancer);

store.dispatch(fetchTickets());

export default store;
