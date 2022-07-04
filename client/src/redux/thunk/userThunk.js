import { login } from '~/api/userService';
import { fetch_login, fetch_login_error, fetch_login_success } from '../actions/userAction';

export const loginUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    dispatch(fetch_login());
    try {
      const res = await login({ email, password });
      dispatch(fetch_login_success(res));
    } catch (err) {
      dispatch(fetch_login_error(err.m));
    }
  };
