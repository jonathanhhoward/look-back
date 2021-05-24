import { SetStateAction } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import LuxonUtils from "@date-io/luxon";

interface DateSelectorProps {
  date: MaterialUiPickersDate;
  label: string;
  pickerId: string;
  setDate: (
    value: SetStateAction<MaterialUiPickersDate> | MaterialUiPickersDate
  ) => void;
}

export function DateSelector({
  date,
  label,
  pickerId,
  setDate,
}: DateSelectorProps) {
  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <DatePicker
        disableFuture
        disableToolbar
        format="MM/dd/yyyy"
        id={pickerId}
        inputVariant="filled"
        label={label}
        onChange={setDate}
        value={date}
      />
    </MuiPickersUtilsProvider>
  );
}
