import Box from "@material-ui/core/Box";
import dayjs, { Dayjs } from "dayjs";
import { StatusBgcolor, StatusColor } from "./types";

interface IntervalStatusTextProps {
  date: Dayjs | null;
  duration: number;
  text: string;
}

export function IntervalStatusText({
  date,
  duration,
  text,
}: IntervalStatusTextProps) {
  let color: StatusColor;
  let bgcolor: StatusBgcolor;
  if (date) {
    const days = dayjs().diff(date, "days");
    color =
      days < duration
        ? "success.main"
        : days === duration
        ? "warning.main"
        : "error.contrastText";
  }
  if (color === "error.contrastText") {
    bgcolor = "error.main";
  }

  return (
    <Box component="span" color={color} bgcolor={bgcolor} px={1}>
      {text}
    </Box>
  );
}
