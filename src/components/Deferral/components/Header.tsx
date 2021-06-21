import Typography from "@material-ui/core/Typography";
import { IntervalStatusText } from "components";
import { useStyles } from "../styles";
import { DeferralState } from "../types";
import { isEmptyString } from "../utils";

interface HeaderProps {
  state: DeferralState;
}

export function Header({ state }: HeaderProps) {
  const classes = useStyles();
  const title = isEmptyString(state.title) ? "Deferral Type" : state.title;
  const subtitle = isEmptyString(state.subtitle)
    ? "Deferral Number"
    : state.subtitle;

  return (
    <>
      <Typography className={classes.title} variant="subtitle1">
        <IntervalStatusText
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
