import React, { useReducer } from "react";

const initialState = { contador: 0 };

const init = () => {
  return {
    contador: initialState.contador + 100,
  };
};

const TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
}

const Contador = () => {
  // const [contador, setContador] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState, init);

  // const sumar = () => setContador(contador + 1);
  const sumar = (number) =>
    dispatch({ type: TYPES.INCREMENT, payload: number });
  // const restar = () => setContador(contador - 1);
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Mejorado Reducer</h2>
      <nav>
        <button onClick={() => sumar(1)}>+</button>
        <button onClick={() => sumar(5)}>+5</button>
        <button onClick={restar}>-</button>

        <button onClick={reset}>Reset</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;
