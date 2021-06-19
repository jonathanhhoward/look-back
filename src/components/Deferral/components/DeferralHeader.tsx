import Typography from "@material-ui/core/Typography";
import { IntervalStatusText } from "components";
import { isEmptyString } from "components/Deferral/isEmptyString";
import { useStyles } from "../styles";
import { DeferralState } from "../types";

interface DeferralHeaderProps {
  state: DeferralState;
}

export function DeferralHeader({ state }: DeferralHeaderProps) {
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
