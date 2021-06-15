import { useState } from "react";
import { Dayjs } from "dayjs";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DateSelector, IntervalStatusText } from "components";

interface InspectionProps {
  title: string;
  duration: number;
}

export function Inspection({ title, duration }: InspectionProps) {
  const [date, setDate] = useState<Dayjs | null>(null);

  return (
    <Accordion>
      <AccordionSummary
        aria-controls="inspection-details"
        expandIcon={<ExpandMoreIcon />}
        id="inspection-summary"
      >
        <Typography variant="subtitle1">
          <IntervalStatusText date={date} duration={duration} text={title} />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <DateSelector
          handleChange={setDate}
          label="Inspection Date"
          pickerId={title}
          value={date}
        />
      </AccordionDetails>
    </Accordion>
  );
}
