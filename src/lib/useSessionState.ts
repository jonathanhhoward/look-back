import { useEffect, useRef, useState } from "react";

export function useSessionState<StateType>(
  sessionStorageKey: string,
  initialState: StateType
) {
  const storedState = sessionStorage.getItem(sessionStorageKey);
  const currentState =
    storedState === null
      ? initialState
      : (JSON.parse(storedState) as StateType);
  const [state, setState] = useState(currentState);
  const keyRef = useRef(sessionStorageKey);

  useEffect(() => {
    sessionStorage.setItem(keyRef.current, JSON.stringify(state));
  }, [state]);

  return [state, setState] as [typeof state, typeof setState];
}
