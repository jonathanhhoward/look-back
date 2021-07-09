import { Reducer, useEffect, useReducer, useRef } from "react";

export function useSessionReducer<State, Action>(
  storageKey: string,
  reducer: Reducer<State, Action>,
  initialState: State
) {
  const storedItem = sessionStorage.getItem(storageKey);
  const initializer =
    storedItem === null ? initialState : (JSON.parse(storedItem) as State);
  const state = useReducer(reducer, initializer);
  const storageKeyRef = useRef(storageKey);

  useEffect(() => {
    sessionStorage.setItem(storageKeyRef.current, JSON.stringify(state[0]));
  }, [state]);

  return state;
}
