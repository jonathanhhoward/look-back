import { ReactEventHandler } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionActions from "@material-ui/core/AccordionActions";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DeferralProvider } from "App/Deferral/context";
import { DeleteButton } from "App/Deferral/DeleteButton";
import { Form } from "App/Deferral/Form";
import { Header } from "App/Deferral/Header";
import { useAutoCollapse } from "lib/useAutoCollapse";

export function Deferral(props: {
  deleteId: string;
  onClickDelete: ReactEventHandler;
}) {
  const { expanded, changeExpanded, autoCollapse } = useAutoCollapse();

  return (
    <DeferralProvider>
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
          <DeleteButton id={props.deleteId} onClick={props.onClickDelete} />
        </AccordionActions>
      </Accordion>
    </DeferralProvider>
  );
}
