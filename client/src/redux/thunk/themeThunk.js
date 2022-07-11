import { toggle_theme } from '~/redux/actions/themeAction';

export const toggleTheme = () => async (dispatch, getState) => {
  localStorage.setItem('theme', getState().themeState === 'light' ? 'dark' : 'light');

  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  dispatch(toggle_theme());
};
