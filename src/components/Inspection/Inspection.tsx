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
  const [expanded, setExpanded] = useState(true);

  function handleChangeExpanded(_event: any, isExpanded: boolean) {
    setExpanded(isExpanded);
  }

  function handleAcceptDate(_date: any) {
    setExpanded(false);
  }

  return (
    <Accordion expanded={expanded} onChange={handleChangeExpanded}>
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
          label="Inspection Date"
          onAccept={handleAcceptDate}
          onChange={setDate}
          pickerId={title}
          value={date}
        />
      </AccordionDetails>
    </Accordion>
  );
}
