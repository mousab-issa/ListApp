import {
  LOAGIN_USER,
  LOAGIN_USER_FAILED,
  LOAGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_FAILED,
  LOGOUT_USER_SUCCESS,
} from './actionsTypes';

const initialState = {
  loading: false,
  isLogedIn: false,
  userInfo: null,
};

const AuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAGIN_USER:
      return {
        ...state,
        loading: true,
      };
    case LOAGIN_USER_FAILED:
      return {
        ...state,
        loading: false,
        isLogedIn: false,
        userInfo: null,
      };
    case LOAGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogedIn: true,
        userInfo: action.payload,
      };

    case LOGOUT_USER:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_USER_FAILED:
      return {
        ...state,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogedIn: false,
        userInfo: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;
