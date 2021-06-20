import { ChangeEvent } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { typeMap } from "../datasets";
import { isEmptyString } from "../isEmptyString";
import { useStyles } from "../styles";
import { DeferralState } from "../types";

interface CategorySelectProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  state: DeferralState;
}

export function CategorySelect({ onChange, state }: CategorySelectProps) {
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

  return (
    <TextField
      className={classes.splitInput}
      disabled={isEmptyString(state.number)}
      id="category"
      label="Category"
      onChange={onChange}
      select
      value={state.category}
      variant="filled"
    >
      {categoryOptions}
    </TextField>
  );
}
