import Typography from "@material-ui/core/Typography";
import { IntervalStatusText } from "components";
import { DeferralState } from "../state";
import { useStyles } from "../styles";
import { isEmptyString } from "../utils";

export function Header(props: { state: DeferralState }) {
  const classes = useStyles();
  const title = isEmptyString(props.state.title)
    ? "Deferral Type"
    : props.state.title;
  const subtitle = isEmptyString(props.state.subtitle)
    ? "Deferral Number"
    : props.state.subtitle;

  return (
    <>
      <Typography className={classes.title} variant="subtitle1">
        <IntervalStatusText
          date={props.state.date}
          duration={Number(props.state.duration)}
          text={title}
        />
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        {subtitle}
      </Typography>
    </>
  );
}
