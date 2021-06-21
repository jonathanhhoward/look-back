import { ChangeEvent, ReactEventHandler, useReducer } from "react";
import { Dayjs } from "dayjs";
import Accordion from "@material-ui/core/Accordion";
import AccordionActions from "@material-ui/core/AccordionActions";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useAutoCollapse } from "utils";
import {
  CategoryField,
  DateField,
  DurationField,
  Header,
  NumberField,
  TypeField,
} from "./components";
import { DeferralState, reducer } from "./state";

interface DeferralProps {
  deleteId: string;
  onClickDelete: ReactEventHandler;
}

const initialState: DeferralState = {
  title: "",
  subtitle: "",
  type: "",
  number: "",
  category: "",
  duration: "",
  date: null,
};

export function Deferral({ deleteId, onClickDelete }: DeferralProps) {
  const { expanded, changeExpanded, autoCollapse } = useAutoCollapse();
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChangeType(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "CHANGE_TYPE",
      payload: event.target.value,
    });
  }

  function handleChangeNumber(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "CHANGE_NUMBER",
      payload: event.target.value,
    });
  }

  function handleChangeCategory(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "CHANGE_CATEGORY",
      payload: event.target.value,
    });
  }

  function handleChangeDuration(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "CHANGE_DURATION",
      payload: event.target.value,
    });
  }

  function handleChangeDate(date: Dayjs | null) {
    dispatch({
      type: "CHANGE_DATE",
      payload: date,
    });
  }

  return (
    <Accordion expanded={expanded} onChange={changeExpanded}>
      <AccordionSummary
        aria-controls="deferral-details"
        expandIcon={<ExpandMoreIcon />}
        id="deferral-summary"
      >
        <Header state={state} />
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TypeField onChange={handleChangeType} state={state} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NumberField onChange={handleChangeNumber} state={state} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CategoryField onChange={handleChangeCategory} state={state} />
            <DurationField onChange={handleChangeDuration} state={state} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DateField
              onAccept={autoCollapse}
              onChange={handleChangeDate}
              state={state}
            />
          </Grid>
        </Grid>
      </AccordionDetails>
      <AccordionActions>
        <IconButton
          aria-label="delete deferral"
          id={deleteId}
          onClick={onClickDelete}
        >
          <DeleteIcon />
        </IconButton>
      </AccordionActions>
    </Accordion>
  );
}
