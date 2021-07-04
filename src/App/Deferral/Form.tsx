import { ChangeEvent, ReactNode } from "react";
import { Dayjs } from "dayjs";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { useDeferral } from "App/Deferral/context";
import { categoryMap, typeMap, types } from "App/Deferral/datasets";
import { useStyles } from "App/Deferral/styles";
import { DatePicker } from "lib/DatePicker";
import { isEmptyString } from "lib/isEmptyString";

export function Form(props: { onAccept: () => void }) {
  return (
    <GridContainer>
      <GridItem>
        <TypeField />
      </GridItem>
      <GridItem>
        <NumberField />
      </GridItem>
      <GridItem>
        <CategoryField />
        <DurationField />
      </GridItem>
      <GridItem>
        <DateField onAccept={props.onAccept} />
      </GridItem>
    </GridContainer>
  );
}

function GridContainer(props: { children: ReactNode }) {
  return (
    <Grid container spacing={2}>
      {props.children}
    </Grid>
  );
}

function GridItem(props: { children: ReactNode }) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      {props.children}
    </Grid>
  );
}

function TypeField() {
  const { state, dispatch } = useDeferral();
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
      value={state.type}
      variant="filled"
    >
      {typeOptions}
    </TextField>
  );
}

function NumberField() {
  const { state, dispatch } = useDeferral();
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
      disabled={isEmptyString(state.type)}
      id="number"
      label="Number"
      onChange={handleChangeNumber}
      value={state.number}
      variant="filled"
    />
  );
}

function CategoryField() {
  const { state, dispatch } = useDeferral();
  const classes = useStyles();
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

  function handleChangeCategory(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "CHANGE_CATEGORY",
      payload: event.target.value,
    });
  }

  return (
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
  );
}

function DurationField() {
  const { state, dispatch } = useDeferral();
  const classes = useStyles();
  const disabled = categoryMap.get(state.category)?.disabled ?? true;

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
      value={state.duration}
      variant="filled"
    />
  );
}

function DateField(props: { onAccept: () => void }) {
  const { state, dispatch } = useDeferral();
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
      disabled={isEmptyString(state.duration)}
      label="Deferral Date"
      onAccept={props.onAccept}
      onChange={handleChangeDate}
      pickerId="deferral-date"
      value={state.date}
    />
  );
}
