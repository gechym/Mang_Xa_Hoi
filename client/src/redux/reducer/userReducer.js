import * as constantUser from '../constats/userConstant';

const initialState = {
  loading: false,
  error: '',
  user: null,
  userInfo: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constantUser.fetch_login:
      return {
        ...state,
        loading: true,
      };
    case constantUser.fetch_login_success:
      return {
        ...state,
        user: action.payload.user,
        userInfo: action.payload.userInfo,
        error: null,
        loading: false,
      };

    case constantUser.fetch_login_error:
      return {
        ...state,
        user: null,
        userInfo: null,
        loading: false,
        error: action.payload,
      };

    case constantUser.logout:
      return {
        ...initialState,
      };

    case constantUser.fetch_register:
      return {
        ...state,
        loading: true,
      };
    case constantUser.fetch_register_success:
      return {
        ...state,
        user: action.payload.user,
        userInfo: action.payload.userInfo,
        error: null,
        loading: false,
      };
    case constantUser.fetch_register_error:
      return {
        ...state,
        user: null,
        userInfo: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
