const initialState = localStorage.getItem('theme') || 'dark'; // light or dark

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
  localStorage.theme = 'dark';
} else {
  document.documentElement.classList.remove('dark');
  localStorage.theme = 'light';
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};

export default themeReducer;
