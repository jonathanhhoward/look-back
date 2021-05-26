import { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DateTime, Interval } from "luxon";
import { DateSelector } from "components";

interface InspectionProps {
  title: string;
  duration: number;
  initialDate?: string;
}

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

export function Inspection({ title, duration, initialDate }: InspectionProps) {
  const init = initialDate ? DateTime.fromISO(initialDate) : null;
  const [date, setDate] = useState<DateTime | null>(init);
  const status = inspectionStatus(date, duration);
  return (
    <Accordion>
      <AccordionSummary
        aria-controls="inspection-details"
        expandIcon={<ExpandMoreIcon />}
        id="inspection-summary"
      >
        <Typography variant="subtitle1">
          <Box component="span" color={status?.color} bgcolor={status?.bgcolor}>
            {title}
          </Box>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <DateSelector
          date={date}
          label="Inspection Date"
          pickerId={`inspection-date-${title}`}
          setDate={setDate}
        />
      </AccordionDetails>
    </Accordion>
  );
}
