import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';

const Counter = ({ value, inc, dec, rand }) => {
  return (
    <div>
      <h1>{ value }</h1>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
      <button onClick={rand}>RAND</button>
    </div>
  );
};

const mapStateToProps = ({ counter }) => {
  return {
    value: counter,
  }
}

// 1.
// import { inc, dec, rand } from '../actions';
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     inc:  () => dispatch(inc()),
//     dec:  () => dispatch(dec()),
//     rand: () => {
//       const value = Math.floor(Math.random() * 10);
//       dispatch(rand(value));
//     }
//   }
// }

// 2.
// const mapDispatchToProps = (dispatch) => {
//   const {inc, dec, rand} = bindActionCreators(actions, dispatch);
//   return {
//     inc,
//     dec,
//     rand: () => {
//       const value = Math.floor(Math.random() * 10);
//       rand(value);
//     }
//   }
// }

// 3.
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// 4.
// export default connect(mapStateToProps, actions)(Counter);
