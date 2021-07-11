import { Dayjs } from "dayjs";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DatePicker } from "lib/DatePicker";
import { StatusColorText } from "lib/StatusColorText";
import { useAutoCollapse } from "lib/useAutoCollapse";
import { useSessionState } from "lib/useSessionState";

const initialState: Dayjs | null = null;

export function Inspection(props: { title: string; duration: number }) {
  const [date, setDate] = useSessionState(props.title, initialState);
  const { expanded, changeExpanded, autoCollapse } = useAutoCollapse(
    date === null
  );

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
          id={props.title}
          label="Inspection Date"
          onAccept={autoCollapse}
          onChange={setDate}
          value={date}
        />
      </AccordionDetails>
    </Accordion>
  );
}
