const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action
    })
  }

  return next(action);
}

const logMiddleware = ({ getState }) => (next) => (action) => {
  console.log(action.type, getState());

  return next(action);
}

export { stringMiddleware, logMiddleware }
