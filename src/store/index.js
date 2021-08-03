// import { createStore, applyMiddleware, compose } from 'redux';

// import reducer from 'src/reducers';

// import recipes from 'src/middlewares/recipes';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = composeEnhancers(
//   applyMiddleware(recipes),
// );

// const store = createStore(reducer, enhancers);

// export default store;

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';

import debug from 'src/middlewares/debug';
import recipes from 'src/middlewares/recipes';

const store = createStore(
  reducer,
  console.log('je passe bien la'),
  composeWithDevTools(applyMiddleware(debug, recipes())),
);

export default store;
