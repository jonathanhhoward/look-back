import { ChangeEvent } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../styles";
import { DeferralState } from "../state";
import { isEmptyString, typeMap } from "../utils";

export function CategoryField(props: {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  state: DeferralState;
}) {
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

  return (
    <TextField
      className={classes.splitInput}
      disabled={isEmptyString(props.state.number)}
      id="category"
      label="Category"
      onChange={props.onChange}
      select
      value={props.state.category}
      variant="filled"
    >
      {categoryOptions}
    </TextField>
  );
}
