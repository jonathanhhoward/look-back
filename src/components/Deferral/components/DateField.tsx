import { Dayjs } from "dayjs";
import { DatePicker } from "components";
import { DeferralState } from "../types";
import { isEmptyString } from "../utils";

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
