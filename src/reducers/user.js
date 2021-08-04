import { CHANGE_FIELD_VALUE, SAVE_USER, LOGIN_ERROR, LOGOUT } from 'src/actions/user';

export const initialState = {
  isLogged: false,
  loginError: false,
  email: 'acidman@herocorp.io',
  password: 'fructis',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_VALUE: {
      console.log('je suis dans le case CHANGE FIELD VALUE dans actions user')
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case SAVE_USER: {
      console.log('je suis dans le case SAVE_USER')
      return {
        ...state,
        isLogged: true,
        loginError: false,
        email: '',
        password: '',
      };
     
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loginError: true,
      };
    }
    case LOGOUT: {
      console.log('je suis dans le case LOGOUT')
      return {
        ...state,
        isLogged: false,
        email: '',
        password: '',        
      };
    }
    default:
      return state;
  }
};

export default reducer;
