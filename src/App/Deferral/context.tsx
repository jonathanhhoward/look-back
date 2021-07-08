import { createContext, useContext } from "react";
import { DeferralDispatch, DeferralState } from "App/Deferral/types";

interface Context {
  state: DeferralState;
  dispatch: DeferralDispatch;
}

export const DeferralContext = createContext<Context | undefined>(undefined);

export function useDeferralContext() {
  const context = useContext(DeferralContext);
  if (context === undefined) {
    throw new Error(
      "useDeferralContext must be used within a DeferralContext.Provider"
    );
  }
  return context;
}
