import Box from "@material-ui/core/Box";
import dayjs, { Dayjs } from "dayjs";
import { Status, StatusBgcolor, StatusColor } from "./types";

export function IntervalStatusText(props: {
  date: Dayjs | null;
  duration: number;
  text: string;
}) {
  let color: StatusColor;
  let bgcolor: StatusBgcolor;
  if (props.date) {
    const days = dayjs().diff(props.date, "days");
    color =
      days < props.duration
        ? Status.okay
        : days === props.duration
        ? Status.due
        : Status.overdueText;
  }
  if (color === Status.overdueText) {
    bgcolor = Status.overdueBg;
  }

  return (
    <Box component="span" color={color} bgcolor={bgcolor} px={1}>
      {props.text}
    </Box>
  );
}
