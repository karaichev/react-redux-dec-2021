import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
  return {
    value: state,
  }
}

export default connect(mapStateToProps)(Counter);
