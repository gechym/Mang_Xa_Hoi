import { login, register } from '~/api/userService';
import {
  fetch_login,
  fetch_login_error,
  fetch_login_success,
  fetch_register,
  fetch_register_error,
  fetch_register_success,
  logout,
} from '../actions/userAction';

export const loginUser =
  ({ email, password }, callBack) =>
  async (dispatch, getState) => {
    dispatch(fetch_login());
    try {
      const res = await login({ email, password });
      dispatch(fetch_login_success(res));
    } catch (err) {
      dispatch(fetch_login_error(err.message));
    }
  };

export const registerUser =
  ({ name, email, password, passwordConfig }, callBack, callBackErr) =>
  async (dispatch, getState) => {
    dispatch(fetch_register());
    try {
      const res = await register({ name, email, password, passwordConfig });
      dispatch(fetch_register_success(res));
      callBack();
    } catch (err) {
      dispatch(fetch_register_error(err.message));
      callBackErr();
    }
  };

export const logoutUser = () => async (dispatch, getState) => {
  dispatch(logout());
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
};
