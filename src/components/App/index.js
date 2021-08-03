import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App({ loading, loadData }) {
  useEffect(loadData, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* ici on utilisera le HOC withRouter côté container */}
        {/* <Route path="/recipe/:slug">
          <Recipe />
        </Route> */}

        {/* ici on récupèrera la valeur de "slug" côté container via les ownProps */}
        {/* <Route
          path="/recipe/:slug"
          render={(props) => {
            return <Recipe slug={props.match.params.slug} />
          }}
        /> */}

        {/* on peut donner un composant à rendre via la props "component"
        ce composant aura les objets history, match et location injectés dans ses props */}
        <Route path="/recipe/:slug" component={Recipe} />

        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  loadData: PropTypes.func.isRequired,
};

App.defaultProps = {
  loading: false,
};

export default App;
