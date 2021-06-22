import { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { DeferralState } from "../state";
import { useStyles } from "../styles";
import { isEmptyString } from "../utils";

export function NumberField(props: {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  state: DeferralState;
}) {
  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      disabled={isEmptyString(props.state.type)}
      id="number"
      label="Number"
      onChange={props.onChange}
      value={props.state.number}
      variant="filled"
    />
  );
}
