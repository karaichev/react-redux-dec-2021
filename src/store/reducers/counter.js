const initialState = 0;

const counter = (state = initialState, action) => {
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

export default counter;
