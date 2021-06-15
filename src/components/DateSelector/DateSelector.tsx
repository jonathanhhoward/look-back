import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { makeStyles } from "@material-ui/core/styles";
import DayjsUtils from "@date-io/dayjs";

interface DateSelectorProps {
  disabled?: boolean;
  label: string;
  onAccept: (date: MaterialUiPickersDate) => void;
  onChange: (date: MaterialUiPickersDate) => void;
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
  label,
  onAccept,
  onChange,
  pickerId,
  value,
  width,
}: DateSelectorProps) {
  const classes = useStyles({ width });

  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <DatePicker
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
