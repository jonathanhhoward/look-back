import { ChangeEvent, FC } from "react";
import { Dayjs } from "dayjs";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { useDeferralContext } from "App/Deferral/context";
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

const GridContainer: FC = (props) => (
  <Grid container spacing={2}>
    {props.children}
  </Grid>
);

const GridItem: FC = (props) => (
  <Grid item xs={12} sm={6} md={3}>
    {props.children}
  </Grid>
);

function TypeField() {
  const { state, dispatch } = useDeferralContext();
  const classes = useStyles();
  const typeOptions = types.map((type) => (
    <MenuItem key={type} value={type}>
      {type}
    </MenuItem>
  ));

  function changeType(event: ChangeEvent<HTMLInputElement>) {
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
      onChange={changeType}
      select
      value={state.type}
      variant="filled"
    >
      {typeOptions}
    </TextField>
  );
}

function NumberField() {
  const { state, dispatch } = useDeferralContext();
  const classes = useStyles();

  function changeNumber(event: ChangeEvent<HTMLInputElement>) {
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
      onChange={changeNumber}
      value={state.number}
      variant="filled"
    />
  );
}

function CategoryField() {
  const { state, dispatch } = useDeferralContext();
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

  function changeCategory(event: ChangeEvent<HTMLInputElement>) {
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
      onChange={changeCategory}
      select
      value={state.category}
      variant="filled"
    >
      {categoryOptions}
    </TextField>
  );
}

function DurationField() {
  const { state, dispatch } = useDeferralContext();
  const classes = useStyles();
  const disabled = categoryMap.get(state.category)?.disabled ?? true;

  function changeDuration(event: ChangeEvent<HTMLInputElement>) {
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
      onChange={changeDuration}
      type="number"
      value={state.duration}
      variant="filled"
    />
  );
}

function DateField(props: { onAccept: () => void }) {
  const { state, dispatch } = useDeferralContext();
  const classes = useStyles();

  function changeDate(date: Dayjs | null) {
    dispatch({
      type: "CHANGE_DATE",
      payload: date,
    });
  }

  return (
    <DatePicker
      classes={classes.input}
      disabled={isEmptyString(state.duration)}
      id="deferral-date"
      label="Deferral Date"
      onAccept={props.onAccept}
      onChange={changeDate}
      value={state.date}
    />
  );
}
