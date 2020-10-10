import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { fetchTickets } from './actions';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.dispatch(fetchTickets('2mzrq'));

export default store;
