import {combineReducers} from 'redux';
import JokesReducer from './Jokes';

export default combineReducers({
    jokes: JokesReducer
});