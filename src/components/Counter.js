import React from 'react';

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

export default Counter;
