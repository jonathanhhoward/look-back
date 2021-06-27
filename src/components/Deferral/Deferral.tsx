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
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DatePicker, IntervalStatusText } from "components";
import { useAutoCollapse } from "utils";
import { DeferralState, DispatchContext, reducer, useDispatch } from "./state";
import { useStyles } from "./styles";
import { categoryMap, isEmptyString, typeMap, types } from "./utils";

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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <TypeField state={state} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <NumberField state={state} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CategoryField state={state} />
              <DurationField state={state} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DateField onAccept={autoCollapse} state={state} />
            </Grid>
          </Grid>
        </AccordionDetails>
        <AccordionActions>
          <IconButton
            aria-label="delete deferral"
            id={props.deleteId}
            onClick={props.onClickDelete}
          >
            <DeleteIcon />
          </IconButton>
        </AccordionActions>
      </Accordion>
    </DispatchContext.Provider>
  );
}

function Header(props: { state: DeferralState }) {
  const classes = useStyles();
  const title = isEmptyString(props.state.title)
    ? "Deferral Type"
    : props.state.title;
  const subtitle = isEmptyString(props.state.subtitle)
    ? "Deferral Number"
    : props.state.subtitle;

  return (
    <>
      <Typography className={classes.title} variant="subtitle1">
        <IntervalStatusText
          date={props.state.date}
          duration={Number(props.state.duration)}
          text={title}
        />
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        {subtitle}
      </Typography>
    </>
  );
}

function TypeField(props: { state: DeferralState }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const typeOptions = types.map((type) => (
    <MenuItem key={type} value={type}>
      {type}
    </MenuItem>
  ));

  function handleChangeType(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "CHANGE_TYPE",
      payload: event.target.value,
    });
  }

  return (
    <TextField
      className={classes.input}
      id="type"
      label="Type"
      onChange={handleChangeType}
      select
      value={props.state.type}
      variant="filled"
    >
      {typeOptions}
    </TextField>
  );
}

function NumberField(props: { state: DeferralState }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  function handleChangeNumber(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "CHANGE_NUMBER",
      payload: event.target.value,
    });
  }

  return (
    <TextField
      className={classes.input}
      disabled={isEmptyString(props.state.type)}
      id="number"
      label="Number"
      onChange={handleChangeNumber}
      value={props.state.number}
      variant="filled"
    />
  );
}

function CategoryField(props: { state: DeferralState }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const categories = typeMap.get(props.state.type);
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

  function handleChangeCategory(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "CHANGE_CATEGORY",
      payload: event.target.value,
    });
  }

  return (
    <TextField
      className={classes.splitInput}
      disabled={isEmptyString(props.state.number)}
      id="category"
      label="Category"
      onChange={handleChangeCategory}
      select
      value={props.state.category}
      variant="filled"
    >
      {categoryOptions}
    </TextField>
  );
}

function DurationField(props: { state: DeferralState }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const disabled = categoryMap.get(props.state.category)?.disabled ?? true;

  function handleChangeDuration(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "CHANGE_DURATION",
      payload: event.target.value,
    });
  }

  return (
    <TextField
      className={classes.splitInput}
      disabled={disabled}
      id="duration"
      inputProps={{ min: "1" }}
      label="Duration"
      onChange={handleChangeDuration}
      type="number"
      value={props.state.duration}
      variant="filled"
    />
  );
}

function DateField(props: { onAccept: () => void; state: DeferralState }) {
  const dispatch = useDispatch();

  function handleChangeDate(date: Dayjs | null) {
    dispatch({
      type: "CHANGE_DATE",
      payload: date,
    });
  }

  return (
    <DatePicker
      disabled={isEmptyString(props.state.duration)}
      label="Deferral Date"
      onAccept={props.onAccept}
      onChange={handleChangeDate}
      pickerId="deferral-date"
      value={props.state.date}
      width="100%"
    />
  );
}
