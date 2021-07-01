import { Dayjs } from "dayjs";

export type DeferralType = "MEL" | "CDL" | "NEF" | "";

export type DeferralCategory = "A" | "B" | "C" | "D" | "P" | "CDL" | "";

export interface DeferralState {
  title: string;
  subtitle: string;
  type: DeferralType;
  number: string;
  category: DeferralCategory;
  duration: string;
  date: Dayjs | null;
}

export interface DurationAttributes {
  value: "" | "3" | "10" | "120";
  disabled: boolean;
}

interface StringAction {
  type: "CHANGE_TYPE" | "CHANGE_NUMBER" | "CHANGE_CATEGORY" | "CHANGE_DURATION";
  payload: string;
}

interface DayjsAction {
  type: "CHANGE_DATE";
  payload: Dayjs | null;
}

export type DeferralAction = StringAction | DayjsAction;

export type DeferralDispatch = (action: DeferralAction) => void;
