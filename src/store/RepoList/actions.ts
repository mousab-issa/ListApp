import {AxiosResponse} from 'axios';
import {Constatnts} from 'src/common/constants';
import axiosInstance from 'src/helpers/axios';
import {
  GET_REPOS,
  GET_REPOS_FAILED,
  GET_REPOS_SUCCESS,
  SEARCH_REPOS,
  SEARCH_REPOS_FAILED,
  SEARCH_REPOS_SUCCESS,
} from './actionsTypes';

export const fetchUsers =
  (payload: {query: string; page: number}) => async (dispatch: any) => {
    try {
      dispatch({type: GET_REPOS});
      const request: AxiosResponse<any, {total_count: number; items: []}> =
        await axiosInstance.get('/repositories', {
          headers: {
            Authorization: Constatnts.Git_API_KEY,
          },
          params: {
            q: payload.query,
            page: payload.page,
            per_page: 20,
          },
        });

      if (request.status === 200) {
        const {items, total_count} = request.data;
        if (items.length > 0) {
          dispatch({type: GET_REPOS_SUCCESS, payload: items});
        }
      }
    } catch (e: any) {
      dispatch({type: GET_REPOS_FAILED, payload: e.message});
    }
  };

export const searchUsers =
  (payload: {query: string; page: number}) => async (dispatch: any) => {
    try {
      dispatch({type: SEARCH_REPOS});
      const request: AxiosResponse<any, {total_count: number; items: []}> =
        await axiosInstance.get('/repositories', {
          headers: {
            Authorization: Constatnts.Git_API_KEY,
          },
          params: {
            q: payload.query,
            page: payload.page,
            per_page: 20,
          },
        });

      if (request.status === 200) {
        const {items, total_count} = request.data;
        if (items.length > 0) {
          dispatch({
            type: SEARCH_REPOS_SUCCESS,
            payload: {items: items, page: payload.page},
          });
        }
      }
    } catch (e: any) {
      dispatch({type: SEARCH_REPOS_FAILED, payload: e.message});
    }
  };
