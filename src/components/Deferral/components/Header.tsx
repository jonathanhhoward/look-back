import Typography from "@material-ui/core/Typography";
import { StatusColorText } from "components";
import { useDeferral } from "../state";
import { useStyles } from "../styles";
import { isEmptyString } from "../utils";

export function Header() {
  const { state } = useDeferral();
  const classes = useStyles();
  const title = isEmptyString(state.title) ? "Deferral Type" : state.title;
  const subtitle = isEmptyString(state.subtitle)
    ? "Deferral Number"
    : state.subtitle;

  return (
    <>
      <Typography className={classes.title} variant="subtitle1">
        <StatusColorText
          date={state.date}
          duration={Number(state.duration)}
          text={title}
        />
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        {subtitle}
      </Typography>
    </>
  );
}
