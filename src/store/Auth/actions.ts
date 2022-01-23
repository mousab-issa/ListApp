import {storeData, getData, removeData} from 'src/helpers/utils';
import {
  LOAGIN_USER,
  LOAGIN_USER_FAILED,
  LOAGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_FAILED,
  LOGOUT_USER_SUCCESS,
} from './actionsTypes';

export const Loginuser =
  (payload: {username: string; password: string}) => async (dispatch: any) => {
    try {
      dispatch({type: LOAGIN_USER});
      const user = await storeData(payload, 'userInfo');
      dispatch({type: LOAGIN_USER_SUCCESS, user});

      return {};
    } catch (e: any) {
      dispatch({type: LOAGIN_USER_FAILED, payload: e.message});
    }
  };

export const LogOut = () => async (dispatch: any) => {
  try {
    dispatch({type: LOGOUT_USER});
    const Removeduser = await removeData('userInfo');
    dispatch({type: LOGOUT_USER_SUCCESS});
    return {};
  } catch (e: any) {
    dispatch({type: LOGOUT_USER_FAILED, payload: e.message});
  }
};

export const getUserInfo = () => async (dispatch: any) => {
  try {
    dispatch({type: LOAGIN_USER});
    const user = await getData('userInfo');
    if (user !== 'KEY IS EMPTY') {
      dispatch({type: LOAGIN_USER_SUCCESS, user});
      return;
    }
    dispatch({type: LOAGIN_USER_FAILED, payload: 'No user found'});
  } catch (e: any) {
    dispatch({type: LOAGIN_USER_FAILED, payload: e.message});
  }
};
