import { ReactEventHandler } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionActions from "@material-ui/core/AccordionActions";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DeferralContext } from "App/Deferral/context";
import { DeleteButton } from "App/Deferral/DeleteButton";
import { Form } from "App/Deferral/Form";
import { Header } from "App/Deferral/Header";
import { useAutoCollapse } from "lib/useAutoCollapse";
import { DeferralState } from "App/Deferral/types";
import { reducer } from "App/Deferral/reducer";
import { useSessionReducer } from "lib/useSessionReducer";

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
  id: string;
  onClickDelete: ReactEventHandler;
}) {
  const [state, dispatch] = useSessionReducer(props.id, reducer, initialState);
  const { expanded, changeExpanded, autoCollapse } = useAutoCollapse(
    state.date === null
  );

  return (
    <DeferralContext.Provider value={{ state, dispatch }}>
      <Accordion expanded={expanded} onChange={changeExpanded}>
        <AccordionSummary
          aria-controls="deferral-details"
          expandIcon={<ExpandMoreIcon />}
          id="deferral-summary"
        >
          <Header />
        </AccordionSummary>
        <AccordionDetails>
          <Form onAccept={autoCollapse} />
        </AccordionDetails>
        <AccordionActions>
          <DeleteButton id={props.id} onClick={props.onClickDelete} />
        </AccordionActions>
      </Accordion>
    </DeferralContext.Provider>
  );
}
