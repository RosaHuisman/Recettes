// un middleware Redux est une triple flêchée, c'est du currying
// cette fonction prend en paramètre
// le store
// la fonction next
// l'action courante
// cette fonction est utilisée pour traiter les effets:
// - requêtes API
// - listeners
// - timers
const debug = (store) => (next) => (action) => {
  console.log(store, action);
  // par défaut le middleware bloque l'action (videur)
  // si on veut laisser passer l'action on utilise la fonction next et on lui passe l'action
  // next(action);
};

export default debug;
