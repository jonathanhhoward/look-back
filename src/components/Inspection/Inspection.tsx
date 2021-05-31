import { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DateTime } from "luxon";
import { DateSelector } from "components";
import { InspectionStatusText } from "./InspectionStatusText";

interface InspectionProps {
  title: string;
  duration: number;
}

export function Inspection({ title, duration }: InspectionProps) {
  const [date, setDate] = useState<DateTime | null>(null);

  return (
    <Accordion>
      <AccordionSummary
        aria-controls="inspection-details"
        expandIcon={<ExpandMoreIcon />}
        id="inspection-summary"
      >
        <Typography variant="subtitle1">
          <InspectionStatusText date={date} duration={duration} text={title} />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <DateSelector
          handleChange={setDate}
          label="Inspection Date"
          pickerId={`inspection-date-${title}`}
          value={date}
        />
      </AccordionDetails>
    </Accordion>
  );
}
