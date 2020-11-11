import { createStore, applyMiddleware } from 'redux';
import state from './state';
import thunk from 'redux-thunk';
import reducers from './reducers'

export default createStore(reducers, state, applyMiddleware(thunk))