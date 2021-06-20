import { ChangeEvent, ReactEventHandler, useReducer } from "react";
import { Dayjs } from "dayjs";
import Accordion from "@material-ui/core/Accordion";
import AccordionActions from "@material-ui/core/AccordionActions";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DateSelector } from "components";
import { useAutoCollapse } from "utils";
import {
  changeCategory,
  changeDate,
  changeDuration,
  changeNumber,
  changeType,
} from "./actions";
import { categoryMap, typeMap } from "./datasets";
import { Header, NumberField, TypeSelect } from "./components";
import { isEmptyString } from "./isEmptyString";
import { reducer } from "./reducer";
import { useStyles } from "./styles";
import { DeferralState } from "./types";

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
  const classes = useStyles();
  const { expanded, changeExpanded, autoCollapse } = useAutoCollapse();
  const [state, dispatch] = useReducer(reducer, initialState);
  const categories = typeMap.get(state.type);
  const categoryOptions =
    categories === undefined ? (
      <MenuItem />
    ) : (
      categories.map((category) => (
        <MenuItem key={category} value={category}>
          {category}
        </MenuItem>
      ))
    );
  const durationDisabled = categoryMap.get(state.category)?.disabled ?? true;

  function handleChangeType(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeType(event.target.value));
  }

  function handleChangeNumber(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeNumber(event.target.value));
  }

  function handleChangeCategory(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeCategory(event.target.value));
  }

  function handleChangeDuration(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeDuration(event.target.value));
  }

  function handleChangeDate(date: Dayjs | null) {
    dispatch(changeDate(date));
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
            <TypeSelect onChange={handleChangeType} state={state} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NumberField onChange={handleChangeNumber} state={state} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              className={classes.splitInput}
              disabled={isEmptyString(state.number)}
              id="category"
              label="Category"
              onChange={handleChangeCategory}
              select
              value={state.category}
              variant="filled"
            >
              {categoryOptions}
            </TextField>
            <TextField
              className={classes.splitInput}
              disabled={durationDisabled}
              id="duration"
              inputProps={{ min: "1" }}
              label="Duration"
              onChange={handleChangeDuration}
              type="number"
              value={state.duration}
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DateSelector
              disabled={isEmptyString(state.duration)}
              label="Deferral Date"
              onAccept={autoCollapse}
              onChange={handleChangeDate}
              pickerId="deferral-date"
              value={state.date}
              width="100%"
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
