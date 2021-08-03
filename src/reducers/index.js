import { combineReducers } from 'redux';

import recipesReducer from './recipes';
import userReducer from './user';

// combineReducers est une fonction de Redux qui permet d'agréger plusieurs
// sous-reducers
// on passe en argument un objet qui viendra prendre les propriétés principales
// de notre state global
// ici le state global aura 2 propriétés principales "recipes" et "user"
// dans ces propritétés on aura les sous-states qui sont dans les fichiers
// des sous-reducers
const rootReducer = combineReducers({
  recipes: recipesReducer,
  user: userReducer,
});

export default rootReducer;
