import DayjsUtils from "@date-io/dayjs";
import {
  DatePicker as MuiDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

export function DatePicker(props: {
  classes?: string;
  disabled?: boolean;
  id: string;
  label: string;
  onAccept: (date: MaterialUiPickersDate) => void;
  onChange: (date: MaterialUiPickersDate) => void;
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
        id={props.id}
        inputVariant="filled"
        label={props.label}
        onAccept={props.onAccept}
        onChange={props.onChange}
        value={props.value}
      />
    </MuiPickersUtilsProvider>
  );
}
