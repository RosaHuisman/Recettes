import { LOGIN, saveUser, loginError } from 'src/actions/user';
import axios from 'axios';

const auth = (store) => (next) => (action) => {

  switch (action.type) {
    case LOGIN: {
     console.log('mdw auth, case LOGIN')
      const state = store.getState();
      console.log(state.user)

      axios.post('http://localhost:3001/login', {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          const actionSaveUser = saveUser(response.data.email);
          console.log(actionSaveUser)
          store.dispatch(actionSaveUser);
        })
        .catch((error) => {
          store.dispatch(loginError());
        });
      break;
    }
    default:
      next(action);
  }
};

export default auth;
