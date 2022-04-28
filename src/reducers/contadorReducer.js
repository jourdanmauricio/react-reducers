import { TYPES } from "../actions/contadorActions";

export const contadorInitialState = { contador: 0 };

export const contadorInit = () => {
  return {
    contador: contadorInitialState.contador + 100,
  };
};

function contadorReducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPES.RESET:
      return contadorInitialState;
    default:
      return state;
  }
}

export { contadorReducer };
