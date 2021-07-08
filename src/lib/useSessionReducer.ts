import { useEffect, useReducer, useRef } from "react";

export function useSessionReducer<State, Action>(
  sessionStorageKey: string,
  reducer: (state: State, action: Action) => State,
  initialState: State
) {
  const storedState = sessionStorage.getItem(sessionStorageKey);
  const currentState =
    storedState === null ? initialState : (JSON.parse(storedState) as State);
  const [state, dispatch] = useReducer(reducer, currentState);
  const keyRef = useRef(sessionStorageKey);

  useEffect(() => {
    sessionStorage.setItem(keyRef.current, JSON.stringify(state));
  }, [state]);

  return [state, dispatch] as [typeof state, typeof dispatch];
}
