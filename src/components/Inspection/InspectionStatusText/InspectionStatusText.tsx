import Box from "@material-ui/core/Box";
import { DateTime, Interval } from "luxon";

type InspectionColor = "success.main" | "warning.main" | "error.contrastText";
type InspectionBgcolor = "error.main" | undefined;

interface InspectionStatus {
  color: InspectionColor;
  bgcolor: InspectionBgcolor;
}

function inspectionStatus(
  date: DateTime | null,
  duration: number
): InspectionStatus | undefined {
  if (!date) return;
  const interval = Interval.fromDateTimes(date, DateTime.now());
  const days = Math.floor(interval.length("days"));
  const color: InspectionColor =
    days < duration
      ? "success.main"
      : days === duration
      ? "warning.main"
      : "error.contrastText";
  const bgcolor: InspectionBgcolor =
    color === "error.contrastText" ? "error.main" : undefined;
  return { color, bgcolor };
}

interface IntervalStatusTextProps {
  date: DateTime | null;
  duration: number;
  text: string;
}

export function InspectionStatusText({
  date,
  duration,
  text,
}: IntervalStatusTextProps) {
  const status = inspectionStatus(date, duration);

  return (
    <Box component="span" color={status?.color} bgcolor={status?.bgcolor}>
      {text}
    </Box>
  );
}
