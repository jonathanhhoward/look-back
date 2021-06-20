import { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { categoryMap } from "../datasets";
import { useStyles } from "../styles";
import { DeferralState } from "../types";

interface DurationFieldProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  state: DeferralState;
}

export function DurationField({ onChange, state }: DurationFieldProps) {
  const classes = useStyles();
  const disabled = categoryMap.get(state.category)?.disabled ?? true;

  return (
    <TextField
      className={classes.splitInput}
      disabled={disabled}
      id="duration"
      inputProps={{ min: "1" }}
      label="Duration"
      onChange={onChange}
      type="number"
      value={state.duration}
      variant="filled"
    />
  );
}
