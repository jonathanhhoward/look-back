import { createContext, FC, useContext, useReducer } from "react";
import { reducer } from "App/Deferral/reducer";
import { DeferralDispatch, DeferralState } from "App/Deferral/types";

interface Context {
  state: DeferralState;
  dispatch: DeferralDispatch;
}

const DeferralContext = createContext<Context | undefined>(undefined);

const initialState: DeferralState = {
  title: "",
  subtitle: "",
  type: "",
  number: "",
  category: "",
  duration: "",
  date: null,
};

export const DeferralProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DeferralContext.Provider value={{ state, dispatch }}>
      {children}
    </DeferralContext.Provider>
  );
};

export function useDeferral() {
  const context = useContext(DeferralContext);
  if (context === undefined) {
    throw new Error(
      "useDispatch must be used within a DispatchContext.Provider"
    );
  }
  return context;
}
