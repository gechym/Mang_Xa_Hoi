import * as userConstant from '../constats/userConstant';

// export const fetch_register = 'users/fetch_register';
// export const fetch_register_success = 'users/fetch_register_success';
// export const fetch_register_error = 'users/fetch_register_error';

// export const fetch_refetch_token = 'users/refetch_token';

// export const logout = 'users/logout';

export const fetch_login = () => {
  return {
    type: userConstant.fetch_login,
  };
};

export const fetch_login_success = (res) => {
  return {
    type: userConstant.fetch_login_success,
    payload: res,
  };
};

export const fetch_login_error = (error) => {
  return {
    type: userConstant.fetch_login_error,
    payload: error,
  };
};
