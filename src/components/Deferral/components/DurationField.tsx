import { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { DeferralState } from "../state";
import { useStyles } from "../styles";
import { categoryMap } from "../utils";

export function DurationField(props: {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  state: DeferralState;
}) {
  const classes = useStyles();
  const disabled = categoryMap.get(props.state.category)?.disabled ?? true;

  return (
    <TextField
      className={classes.splitInput}
      disabled={disabled}
      id="duration"
      inputProps={{ min: "1" }}
      label="Duration"
      onChange={props.onChange}
      type="number"
      value={props.state.duration}
      variant="filled"
    />
  );
}
