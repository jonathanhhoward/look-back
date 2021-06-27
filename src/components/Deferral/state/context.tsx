import { createContext, useContext } from "react";
import { DeferralDispatch } from "./types";

export const DispatchContext = createContext<DeferralDispatch | undefined>(
  undefined
);

export function useDispatch() {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error(
      "useDispatch must be used within a DispatchContext.Provider"
    );
  }
  return context;
}
