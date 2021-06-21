import { ChangeEvent } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { DeferralState } from "../state";
import { useStyles } from "../styles";
import { types } from "../utils";

interface TypeFieldProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  state: DeferralState;
}

export function TypeField({ onChange, state }: TypeFieldProps) {
  const classes = useStyles();
  const typeOptions = types.map((type) => (
    <MenuItem key={type} value={type}>
      {type}
    </MenuItem>
  ));

  return (
    <TextField
      className={classes.input}
      id="type"
      label="Type"
      onChange={onChange}
      select
      value={state.type}
      variant="filled"
    >
      {typeOptions}
    </TextField>
  );
}
