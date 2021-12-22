import { createStore } from 'redux';

const initialState = 0;

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rand = (payload) => ({ type: 'RAND', payload });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RAND':
      return state + action.payload;
    default:
      return state;
  }
}

const store = createStore(reducer);

document
  .getElementById('inc')
  .addEventListener('click', () => {
    store.dispatch(inc());
  });

document
  .getElementById('dec')
  .addEventListener('click', () => {
    store.dispatch(dec());
  });

document
  .getElementById('rand')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);

    store.dispatch(rand(payload));
  });

const renew = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
}

store.subscribe(renew)
