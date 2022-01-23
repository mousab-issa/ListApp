import {RootState} from './store';

export const selectUser = (state: RootState) => state.Auth.isLogedIn;

export const getAllRepos = (state: RootState) => state.Repos.all;
