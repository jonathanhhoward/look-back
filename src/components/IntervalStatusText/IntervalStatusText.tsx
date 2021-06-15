import Box from "@material-ui/core/Box";
import dayjs, { Dayjs } from "dayjs";

type StatusColor =
  | "success.main"
  | "warning.main"
  | "error.contrastText"
  | undefined;
type StatusBgcolor = "error.main" | undefined;

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
    color === "error.contrastText" && (bgcolor = "error.main");
  }

  return (
    <Box component="span" color={color} bgcolor={bgcolor}>
      {text}
    </Box>
  );
}
