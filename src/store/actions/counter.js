const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
// const rand = (payload) => ({ type: 'RAND', payload });
const rand = () => {
  const value = Math.floor(Math.random() * 10);
  return { type: 'RAND', payload: value }
};

export { inc, dec, rand }
