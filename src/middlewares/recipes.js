import axios from 'axios';
import { FETCH_RECIPES, saveRecipes } from 'src/actions/recipes';

const recipes = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES: {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3001/recipes');
          // à partir de là on a notre réponse et on va pouvoir stocker les données
          // sinon on aura une erreur et on passera dans le "catch"
          // on va donc créer une action qui sera traiter dans le reducer
          // pour modifier la valeur de recipes.list
          const actionSaveRecipes = saveRecipes(response.data);
          store.dispatch(actionSaveRecipes);
        }
        catch (error) {
          console.log(error);
        }
      };

      fetchData();
      break;
    }
    default:
      next(action);
  }
};

export default recipes;
