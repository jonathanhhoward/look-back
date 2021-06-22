import DayjsUtils from "@date-io/dayjs";
import {
  DatePicker as MuiDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  datepicker: (props: { width?: string }) => ({
    width: props.width,
  }),
});

export function DatePicker(props: {
  disabled?: boolean;
  label: string;
  onAccept: (date: MaterialUiPickersDate) => void;
  onChange: (date: MaterialUiPickersDate) => void;
  pickerId: string;
  value: MaterialUiPickersDate;
  width?: string;
}) {
  const classes = useStyles({ width: props.width });

  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <MuiDatePicker
        autoOk
        className={classes.datepicker}
        disabled={props.disabled}
        disableFuture
        disableToolbar
        format="MM/DD/YYYY"
        id={props.pickerId}
        inputVariant="filled"
        label={props.label}
        onAccept={props.onAccept}
        onChange={props.onChange}
        value={props.value}
      />
    </MuiPickersUtilsProvider>
  );
}
