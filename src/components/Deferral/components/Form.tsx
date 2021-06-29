import { ChangeEvent } from "react";
import { Dayjs } from "dayjs";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { DatePicker } from "components/DatePicker";
import { DeferralState, useDispatch } from "../state";
import { useStyles } from "../styles";
import { categoryMap, isEmptyString, typeMap, types } from "../utils";

export function Form(props: { onAccept: () => void; state: DeferralState }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <TypeField state={props.state} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <NumberField state={props.state} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CategoryField state={props.state} />
        <DurationField state={props.state} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <DateField onAccept={props.onAccept} state={props.state} />
      </Grid>
    </Grid>
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
  const classes = useStyles();

  function handleChangeDate(date: Dayjs | null) {
    dispatch({
      type: "CHANGE_DATE",
      payload: date,
    });
  }

  return (
    <DatePicker
      classes={classes.input}
      disabled={isEmptyString(props.state.duration)}
      label="Deferral Date"
      onAccept={props.onAccept}
      onChange={handleChangeDate}
      pickerId="deferral-date"
      value={props.state.date}
    />
  );
}
