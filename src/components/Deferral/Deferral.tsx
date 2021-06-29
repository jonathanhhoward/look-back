import { ReactEventHandler, useReducer } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionActions from "@material-ui/core/AccordionActions";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useAutoCollapse } from "utils";
import { DeleteButton, Form, Header } from "./components";
import { DeferralState, DispatchContext, reducer } from "./state";

const initialState: DeferralState = {
  title: "",
  subtitle: "",
  type: "",
  number: "",
  category: "",
  duration: "",
  date: null,
};

export function Deferral(props: {
  deleteId: string;
  onClickDelete: ReactEventHandler;
}) {
  const { expanded, changeExpanded, autoCollapse } = useAutoCollapse();
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <Accordion expanded={expanded} onChange={changeExpanded}>
        <AccordionSummary
          aria-controls="deferral-details"
          expandIcon={<ExpandMoreIcon />}
          id="deferral-summary"
        >
          <Header state={state} />
        </AccordionSummary>
        <AccordionDetails>
          <Form onAccept={autoCollapse} state={state} />
        </AccordionDetails>
        <AccordionActions>
          <DeleteButton id={props.deleteId} onClick={props.onClickDelete} />
        </AccordionActions>
      </Accordion>
    </DispatchContext.Provider>
  );
}
