import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';
import recipes from 'src/data';


import Loading from './Loading';

import './style.scss';


function App(props) {
  if (props.loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/recipe/:slug">
          <Recipe recipes={recipes} />
        </Route>

        <Route path="/error" exact> <Error /> </Route>
        <Route> <Error /> </Route>

        {/* <Recipe /> */}
        {/* <Error /> */}
      </Switch>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;


// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Route, Switch } from 'react-router-dom';

// import Menu from 'src/containers/Menu';
// import Home from 'src/containers/Home';
// import Recipe from 'src/containers/Recipe';
//  import Error from 'src/components/Error';
// //import recipes from 'src/data';
// import axios from 'axios';


// import Loading from './Loading';

// import './style.scss';


// function App(props) {
//   const [recipes, setResults] = useState([]);
//   console.log('props', recipes);
//   if (props.loading) {
//     return <Loading />;
//   }

   // !!!!!! solution de secours qui ne fonctionne pas non plus :D !!!!!!!

//   axios.get('http://localhost:3001/recipes')
//     .then(({ data }) => {
//       console.log('data :', data);
//       const { recipes } = data;
//       setResults(recipes);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

// console.log('recipes :', recipes);

//   return (
//     <div className="app">
//       <Menu />
//       <Switch>
//         <Route path="/" exact>
//           <Home />
//         </Route>

//         <Route path="/recipe/:slug">
//           <Recipe recipes={recipes} />
//         </Route>

//         <Route path="/error" exact> <Error /> </Route>
//         <Route> <Error /> </Route>

//         {/* <Recipe /> */}
//         {/* <Error /> */}
//       </Switch>
//     </div>
//   );
// }

// App.propTypes = {
//   loading: PropTypes.bool,
// };

// App.defaultProps = {
//   loading: false,
// };

// export default App;
