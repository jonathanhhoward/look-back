import dayjs, { Dayjs } from "dayjs";
import Box from "@material-ui/core/Box";
import { Status, StatusColor, TextColor } from "lib/StatusColorText/types";

export function StatusColorText(props: {
  date: Dayjs | null;
  duration: number;
  text: string;
}) {
  let color: TextColor;
  let bgcolor: StatusColor;

  if (props.date) {
    color = "primary.contrastText";
    const daysSinceDate = dayjs().diff(props.date, "days");
    if (daysSinceDate > props.duration) {
      bgcolor = Status.overdue;
    } else if (daysSinceDate === props.duration) {
      bgcolor = Status.due;
    } else {
      bgcolor = Status.okay;
    }
  }

  return (
    <Box
      component="span"
      color={color}
      bgcolor={bgcolor}
      borderRadius={4}
      p={1}
    >
      {props.text}
    </Box>
  );
}
