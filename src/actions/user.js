export const LOGIN = 'LOGIN';
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const SAVE_USER = 'SAVE_USER';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';



export const login = () => ({
  type: LOGIN,
});

export const changeFieldValue = (key, value) => ({
  type: CHANGE_FIELD_VALUE,
  value,
  key,
});

export const saveUser = () => ({
  type: SAVE_USER,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const logout = () => ({
  type: LOGOUT,
});
