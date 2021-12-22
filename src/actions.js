const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rand = (payload) => ({ type: 'RAND', payload });

export { inc, dec, rand }
