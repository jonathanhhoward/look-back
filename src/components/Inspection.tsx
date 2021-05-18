import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import LuxonUtils from "@date-io/luxon";
import { ExpandMore } from "@material-ui/icons";
import { DateTime, Interval } from "luxon";

interface Props {
  title: string;
  duration: number;
  initialDate?: string;
}

export function Inspection({ title, duration, initialDate }: Props) {
  const init = initialDate ? DateTime.fromISO(initialDate) : null;
  const [date, setDate] = useState<MaterialUiPickersDate>(init);
  let color;
  if (date) {
    const interval = Interval.fromDateTimes(date, DateTime.now());
    const days = Math.floor(interval.length("days"));
    if (days < duration) color = "success.main";
    else if (days === duration) color = "warning.main";
  }
  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <h3>
            <Box component="span" color={color}>
              {title}
            </Box>
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          <DatePicker
            disableFuture
            disableToolbar
            emptyLabel="mm/dd/yyyy"
            format="MM/dd/yyyy"
            id={`inspection-date-${title}`}
            inputVariant="filled"
            label="Inspection Date"
            onChange={setDate}
            value={date}
          />
        </AccordionDetails>
      </Accordion>
    </MuiPickersUtilsProvider>
  );
}
