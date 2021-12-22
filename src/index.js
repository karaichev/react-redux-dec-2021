import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import { inc, dec, rand } from './actions';

const store = createStore(reducer);
const { dispatch } = store;

// 1.
// const bindActionCreators = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

// const incDispatch  = bindActionCreators(inc, dispatch);
// const decDispatch  = bindActionCreators(dec, dispatch);
// const randDispatch = bindActionCreators(rand, dispatch);

// 2.
const { incDispatch, decDispatch, randDispatch } = bindActionCreators({
  incDispatch: inc,
  decDispatch: dec,
  randDispatch: rand,
}, dispatch);

// 3. import * as actions from './actions'
// const { inc, dec, rand } = bindActionCreators(actions, dispatch);

document
  .getElementById('inc')
  .addEventListener('click', incDispatch);

document
  .getElementById('dec')
  .addEventListener('click', decDispatch);

document
  .getElementById('rand')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    randDispatch(payload)
  });

const renew = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
}

store.subscribe(renew)
