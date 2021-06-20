import DayjsUtils from "@date-io/dayjs";
import {
  DatePicker as MuiDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { makeStyles } from "@material-ui/core/styles";

interface DatePickerProps {
  disabled?: boolean;
  label: string;
  onAccept: (date: MaterialUiPickersDate) => void;
  onChange: (date: MaterialUiPickersDate) => void;
  pickerId: string;
  value: MaterialUiPickersDate;
  width?: string;
}

interface StyleProps {
  width?: string;
}

const useStyles = makeStyles({
  datepicker: ({ width }: StyleProps) => ({
    width,
  }),
});

export function DatePicker({
  disabled,
  label,
  onAccept,
  onChange,
  pickerId,
  value,
  width,
}: DatePickerProps) {
  const classes = useStyles({ width });

  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <MuiDatePicker
        autoOk
        className={classes.datepicker}
        disabled={disabled}
        disableFuture
        disableToolbar
        format="MM/DD/YYYY"
        id={pickerId}
        inputVariant="filled"
        label={label}
        onAccept={onAccept}
        onChange={onChange}
        value={value}
      />
    </MuiPickersUtilsProvider>
  );
}
