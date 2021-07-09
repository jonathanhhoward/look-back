import { useEffect, useRef, useState } from "react";

export function useSessionState<State>(
  storageKey: string,
  initialState: State
) {
  const storedItem = sessionStorage.getItem(storageKey);
  const initializer =
    storedItem === null ? initialState : (JSON.parse(storedItem) as State);
  const state = useState(initializer);
  const storageKeyRef = useRef(storageKey);

  useEffect(() => {
    sessionStorage.setItem(storageKeyRef.current, JSON.stringify(state[0]));
  }, [state]);

  return state;
}
