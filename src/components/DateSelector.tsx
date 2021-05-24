import { SetStateAction } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { makeStyles } from "@material-ui/core/styles";
import LuxonUtils from "@date-io/luxon";

interface DateSelectorProps {
  date: MaterialUiPickersDate;
  label: string;
  pickerId: string;
  setDate: (
    value: SetStateAction<MaterialUiPickersDate> | MaterialUiPickersDate
  ) => void;
  width?: string;
}

interface DateSelectorStyleProps {
  width?: string;
}

const useStyles = makeStyles({
  datepicker: ({ width }: DateSelectorStyleProps) => ({
    width: width,
  }),
});

export function DateSelector({
  date,
  label,
  pickerId,
  setDate,
  width,
}: DateSelectorProps) {
  const classes = useStyles({ width });

  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <DatePicker
        className={classes.datepicker}
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
