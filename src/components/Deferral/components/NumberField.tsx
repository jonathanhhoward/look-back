import { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { DeferralState } from "../state";
import { useStyles } from "../styles";
import { isEmptyString } from "../utils";

interface NumberFieldProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  state: DeferralState;
}

export function NumberField({ onChange, state }: NumberFieldProps) {
  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      disabled={isEmptyString(state.type)}
      id="number"
      label="Number"
      onChange={onChange}
      value={state.number}
      variant="filled"
    />
  );
}
