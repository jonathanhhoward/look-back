import { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import LuxonUtils from "@date-io/luxon";

interface Props {
  title: string;
}

export function Inspection({ title }: Props) {
  const [date, setDate] = useState<MaterialUiPickersDate>(null);
  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <h3>{title}</h3>
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
    </MuiPickersUtilsProvider>
  );
}
