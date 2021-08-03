import { GET_RECIPES } from 'src/actions/recipes';
import axios from 'axios';

// les middlewares c'est la galère! je ne comprends pas je n'arrive pas à le faire passer dedans
// testé plein de choses mais rien qui fonctionne


const recipes = (store) => (next) => (action) => {
  // console.log(store, action);
  console.log('je suis ici');

  const state = store.getState();
  console.log(state);
  axios.get('http://localhost:3001/recipes', {
    recipes: state.recipes,
})
    .then((response) => {
      console.log(response);
      store.dispatch(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

// const recipes = (store) => (next) => (action) => {
//   // console.log(store, action);
//   console.log('je suis ici');
//   switch (action.type) {
//     case GET_RECIPES: {
//       console.log('je suis dans le cas GET_RECIPES');
//       const state = store.getState();
//       console.log(state);
//       axios.get('http://localhost:3001/recipes', {
//         recipes: state.recipes,
//       })
//         .then((response) => {
//           console.log(response);
//           store.dispatch(response);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//       break;
//     }
//     default:
//       // next(action);
//   }
// };

export default recipes;
