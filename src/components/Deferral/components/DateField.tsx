import { Dayjs } from "dayjs";
import { DatePicker } from "components";
import { DeferralState } from "../state";
import { isEmptyString } from "../utils";

export function DateField(props: {
  onAccept: () => void;
  onChange: (date: Dayjs | null) => void;
  state: DeferralState;
}) {
  return (
    <DatePicker
      disabled={isEmptyString(props.state.duration)}
      label="Deferral Date"
      onAccept={props.onAccept}
      onChange={props.onChange}
      pickerId="deferral-date"
      value={props.state.date}
      width="100%"
    />
  );
}
