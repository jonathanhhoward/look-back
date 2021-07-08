import { useEffect, useReducer, useRef } from "react";

export function useSessionReducer<StateType, ActionType>(
  sessionStorageKey: string,
  reducer: (state: StateType, action: ActionType) => StateType,
  initialState: StateType
) {
  const storedState = sessionStorage.getItem(sessionStorageKey);
  const currentState =
    storedState === null
      ? initialState
      : (JSON.parse(storedState) as StateType);
  const [state, dispatch] = useReducer(reducer, currentState);
  const keyRef = useRef(sessionStorageKey);

  useEffect(() => {
    sessionStorage.setItem(keyRef.current, JSON.stringify(state));
  }, [state]);

  return [state, dispatch] as [typeof state, typeof dispatch];
}
