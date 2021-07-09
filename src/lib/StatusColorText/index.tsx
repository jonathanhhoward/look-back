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
    bgcolor =
      daysSinceDate > props.duration
        ? Status.overdue
        : daysSinceDate === props.duration
        ? Status.due
        : Status.okay;
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
