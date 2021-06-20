import { Dayjs } from "dayjs";
import { DatePicker } from "components";
import { isEmptyString } from "../isEmptyString";
import { DeferralState } from "../types";

interface DateFieldProps {
  onAccept: () => void;
  onChange: (date: Dayjs | null) => void;
  state: DeferralState;
}

export function DateField({ onAccept, onChange, state }: DateFieldProps) {
  return (
    <DatePicker
      disabled={isEmptyString(state.duration)}
      label="Deferral Date"
      onAccept={onAccept}
      onChange={onChange}
      pickerId="deferral-date"
      value={state.date}
      width="100%"
    />
  );
}
