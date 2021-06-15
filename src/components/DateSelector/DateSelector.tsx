import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { makeStyles } from "@material-ui/core/styles";
import DayjsUtils from "@date-io/dayjs";

interface DateSelectorProps {
  disabled?: boolean;
  label: string;
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
  onChange,
  label,
  pickerId,
  value,
  width,
}: DateSelectorProps) {
  const classes = useStyles({ width });

  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <DatePicker
        className={classes.datepicker}
        disabled={disabled}
        disableFuture
        disableToolbar
        format="MM/DD/YYYY"
        id={pickerId}
        inputVariant="filled"
        label={label}
        onChange={onChange}
        value={value}
      />
    </MuiPickersUtilsProvider>
  );
}
