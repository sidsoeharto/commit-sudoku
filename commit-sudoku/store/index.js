import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import boardReducer from './reducers/boardReducer';

const reducer = combineReducers({
  boardReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store