import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions'
import Counter from './components/Counter';

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rand } = bindActionCreators(actions, dispatch);

const renew = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      inc={inc}
      dec={dec}
      rand={() => {
        const value = Math.floor(Math.random() * 10);
        rand(value);
      }}
    />,
    document.getElementById('root')
  )
}

renew();
store.subscribe(renew);
