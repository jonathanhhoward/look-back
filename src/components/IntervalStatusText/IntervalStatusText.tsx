import Box from "@material-ui/core/Box";
import dayjs, { Dayjs } from "dayjs";
import { StatusBgcolor, StatusColor } from "./types";

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
        ? "success.main"
        : days === props.duration
        ? "warning.main"
        : "error.contrastText";
  }
  if (color === "error.contrastText") {
    bgcolor = "error.main";
  }

  return (
    <Box component="span" color={color} bgcolor={bgcolor} px={1}>
      {props.text}
    </Box>
  );
}
