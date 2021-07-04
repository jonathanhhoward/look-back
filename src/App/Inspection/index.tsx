import { useState } from "react";
import { Dayjs } from "dayjs";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DatePicker } from "lib/DatePicker";
import { StatusColorText } from "lib/StatusColorText";
import { useAutoCollapse } from "lib/useAutoCollapse";

export function Inspection(props: { title: string; duration: number }) {
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
          <StatusColorText
            date={date}
            duration={props.duration}
            text={props.title}
          />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <DatePicker
          label="Inspection Date"
          onAccept={autoCollapse}
          onChange={setDate}
          pickerId={props.title}
          value={date}
        />
      </AccordionDetails>
    </Accordion>
  );
}
