import { ChangeEvent, ReactEventHandler, useState } from "react";
import { Dayjs } from "dayjs";
import Accordion from "@material-ui/core/Accordion";
import AccordionActions from "@material-ui/core/AccordionActions";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DateSelector, IntervalStatusText } from "components";
import { useAutoCollapse } from "utils";
import { categoryMap, typeMap, types } from "./datasets";
import { useStyles } from "./styles";
import { DeferralCategory, DeferralState, DeferralType } from "./types";

interface DeferralProps {
  deleteId: string;
  onClickDelete: ReactEventHandler;
}

export function Deferral({ deleteId, onClickDelete }: DeferralProps) {
  const classes = useStyles();
  const { expanded, changeExpanded, autoCollapse } = useAutoCollapse();
  const [state, setState] = useState<DeferralState>({
    title: "",
    subtitle: "",
    type: "",
    number: "",
    category: "",
    duration: "",
    date: null,
  });
  const typeOptions = types.map((type) => (
    <MenuItem key={type} value={type}>
      {type}
    </MenuItem>
  ));
  const categories = state.type ? typeMap.get(state.type) : undefined;
  const categoryOptions = categories ? (
    categories.map((category) => (
      <MenuItem key={category} value={category}>
        {category}
      </MenuItem>
    ))
  ) : (
    <MenuItem />
  );
  const durationDisabled =
    !state.category || categoryMap.get(state.category)?.disabled;

  function handleChangeType(event: ChangeEvent<HTMLInputElement>) {
    setState({
      ...state,
      title: event.target.value,
      type: event.target.value as DeferralType,
      category: "",
      duration: "",
      date: null,
    });
  }

  function handleChangeNumber(event: ChangeEvent<HTMLInputElement>) {
    setState({
      ...state,
      subtitle: event.target.value,
      number: event.target.value,
    });
  }

  function handleChangeCategory(event: ChangeEvent<HTMLInputElement>) {
    const category = event.target.value as DeferralCategory;
    setState({
      ...state,
      category,
      duration: categoryMap.get(category)?.value || "",
    });
  }

  function handleChangeDuration(event: ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);
    setState({
      ...state,
      duration: value < 1 ? "1" : Math.floor(value).toString(),
    });
  }

  function handleChangeDate(date: Dayjs | null) {
    setState({
      ...state,
      date,
    });
  }

  return (
    <Accordion expanded={expanded} onChange={changeExpanded}>
      <AccordionSummary
        aria-controls="deferral-details"
        expandIcon={<ExpandMoreIcon />}
        id="deferral-summary"
      >
        <Typography className={classes.title} variant="subtitle1">
          <IntervalStatusText
            date={state.date}
            duration={Number(state.duration)}
            text={state.title || "Deferral Type"}
          />
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1">
          {state.subtitle || "Deferral Number"}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              className={classes.input}
              id="type"
              label="Type"
              onChange={handleChangeType}
              select
              value={state.type}
              variant="filled"
            >
              {typeOptions}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              className={classes.input}
              disabled={!state.type}
              id="number"
              label="Number"
              onChange={handleChangeNumber}
              value={state.number}
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              className={classes.splitInput}
              disabled={!state.number}
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
              disabled={!state.duration}
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
