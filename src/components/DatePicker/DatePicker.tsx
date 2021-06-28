import DayjsUtils from "@date-io/dayjs";
import {
  DatePicker as MuiDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

export function DatePicker(props: {
  classes?: string;
  disabled?: boolean;
  label: string;
  onAccept: (date: MaterialUiPickersDate) => void;
  onChange: (date: MaterialUiPickersDate) => void;
  pickerId: string;
  value: MaterialUiPickersDate;
}) {
  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <MuiDatePicker
        autoOk
        className={props.classes}
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
