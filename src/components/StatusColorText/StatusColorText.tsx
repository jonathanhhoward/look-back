import Box from "@material-ui/core/Box";
import dayjs, { Dayjs } from "dayjs";
import { Status, StatusBgcolor, StatusColor } from "./types";

export function StatusColorText(props: {
  date: Dayjs | null;
  duration: number;
  text: string;
}) {
  let color: StatusColor;
  let bgcolor: StatusBgcolor;
  if (props.date) {
    const days = dayjs().diff(props.date, "days");
    if (days > props.duration) {
      color = Status.overdueText;
      bgcolor = Status.overdueBg;
    } else if (days === props.duration) {
      color = Status.due;
    } else {
      color = Status.okay;
    }
  }

  return (
    <Box component="span" color={color} bgcolor={bgcolor} px={1}>
      {props.text}
    </Box>
  );
}
