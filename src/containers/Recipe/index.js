import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';
// import { withRouter } from 'react-router-dom';

import { findRecipe } from 'src/selectors/recipes';

const mapStateToProps = (state, ownProps) => ({
  // ici on veut faire varier le 2e argument
  // c'est-à-dire le slug de la recette
  recipe: findRecipe(state.recipes.list, ownProps.match.params.slug),
});

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export default container;

// withRouter est un HOC qui va injecter dans les props du composant (ici le container)
// les objets history, location et match du composant Route le plus proche
// const containerWithRouter = withRouter(container);
// export default containerWithRouter;
