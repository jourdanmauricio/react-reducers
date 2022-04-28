import React, { useReducer } from "react";
import { TYPES } from "../actions/contadorActions";
import {
  contadorReducer,
  contadorInitialState,
  contadorInit,
} from "../reducers/contadorReducer";

const ContadorMejorado = () => {
  const [state, dispatch] = useReducer(
    contadorReducer,
    contadorInitialState,
    contadorInit
  );

  const sumar = (number) =>
    dispatch({ type: TYPES.INCREMENT, payload: number });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Reducer</h2>
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

export default ContadorMejorado;
