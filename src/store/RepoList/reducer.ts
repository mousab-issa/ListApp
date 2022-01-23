import {
  GET_REPOS,
  GET_REPOS_FAILED,
  GET_REPOS_SUCCESS,
  SEARCH_REPOS,
  SEARCH_REPOS_FAILED,
  SEARCH_REPOS_SUCCESS,
} from './actionsTypes';

const initialState = {
  loading: false,
  all: [],
  page: 1,
};

const ReposReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        loading: true,
      };
    case GET_REPOS_FAILED:
      return {
        ...state,
        loading: false,
      };
    case GET_REPOS_SUCCESS:
      return {
        ...state,
        all: state.all.concat(action.payload),
        loading: false,
        page: state.page + 1,
      };

    case SEARCH_REPOS:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_REPOS_FAILED:
      return {
        ...state,
        loading: false,
      };
    case SEARCH_REPOS_SUCCESS:
      return {
        ...state,
        all: action.payload,
        loading: false,
        page: state.page + 1,
      };

    default:
      return {
        ...state,
      };
  }
};

export default ReposReducer;
