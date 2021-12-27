import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import counter from './reducers/counter';
import loading from './reducers/loading';
import thunk from 'redux-thunk';
import {logMiddleware, stringMiddleware} from './middleware';

const rootReducer = combineReducers({
  counter, loading,
});

const configureStore = (initialState) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(
      stringMiddleware,
      thunk,
      logMiddleware
    ))
  )
}

export default configureStore

// const timeoutInc = (timeout) => (dispatch) => {
//   setTimeout(
//     () => dispatch({ type: 'INC' }),
//     timeout
//   );
// }

// const loadCharacters = (dispatch) => {
//   dispatch({ type: 'CHARACTERS_LOADING' });
//
//   api
//     .load()
//     .then((data) => dispatch({ type: 'CHARACTERS_LOADED', payload: data }));
//     .catch(() => dispatch({ type: 'CHARACTERS_LOAD_ERROR' }))
// }

// const loadCharacter = (id) => (dispatch) => {
//   dispatch({ type: 'CHARACTERS_LOADING' });
//
//   api
//     .load(id)
//     .then((data) => dispatch({ type: 'CHARACTERS_LOADED', payload: data }));
// }

// store.dispatch(loadCharacter(123));
// store.dispatch(timeoutInc(2000));
// store.dispatch(timeoutInc(1000));
