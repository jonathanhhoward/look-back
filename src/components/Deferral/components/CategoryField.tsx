import { ChangeEvent } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../styles";
import { DeferralState } from "../state";
import { isEmptyString, typeMap } from "../utils";

interface CategoryFieldProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  state: DeferralState;
}

export function CategoryField({ onChange, state }: CategoryFieldProps) {
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
