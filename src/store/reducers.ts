import {combineReducers} from 'redux';
import AuthReducer from './Auth/reducer';
import ReposReducer from './RepoList/reducer';

const globalReducers = combineReducers({
  Auth: AuthReducer,
  Repos: ReposReducer,
});

export default globalReducers;
