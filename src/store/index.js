import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import recipes from 'src/middlewares/recipes';
import auth from 'src/middlewares/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(recipes, auth),
);

const store = createStore(reducer, enhancers);

export default store;
