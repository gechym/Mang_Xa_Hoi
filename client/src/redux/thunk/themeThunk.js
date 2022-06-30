import { toggle_theme } from '~/redux/actions/themeAction';

export const toggleTheme = () => async (dispatch, getState) => {
  localStorage.setItem('theme', getState().themeState === 'light' ? 'dark' : 'light');
  dispatch(toggle_theme());
};
