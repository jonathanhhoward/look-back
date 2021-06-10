import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { makeStyles } from "@material-ui/core/styles";
import LuxonUtils from "@date-io/luxon";

interface DateSelectorProps {
  disabled?: boolean;
  handleChange: (date: MaterialUiPickersDate) => void;
  label: string;
  pickerId: string;
  value: MaterialUiPickersDate;
  width?: string;
}

interface DateSelectorStyleProps {
  width?: string;
}

const useStyles = makeStyles({
  datepicker: ({ width }: DateSelectorStyleProps) => ({
    width,
  }),
});

export function DateSelector({
  disabled,
  handleChange,
  label,
  pickerId,
  value,
  width,
}: DateSelectorProps) {
  const classes = useStyles({ width });

  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <DatePicker
        className={classes.datepicker}
        disabled={disabled}
        disableFuture
        disableToolbar
        format="MM/dd/yyyy"
        id={pickerId}
        inputVariant="filled"
        label={label}
        onChange={handleChange}
        value={value}
      />
    </MuiPickersUtilsProvider>
  );
}