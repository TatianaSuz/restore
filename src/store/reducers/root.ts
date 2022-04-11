import { combineReducers } from 'redux';
import appReducer from './app';

const root = combineReducers({ app: appReducer });

export default root;
