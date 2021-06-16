import { useState } from "react";
import { Dayjs } from "dayjs";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DateSelector, IntervalStatusText } from "components";
import { useAutoCollapse } from "utils";

export function Inspection({
  title,
  duration,
}: {
  title: string;
  duration: number;
}) {
  const [date, setDate] = useState<Dayjs | null>(null);
  const { expanded, changeExpanded, autoCollapse } = useAutoCollapse();

  return (
    <Accordion expanded={expanded} onChange={changeExpanded}>
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
          onAccept={autoCollapse}
          onChange={setDate}
          pickerId={title}
          value={date}
        />
      </AccordionDetails>
    </Accordion>
  );
}
